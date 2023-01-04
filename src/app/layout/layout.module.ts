import { FooterComponent } from './../footer/footer.component';
import { HeaderComponent } from './../header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    // 선언, 사용할 수 있는 상태
    HeaderComponent,
    FooterComponent
  ],
  exports:[
    // 다른 모듈에서 사용가능
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    // module을 import
    CommonModule
  ]
})
export class LayoutModule { }
