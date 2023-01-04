import { Component, Inject, OnInit } from '@angular/core';
import { INFORMATION } from '../MyType';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  // 블로그 12 보는중 https://lts0606.tistory.com/361
  constructor(@Inject("sending_name") my_type: INFORMATION){
    console.log(my_type);
    // 모듈에 정의한 데이터를 받을 수 있음
    // 데이터를 받을 때 Inject이라는 데코레이터를 사용, 소괄호에 provide를 통해 지어준 이름 값을 입력하면 됨
  }
  user_id: string = "";
  pwd: string = "";
  visible: boolean = true;
  visible1: boolean = false;
  visible2: boolean = false;

  message: string = "";
  styleArray = ["black", "red"];

  onLogin(): void{
    console.log(this.user_id, this.pwd);
    if(this.user_id == 'dust' && this.pwd == '1234'){
      alert('로그인 성공!')
      this.visible1 = true;
      this.visible = false;
    }else if(this.user_id != 'dust'){
      if(this.user_id == ""){
        this.setMessage = "아이디 입력안함"
      }else{
        this.setMessage = "아이디 틀림"
      }
    }
  }
  // set 은 함수를 속성 다루듯이 사용할 수 있게 해줌
  set setMessage(arg: string){
    this.message = arg;
  }

  ngOnInit(){
    let array: (number | string)[] = [1, 2, 3, '4', 5, '6'];
    let test: number[] = [];
    console.log('array: ', array)
    array.forEach((v) => {
      if(typeof v === 'string'){
        test.push(parseInt(v));
      }else{
        test.push(v);
      }
    })
    console.log('변환됨: ',test);

    this.game('가위')
  }


  game(text: '가위'|'바위'|'보'): ('가위'|'바위'|'보')[]{
    return [text];
  }

}



// import * as all from './~'; --> 파일 전체를 가져옴
// export default --> 대표적으로 하나만 가져오고 import시 중괄호 사용x
// export --> 여러개 가져옴 import시 중괄호 사용함(import { Component } from '@angular/core')
