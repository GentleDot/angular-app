import {Injectable} from '@angular/core';

import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment";


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
//

export class GetDbDataService {

  constructor (private http: HttpClient) { }

  async getData(): Promise<any> {
    return this.http.get<any[]>(environment.url + '/api/v1/member/test').toPromise().then(res => {
      return res;
    }).catch(err => {
      return err;
    });



  }
}
