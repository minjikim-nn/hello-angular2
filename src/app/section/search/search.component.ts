import { Service } from './../../http/service';
import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent{
  // 자식 컴포넌트 설정 --> 부모컴포넌트에서 데이터 보내면 item에 저장
  @Input() item = '';
  // 부모컴포넌트로 데이터 전달
  // Output 데코레이터는 반드시 EventEmitter 타입의 프로퍼티에 선언해야함
  @Output() searchDataChange = new EventEmitter();

  constructor(protected service: Service){

  }
  selectValue: any = '';
  selectValue2: any = '';
  searchList: any = [];
  searchList2:any = [];
  resultList: any = [];


  // 컴포넌트 실행 시 바로 실행되어야 할 코드
  // search1 값 가져오기
  ngOnInit(): void {
    this.service.getSearch1Data().subscribe((res: any)=> {
      this.searchList = res;
    });
  }

  // search2 값 가져오기
  selectChange() {
    this.service.getSearch2Data(this.selectValue).subscribe((res: any) => {
        this.searchList2 = res;
    });
  }

  // 검색버튼 실행(result 값)
  onSearch(event: any){
    if(this.selectValue === null){
      console.log('search1 :::',this.selectValue);
    }else{
      if(this.selectValue2 === null){
        alert('search2 선택안됨 :::')
        return;
      }else{
        this.service.getResultData(this.selectValue2).subscribe((res: any) => {
          this.resultList = res;
          // emit 객체 호출 --> 부모 컴포넌트에 전달하는 역할을 함(resultList 전달)
          this.searchDataChange.emit(this.resultList);
        })
      }
    }
  }






  value = '';

  onInput(event: any){
    this.value = event.target.value;
    console.log('event:', event.target.value);
  }



  // currentItem = {
  //   name:'dust'
  // };
  // getValue(event: Event){
  //   console.log('event', event);
  //   return (event.target as HTMLInputElement).value;
  //   // return event.target.value --> event:Event라 안됨
  // }
}
