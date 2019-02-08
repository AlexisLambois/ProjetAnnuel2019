import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FormatageService {
  isMock: boolean;

  constructor(private http: HttpClient) {
    this.isMock = environment.isDebug;
  }

  getFile(fileName: string): any {
    const url = this.isMock ? 'assets/mocks/orders.json' : `${environment.apis.rest}/uploads/` + fileName;
    return this.http.get(url);
  }

}
