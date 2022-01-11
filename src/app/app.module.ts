import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyLibModule } from './my-lib/my-lib.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ImagesComponentComponent } from './images-component/images-component.component';
import { ChartsComponentComponent } from './charts-component/charts-component.component';
import { NgChartsModule } from './ng2-charts/ng2-chart.module';

@NgModule({
  declarations: [
    AppComponent,
    ImagesComponentComponent,
    ChartsComponentComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MyLibModule,
    NgChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
