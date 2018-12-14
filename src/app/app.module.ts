import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {ChartsModule} from 'ng2-charts';
import { BarChartsComponent } from './charts/bar-charts/bar-charts.component';
import { LineChartComponent } from './charts/line-chart/line-chart.component';
import { PieChartComponent } from './charts/pie-chart/pie-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    BarChartsComponent,
    LineChartComponent,
    PieChartComponent
  ],
  imports: [
    ChartsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
