import { WelcomeComponent } from './welcome/welcome.component';
import { FormsModule } from '@angular/forms';
import { TestComponent } from './test/test.component';
import { StopwatchComponent } from './stopwatch/stopwatch.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component'
import { StopwatchModule } from './stopwatch/stopwatch.module';

const routes: Routes = [
  {
    path: 'stopwatch',
    component: StopwatchComponent
  },
  {
    path: 'test',
    component: TestComponent
    // --> test component로 입력
  },
]

@NgModule({
  declarations: [
    MainComponent,
    WelcomeComponent,
  ],
  exports: [
    MainComponent,
    // exports 하지 않으면 설정값을 알 수 없음
    RouterModule,
  ],
  imports: [
    CommonModule,
    StopwatchModule,
    FormsModule,
    // router-outlet을 사용하기 위해서 module을 import시켜야함
    // path가 stopwatch, component 값이 StopwatchComponent인 값과 일치시키겠다는 뜻
    // 이 상태에서 export도 시켜줘야함
    RouterModule.forChild(routes),
  ]
})
export class MainModule { }
