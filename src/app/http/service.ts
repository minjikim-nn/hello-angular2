import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { MjClient } from './mjClient';

@Injectable({
    // 클래스를 활용하겠다는 의미
    providedIn: 'root'
    // 전역에서 사용(최상위 인젝터에 등록)
})
export class Service extends MjClient{

    // protected Search: any;
    path = '/search';
    detail = '/detail';
    update = '/update';

    constructor(protected override http: HttpClient){
      // 중복 주소 기재,
      // super 내 path 기재해주면 따로 입력하지 않아도 됨
      super('http://localhost:8080', http);
      // super --> MjClient
    }
    // /section 접속시 검색1의 값을 가져옴
    getSearch1Data(): Observable<Object>{
      console.log(this.url + this.path)
      return this.http.get(this.url + this.path);
    }

    // 검색1 선택시 selectBox 검색2의 값을 가져옴
    getSearch2Data(id: number): Observable<Object>{
      console.log('search1 선택 id ::: ',id);
      return this.http.get(this.url + this.path + `/selectBox/${id}`)
    }

    // /section 접속시 grid에 전체 값 가져오기
    // getGridDate(): Observable<Object>{
    //   return this.http.get(this.url + this.path + `/grid`)
    // } --> getResultData 로 흡수됨

    // 검색버튼 클릭시 selectBox2 선택된 id 값을 가져옴
    getResultData(id?: number): Observable<Object> {
      // if 문 삭제 --> 백에서 if 문 사용
      const params = id ? {params: {id: id}} : {};
      return this.http.get(this.url + this.path  + `/result`, params);
    }
    // 입력시 result db에 값 저장
    postColumnSave(object: any): Observable<Object>{
      console.log(this.url + this.path, object);
      return this.http.post(this.url + this.path, object);
    }

    // 상세페이지
    getDetailData(id: number): Observable<Object>{
      return this.http.get(this.url + this.detail + `/${id}`)
    }
    // 저장
    putDetailChange(object: any): Observable<Object>{
      console.log(this.url + this.path + this.update, object)
      return this.http.put(this.url + this.path + this.update, object)
    }
    // 삭제
    // deleteData(id: number): Observable<Object>{
    //   console.log(this.url + this.path  + `/result`, {params: {id: id}})
    //   return this.http.delete(this.url + this.path  + `/result`, {params: {id: id}})
    // }
    deleteData(id: number): Observable<Object>{
      return this.http.delete(this.url + this.path  + `/result/${id}`)
    }

}
