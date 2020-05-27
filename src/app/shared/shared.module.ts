import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AreaComponent } from './area/area.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { PieComponent } from './pie/pie.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    HeaderComponent,
    AreaComponent,
    PieComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HighchartsChartModule
  ],
  exports: [
    AreaComponent,
    PieComponent,
    HeaderComponent
  ]
})
export class SharedModule { }
