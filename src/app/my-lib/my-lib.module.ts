import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyInputComponent } from './my-input/my-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [MyInputComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatTooltipModule,
    MatIconModule,
  ],
  exports: [MyInputComponent],
})
export class MyLibModule {}
