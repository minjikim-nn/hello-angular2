import { Service } from './../http/service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent {
  // 자식컴포넌트로 데이터 전달하기
  // @Input() result: any;
  constructor(protected service: Service){}

  hidden = true;
  list = [];
  num = 1;

  name: string = '';
  ord: string = '';
  search_id: string = '';

  // 저장하기
  saveValue(){
    let params = {
      name : this.name,
      ord : this.ord,
      // 디비랑 소문자, 대문자 같아야함
      searchId : this.search_id
    };
    this.service.postColumnSave(params).subscribe((res) => {
      console.log(res)
      this.num = 1;

      // 한꺼번에 지우는 방법이 ㅇ없을까
      this.name = '';
      this.ord = '';
      this.search_id = '';
    }, (err)=> {

    })
  }

  resultList: Array<any> = [];
  currentItem = 'dust';

  addItem(gridValue: Array<any>){
    console.log('search --> section 데이터 전달 ::: ')
    this.resultList = gridValue;
  }



  // tab
  show(num: number){
    // this.hidden = !this.hidden;
    if(num){
      this.num = 1;
    }else{
      this.num = 0;
    }
  }
}







// import * as all from './~'; --> 파일 전체를 가져옴
// export default --> 대표적으로 하나만 가져오고 중괄호 사용x
// export --> 여러개 가져옴 중괄호 사용함
