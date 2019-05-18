import {Injectable} from '@angular/core';

import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../environments/environment";
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root',
})

// interface TestData {
//   no: number;
//   name: string;
//   id: string;
//   regTime: string;
//   updTime: string;
// }


export class TestDbDataService {

  constructor (private http: HttpClient) { }

  //application/json > method: OPTION으로 변환되는 문제
  //application/x-www-form-urlencoded
  createData(newData): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'}),
    }
    return this.http.post(environment.url + '/api/v1/member/newMember', JSON.stringify(newData), httpOptions)
      .pipe(map(res => res));
  }

  async getData(): Promise<any> {
    return this.http.get<any[]>(environment.url + '/api/v1/member/test').toPromise().then(res => {
      return res;
    }).catch(err => {
      return err;
    });
  }

}
