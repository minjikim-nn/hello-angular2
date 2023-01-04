import { ChartComponent } from './chart/chart.component';
import { CardComponent } from './card/card.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './board.component';



@NgModule({
  declarations: [
    BoardComponent,
    CardComponent,
    ChartComponent
  ],
  exports: [
    BoardComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class BoardModule { }
