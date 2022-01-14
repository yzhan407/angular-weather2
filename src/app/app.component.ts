import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { locationValidator } from './asnyc-location.validator';
import { BackendCallService } from './backend-call.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'angular-weather2';
  landingGroup!: FormGroup;
  city!: FormControl;
  ngUnSub = new Subject();
  weatherRes: any = null;
  imagesData: any = null;
  chartData: any = null;
  hourlyData: any = null;
  constructor(private backend: BackendCallService) {
    this.landingGroup = new FormGroup({
      city: (this.city = new FormControl('', {
        asyncValidators: locationValidator(this.backend),
      })),
    });
    this.backend.weatherResult
      .pipe(takeUntil(this.ngUnSub))
      .subscribe((weatherRes: any) => {
        this.weatherRes = weatherRes;
        this.imagesData = {
          id: weatherRes.current.weather[0].id,
          main: weatherRes.current.weather[0].main,
          temp: weatherRes.current.temp,
          humidity: weatherRes.current.humidity,
          wind_speed: weatherRes.current.wind_speed,
        };
        this.chartData = this.weatherRes.daily;
        this.hourlyData = this.weatherRes.hourly;
      });
  }
  ngOnInit(): void {
    this.city.valueChanges.subscribe((value) => {
      if ((!value && this.weatherRes) || this.city.errors) {
        this.weatherRes = null;
        this.imagesData = null;
        this.chartData = null;
        this.hourlyData = null;
      }
    });
  }
  ngOnDestroy(): void {
    this.ngUnSub.next('');
    this.ngUnSub.complete();
  }
}
