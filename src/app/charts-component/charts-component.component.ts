import { Component, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartOptions, ChartType, LineControllerChartOptions, LineOptions } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-charts-component',
  templateUrl: './charts-component.component.html',
  styleUrls: ['./charts-component.component.css'],
})
export class ChartsComponentComponent implements OnInit {
  @Output() dateClick: EventEmitter<Date> = new EventEmitter()
  @Input() chartData: Array<{
    weather: Array<{id: string}>;
    temp: {day: string};
    dt: string;
    humidity: string;
  }> = [];
  myHourlyData: ChartConfiguration['data'] = {
    datasets: [{
      data: [],
      backgroundColor: 'rgb(230, 255, 255)',
      borderColor: 'rgb(179, 229, 252)',
      label:'',
      cubicInterpolationMode: 'monotone',
      pointBackgroundColor: 'rgb(179, 229, 252)',
      pointBorderColor: 'rgb(179, 229, 252)',
      pointRadius: 1,
      pointHoverRadius: 5,
      pointHoverBorderWidth: 2,
      pointHoverBackgroundColor: 'rgb(179, 229, 252)',
      pointHoverBorderColor: 'white',
      fill: 'origin',
    }],
    labels: []
  };
  public lineChartLabels: Array<any>=this.myHourlyData.datasets[0].data.map((_,ind)=>ind);
  // the legend just does not what to go away... what a legend
  // so I used another div to cover the top
  // makes it look like disappear(may have trouble in some cases)
  public lineChartOptions: ChartConfiguration['options'] = {
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          display: false
        }
      },
      y: {
        grid: {
          display: false,
        },
        ticks: {
          display: false
        }
      },
    },
    plugins: {
      legend: {
        display: false,
        position: 'top',
        fullSize: false,
      },
      tooltip: {
        backgroundColor: 'rgba(0,0,0,0)',
        titleColor: 'rgb(0, 0, 0, 0)',
        titleFont: {weight: 'bold'},
        bodyFont: {weight: 'bold'},
        bodyColor: 'rgb(179, 229, 252)',
        displayColors: false,
        mode: 'nearest',
        padding: 10,
        intersect: false,
        xAlign: 'center',
        yAlign: 'bottom',
      }
    }
  }
  ;
  public lineChartColors = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
  ];
  public lineChartLegend = true;
  public lineChartType: ChartType = 'line';
  public lineChartPlugins = [];
  @Input() set hourlyData(value: Array<{
    dt: number;
    temp: number;
  }>){
    this.myHourlyData.datasets[0].data = value.map((val, ind)=>{
      return val.temp
    })
    this.myHourlyData.labels = value.map((val,ind)=> {
      return ind + 'h'
    })
    console.log(this.myHourlyData.labels);
  };
  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;
  dateArr: Array<any> = [];
  constructor() {
    const temp = new Date();
    for(let i=0; i<4; i++){
      this.dateArr.push(new Date().setDate(temp.getDate()+i))
    }
  }
  
  ngOnInit(): void {}
  // public lineChartOptions: ChartConfiguration['options'] = {
  //   elements: {
  //     line: {
  //       tension: 0.5
  //     }
  //   },
  //   // scales: {
  //   //   x: {},
  //   //   'y-axis-0':
  //   //     {
  //   //       position: 'left',
  //   //     },
  //   //   'y-axis-1': {
  //   //     position: 'right',
  //   //     grid: {
  //   //       color: 'rgba(255,0,0,0.3)',
  //   //     },
  //   //     ticks: {
  //   //       color: 'red'
  //   //     }
  //   //   }
  //   // },

  //   plugins: {
  //     legend: { display: true },
  //   }
  // };

  // public lineChartType: ChartType = 'line';
  onClickDate(i: number){
    this.dateClick.emit(this.dateArr[i]);
  }

}
