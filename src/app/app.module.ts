import { BoardModule } from './board/board.module';
import { MainModule } from './main/main.module';
import { StopwatchModule } from './main/stopwatch/stopwatch.module';
import { RouterModule } from '@angular/router';
import { SectionModule } from './section/section.module';
import { LayoutModule } from './layout/layout.module';
import { HelloWorldComponent } from './hello/hello-world.component';
import { HelloComponent } from './hello/hello.components';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { routes, AppRoutingModule } from './section/app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';

import { INFORMATION } from './MyType';

const myData: INFORMATION = { // 전달할 데이터
  data1: 'data1',
  data2: 1433,
  data3: ['data3_1', 'data3_2']
}

// appModule class를 module로 만들겠다
@NgModule({
    //
    declarations: [
        AppComponent,
        // 컴포넌트 추가
        HelloComponent,
        HelloWorldComponent,
        /*

        터미널 명령어로
        ng generate component header
        입력하면 위에 자동으로 추가 됨
        app 파일 밑에 header 파일 자동 생성(모듈 자동 생성)

        ng g c footer

        module 추가
        ng g m layout
        */
    ],
    exports: [
    // js export와 같은 기능 --> 다른 모듈에서 사용할 수 있도록
    ],
    providers: [
      // { provide: 이름, useValue: 값 }
      //  값을 받을 이름, 매핑할 데이터
      { provide: 'sending_name', useValue: myData }
      // --> 모듈이 전달한 데이터는 컴포넌트 생성자를 통해서 받을 수 있음 (main.ts)
      // 이런식으로 모듈에서 컴포넌트에게 모듈이 관리하는 데이터, 객체 등을 전달할 수 있음
    ],
    bootstrap: [AppComponent],
    imports: [
        // component를 묶어서 사용할 때 module사용
        BrowserModule,
        // declarations에 추가하지 않아도 사용가능함
        AppRoutingModule,
        // routing 담당
        LayoutModule,
        RouterModule.forRoot(routes),
        SectionModule,
        MainModule,
        BoardModule,
        // httpClientModule import
        HttpClientModule,
        // httpClient 서비스는 모든 동작에 옵저버블 활용,
    ]
})
export class AppModule { }
