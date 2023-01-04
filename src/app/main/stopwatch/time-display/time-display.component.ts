import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-time-display',
  templateUrl: './time-display.component.html',
  styleUrls: ['./time-display.component.css']
})
                                  // 생명주기 관련
export class TimeDisplayComponent implements OnInit{
  // changes[propName].currentValue 값의 변경
  @Input() inputData!: string;

  min: number = 0;
  set: number = 0;
  ms: number = 0;

  timeInterval: any;
  constructor(){
  }
  ngOnInit(){
  }
  timeStart(){
    // 추가시 한번만 실행
    // if (this.timeInterval) return;
    this.timeStop();
    // 처음 실행하면 undefined이ㅏㅁ
    console.log('처음실행',this.timeInterval);

    this.timeInterval = setInterval(() => {
      this.ms++;
      // 클릭시 2로 변경
      console.log('변수내에서 실행, 숫자가 하나씩 올라가는데', this.timeInterval);
    }, 10)
  }
  timeStop(){
    clearInterval(this.timeInterval);
    console.log(this.timeInterval)
  }
  timeReset(){
    this.timeStop();
    this.ms = 0;
  }

  // 10번째줄이랑 연결, 값이 변경되야 동작함 --> setInterval이 계속 추가되지않음
  ngOnChanges(changes: SimpleChanges){
    // currentValue -> start / previousValue -> ''
    console.log('change', changes)
    // changes.currentValue 를 가져오려면 어케해야하지
    // changes[propName].currentValue
    for(let propName in changes){
      if(propName == 'inputData'){
        switch(changes[propName].currentValue){
          case 'start':
            this.timeStart();
            break;
          case 'stop':
            this.timeStop();
            break;
          case 'reset':
            this.timeReset();
            break;
        }
      }else{
        console.log('propName', propName);
      }
    }
  }
}
