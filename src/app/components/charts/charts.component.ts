import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {
  
  bigChart = [];
  pieChart = [];

  constructor(private service: ServiceService) {}

  ngOnInit() {
    this.bigChart = this.service.bigChart();
    this.pieChart = this.service.pieChart();
  }
}
