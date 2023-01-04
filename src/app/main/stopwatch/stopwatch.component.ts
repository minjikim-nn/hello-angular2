import { Component } from '@angular/core';

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.css']
})
export class StopwatchComponent {
  present: string = '';
  commandText:any;
  constructor(){

  }
  startTime($event: string){
    // start
    this.present = $event;
    console.log('데이터 잘 옴!', $event);
  }
}
