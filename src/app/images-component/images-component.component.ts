import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-images-component',
  templateUrl: './images-component.component.html',
  styleUrls: ['./images-component.component.scss'],
})
export class ImagesComponentComponent implements OnInit {
  time = new Date();
  @Input() weatherData!: {
    id: string;
    main: string;
    temp: string;
    humidity: string;
    wind_speed: string;
  } | null;
  constructor() {}

  ngOnInit(): void {}
}
