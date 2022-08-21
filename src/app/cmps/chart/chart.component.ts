import { Component, Input, OnInit } from '@angular/core';
import {
  ChartBase,
  ChartEditorComponent,
  ChartType,
  FilterType,
  Formatter,
  ScriptLoaderService
} from 'angular-google-charts';

@Component({
  selector: 'chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  constructor() { }
  @Input() data!: any
  chart!: any

  ngOnInit(): void {
    this.chart = {
      title: this.data.name,
      type: ChartType.BarChart,
      data: this.data.values,
      columnNames: ['Element', 'Density'],
      options: {
        animation: {
          duration: 250,
          easing: 'ease-in-out',
          startup: true
        }
      },
    }
  }

}
