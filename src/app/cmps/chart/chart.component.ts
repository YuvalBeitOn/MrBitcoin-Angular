import { Component, Input, OnInit } from '@angular/core';




@Component({
  selector: 'chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  @Input() data;
  @Input() title;

  type = 'LineChart'

  options = {
    legend: { position: 'none' },
    backgroundColor: {
      fill: 'whith',
    },
    colors: ['blue'],
    titleTextStyle: { color: '#FFF', fontSize: 14 },
    vAxis: {
      textStyle: {
        color: 'rgb(39, 39, 39)'
      },
    },
    hAxis: {
      format: 'short',
      textStyle: {
        color: 'rgb(39, 39, 39)'
      },
    },
    chartArea: { width: '84%', height: '65%' },
    curveType: 'function'
  }

  constructor() {

  }

  ngOnInit(): void {

  }







}
