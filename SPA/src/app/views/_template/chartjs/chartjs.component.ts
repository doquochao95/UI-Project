import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-chartjs',
  templateUrl: './chartjs.component.html',
  styleUrls: ['./chartjs.component.css'],
})
export class ChartjsComponent implements OnInit {
  constructor() {}
  // lineChart
  public lineChartType: ChartType = 'line';
  public lineChartLegend = true;
  public lineChartOptions: ChartOptions = {
    responsive: true,
    title: {
      display: true,
      text: 'Line Chart',
      fontSize: 18
    },
    legend: {
      display: false
    },
    plugins: {
      datalabels: {
        align: 'end'
      }
    },
    tooltips: {
      enabled: false,
      custom: CustomTooltips
    },
  };
  public lineChartColours: Array<any> = [
    {
      // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)',
    },
    {
      // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)',
    },
    {
      // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)',
    },
  ];
  public lineChartLabels: Array<any> = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
  ];
  public lineChartData: Array<any> = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },
    { data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C' },
  ];

  // barChart
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true,
    tooltips: {
      enabled: false,
      custom: CustomTooltips
    },
  };
  public barChartLabels: string[] = [
    '2006',
    '2007',
    '2008',
    '2009',
    '2010',
    '2011',
    '2012',
  ];
  public barChartData: any[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },
  ];

  // Doughnut
  public doughnutChartType: ChartType = 'doughnut';
  public doughnutChartLabels: string[] = [
    'Download Sales',
    'In-Store Sales',
    'Mail-Order Sales',
  ];
  public doughnutChartData: number[] = [350, 450, 100];

  // Radar
  public radarChartType: ChartType = 'radar';
  public radarChartLabels: string[] = [
    'Eating',
    'Drinking',
    'Sleeping',
    'Designing',
    'Coding',
    'Cycling',
    'Running',
  ];

  public radarChartData: any = [
    { data: [65, 59, 90, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 96, 27, 100], label: 'Series B' },
  ];

  // Pie
  public pieChartType: ChartType = 'pie';
  public pieChartLabels: string[] = [
    'Download Sales',
    'In-Store Sales',
    'Mail Sales',
  ];
  public pieChartData: number[] = [300, 500, 100];

  // PolarArea
  public polarAreaChartType: ChartType = 'polarArea';
  public polarAreaLegend = true;
  public polarAreaChartLabels: string[] = [
    'Download Sales',
    'In-Store Sales',
    'Mail Sales',
    'Telesales',
    'Corporate Sales',
  ];
  public polarAreaChartData: number[] = [300, 500, 100, 40, 120];


  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  ngOnInit(): void {}
}
