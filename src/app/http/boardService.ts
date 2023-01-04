import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MjClient } from './mjClient';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class boardService extends MjClient{
  path = '/board';
  constructor(protected override http: HttpClient){
    super('http://localhost:8080', http);
  }


  // 공지사항
  getNotice(): Observable<Object>{
    return this.http.get(this.url + this.path);
  }

  // 카드리스트
  getCardList(): Observable<Object>{
    return this.http.get(this.url + this.path + '/cardList');
  }

  // 카드리스트 상세
  getCardListDetail(id: number): Observable<Object>{
    return this.http.get(this.url + this.path + `/cardList/${id}`);
  }

  // 출석일자(사용안함)
  getWorkList(): Observable<Object>{
    console.log(this.url + this.path + `/workList`)
    return this.http.get(this.url + this.path + `/workList`);
  }

  // 직원별 조회(사용안함)
  getWorkListName(name: string): Observable<Object>{
    console.log(this.url + this.path + `/workList/${name}`)
    return this.http.get(this.url + this.path + `/workList/${name}`);
  }

  // groupBy 로 가져오기
  getWorkCount(): Observable<Object>{
    console.log(this.url + this.path + `/workList/count`)
    return this.http.get(this.url + this.path + `/workList/count`);
  }
}
