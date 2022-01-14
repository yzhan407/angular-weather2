import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyLibModule } from './my-lib/my-lib.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ImagesComponentComponent } from './images-component/images-component.component';
import { ChartsComponentComponent } from './charts-component/charts-component.component';
import { HttpClientModule } from '@angular/common/http';
import { BackendCallService } from './backend-call.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NgChartsModule } from 'ng2-charts';

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
    HttpClientModule,
    MyLibModule,
    NgChartsModule,
    MatProgressSpinnerModule,
  ],
  providers: [BackendCallService],
  bootstrap: [AppComponent],
})
export class AppModule {}
