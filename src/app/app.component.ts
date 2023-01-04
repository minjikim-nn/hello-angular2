import { Component } from '@angular/core';

// AppComponent를 꾸며주는 역할
@Component({
  // 태그 메인? --> index.html <app-root></app-root>
  selector: 'app-root',
  // html, css 파일
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// 태그네임, html, css 파일을 갖고 있는 조각 느낌
export class AppComponent {
  title = 'hello-angular';


  /*
    이런형태의 데코레이터? 도 있음
    @Input() height: number;
    height 멤버변수, input이 height를 꾸며줌?

  */
}
