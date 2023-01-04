import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionComponent } from './section.component';
import { GridComponent } from './grid/grid.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SectionComponent,
    GridComponent,
    SearchComponent,
  ],
  exports: [
    SectionComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class SectionModule { }
