import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit{
  count = 0;
  // @Output() clickEvent = new EventEmitter<string>(); --> type 지정시 21번째 줄 오류남
  @Output() clickEvent = new EventEmitter();
  // 부모객체로 올라감
  constructor(){

  }
  // 어떤 이벤트인지 명시해줌
  // 매개변수 전달
  executeBtn(command: any){
    console.log('버튼 테스트중', command)
    this.count++;
    // 자식 컴포넌트에서 부모 컴포넌트한테 데이터 전달용
    this.clickEvent.emit(command);
  }
  ngOnInit(){

  }
}
