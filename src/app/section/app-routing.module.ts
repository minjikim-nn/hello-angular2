import { BoardComponent } from './../board/board.component';
import { AppComponent } from './../app.component';
import { StopwatchComponent } from './../main/stopwatch/stopwatch.component';
import { MainComponent } from '../main/main.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SectionComponent } from './section.component';

export const routes: Routes = [
  // routes 선언, type Routes
  {
    path: '',
    // redirectTo: 'index',
    pathMatch: 'full',
    // prefix 대충 맞아도
    // full 은 정확하게 맞아야 redirect 시킴
    component: AppComponent
    // default page
  },
  {
    path: 'main',
    // redirectTo: 'stopwatch',
    component: MainComponent
  },
  {
    path: 'section',
    // index로 redirect 시킨 후 AppComponent를 보여줌
    // localhost로 접속했을 때 주소창에 자동으로 localhost:4200/index
    component: SectionComponent,
  },
  {
    path: 'board',
    component: BoardComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
