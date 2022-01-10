import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-weather2';
  landingGroup!: FormGroup;
  city!: FormControl;
  constructor() {
    this.landingGroup = new FormGroup({
      city: (this.city = new FormControl('')),
    });
  }
}
