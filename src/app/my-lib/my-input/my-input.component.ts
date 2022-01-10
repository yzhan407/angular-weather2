import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-my-input',
  templateUrl: './my-input.component.html',
  styleUrls: ['./my-input.component.css'],
})
export class MyInputComponent implements OnInit {
  @Input() control!: FormControl;
  @Input() width!: string;
  constructor() {}

  ngOnInit(): void {}
}
