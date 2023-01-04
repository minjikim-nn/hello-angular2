import { Component, Input, } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  // 받는 역할, 상위 --> 하위로
  // Output --> https://lts0606.tistory.com/351
  @Input() id: string = "";
  constructor(){

  }
}
