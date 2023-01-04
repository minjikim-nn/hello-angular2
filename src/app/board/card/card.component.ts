import { Component, Input } from '@angular/core';
import { boardService } from 'src/app/http/boardService';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() idx: any;
  @Input() card: any;

  cardDetailList: any;
  constructor(protected service: boardService){

  }

  ngOnInit() {
    // 카드리스트 상세
    this.service.getCardListDetail(this.idx + 1).subscribe((res) => {
      // console.log('id 값으로 가져온 card detail 값 :::', res);
      this.cardDetailList = res;
    })
  }

}
