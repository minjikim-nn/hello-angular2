import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from "@angular/common/http";
import { Observable } from "rxjs";
// HttpClient는 responseType을 설정하지 않을 경우 기본적으로 json 데이터 반환
// 다른 데이터를 요청할때는 responseType 옵션 설정을 따로 해야함

export class MjClient{
    // 같은 패키지 내 또는 상속 클래스에서 사용
    protected url: string;
    protected http: HttpClient;
    // protected httpHeader: HttpHeaders;

    constructor(url: string, http: HttpClient){
        this.http = http;
        this.url = url;
    }
    // header, params 값 가져오기
    public get(path: string, params?: any): Observable<any>{
        // get 사용시 path 값을 필수로 받고, params은 있으면 받고 없으면 안받음
        // Observable 찾아보기
        return this.http.get<HttpResponse<any>>(this.url + path, this.getHttpOption(params));
    }

    // header 기본 설정, 해당 클래스에서만 사용함
    private getHttpOption(params?: any){
        let defaultHeader = {
            // 성능향상에 좋음
            'Content-Type': 'application/json;charset-=utf-8',
            // 보내는 데이터를 json 형식으로 정의한다는 뜻
            'Accept': 'application/json;charset=utf-8',
            // json 형식으로 받겠다
        }
        let httpOption: {
            header: Headers,
            params?: HttpParams
        } = {
            header: new Headers(defaultHeader)
        }
        if(params){
            httpOption['params'] = new HttpParams(params)
        }
        return httpOption;
    }
}

