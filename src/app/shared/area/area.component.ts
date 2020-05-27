import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})
export class AreaComponent implements OnInit {
  chartOptions: {};
  @Input() data: any = [];

  Highcharts = Highcharts;
  constructor() {}

  ngOnInit() {
    this.chartOptions = {
      chart: {
        type: 'area'
      },
      title: {
        text: 'Area chart'
      },
      subtitle: {
        text: 'Temprature variations in different states [last week]'
      },
      tooltip: {
        split: true,
        valueSuffix: ' degrees'
      },
      exporting: {
        enabled: true
      },
      xAxis: {
        title: {
          text: 'Day'
        },
        tickInterval: 1,
        labels: {
          enabled: true,
          formatter: function() {
            return this.value[0]
          }
        }
      },
      yAxis: {
        title: {
          text: 'Temperature'
        }
      },
      series: this.data
    };

    HC_exporting(Highcharts);
  }
}
