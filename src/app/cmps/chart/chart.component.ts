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
  @Input() bitcoinData!: { name: string, description: string, values: any }
  chart!: any

  ngOnInit(): void {

    this.chart = {
      title: this.bitcoinData.name,
      type: ChartType.AreaChart,
      data: this.bitcoinData.values,
      columnNames: ['Element', 'Value'],
      options: {
        animation: {
          duration: 450,
          easing: 'ease-in-out',
          startup: true,
        },
        colors: ['#363739'], is3D: true
      },
    }
  }

}
