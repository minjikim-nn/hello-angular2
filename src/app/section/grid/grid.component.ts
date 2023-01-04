import { Component, Input, OnInit } from '@angular/core';
import { Service } from 'src/app/http/service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent {
  @Input() result: Array<any> = [];

  constructor(protected service: Service){
  }

  ngOnInit(): void {
    if(!this.result || this.result.length == 0){
      this.service.getResultData().subscribe((res: any) => {
        this.result = res;
      });
    }
  }

  detailPageShow = false;
  detailId: any;
  detailValue: any = [];


  // 상세페이지 수정/저장
  onSave(){
    this.service.putDetailChange(this.detailValue).subscribe((res) => {
      this.service.getResultData().subscribe((res: any) => {
        this.result = res;
      });
    })
  }
  // 삭제
  deleteDate(id: number, event: any){
    event.stopPropagation();
    if(confirm("삭제하시겠습니까?")){
      this.service.deleteData(id).subscribe((res) => {
        this.service.getResultData().subscribe((res: any) => {
          this.result = res;
          this.detailPageShow = false;
        });
      })
    }
  }

  // 상세페이지 보기
  showBtn(id: any){
    this.detailId = id;
    this.detailPageShow = true;
    this.service.getDetailData(this.detailId).subscribe((res) => {
      this.detailValue = res;
    })
  }
  // 상세페이지 닫기
  hideBtn(){
    this.detailPageShow = !this.detailPageShow
  }
}
