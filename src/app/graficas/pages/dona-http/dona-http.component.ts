import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Color, Label, MultiDataSet } from 'ng2-charts';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [
  ]
})
export class DonaHttpComponent implements OnInit {

  error = false
  public doughnutChartLabels: Label[] = [
//    'Download Sales', 'In-Store Sales', 'Mail-Order Sales', 'Other'
  ];
  public doughnutChartData: MultiDataSet = [
//    [350, 450, 100, 150]
  ];
  public doughnutChartType: ChartType = 'doughnut';

  public colors: Color[] = [
    {
      backgroundColor: [
        '#0075ED',
        '#00BAF7',
        '#00E0DB',
        '#00F7AD',
        '#00ED63',
      ]
    }
  ]

  constructor( private graficasService: GraficasService ) { }

  ngOnInit(): void {

    this.graficasService.getUsuariosRedesSocialesDonaData()
      .subscribe( ({ labels, values }) => {
        this.error=false
        this.doughnutChartLabels = labels;
        this.doughnutChartData.push( values );
      }, error => {
        this.error=true
      });
    
    // this.graficasService.getUsuariosRedesSociales()
    //   .subscribe( data => {
    //     this.error=false
    //     this.doughnutChartLabels = Object.keys( data );
    //     this.doughnutChartData.push( Object.values( data ) );
    //   }, error => {
    //     this.error=true
    //   });

  }

}
