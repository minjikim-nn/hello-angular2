import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeDisplayComponent } from './time-display/time-display.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { StopwatchComponent } from './stopwatch.component';



@NgModule({
  declarations: [
    StopwatchComponent,
    TimeDisplayComponent,
    ButtonsComponent,
  ],
  exports: [
    StopwatchComponent,
    // TimeDisplayComponent,
    // ButtonsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class StopwatchModule { }
