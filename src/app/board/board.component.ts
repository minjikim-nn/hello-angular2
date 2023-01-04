import { boardService } from './../http/boardService';
import { Component } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent {

  constructor(protected service: boardService){

  }

  noticeList: any;
  cardList: any;

  // board 실행했을 때
  // 공지사항 따로, 출근 그래프 따로, 카드 데이터 따로 나와야함
  // 일단 다 불러오고 생각
  ngOnInit() {

    // 공지사항
    this.service.getNotice().subscribe((res) => {
      this.noticeList = res;
    });

    // 카드리스트
    this.service.getCardList().subscribe((res) => {
      this.cardList = res;
    })
  }

}
