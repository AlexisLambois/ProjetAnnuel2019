import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Contact} from '../shared/contact';

@Injectable({
  providedIn: 'root'
})
export class FormatageService {
  isMock: boolean;

  constructor(private http: HttpClient) {
    this.isMock = environment.isDebug;
  }

  getFile(file: File): any {
    const url = this.isMock ? 'assets/mocks/orders.json' : `${environment.apis.rest}/file/uploadFile`;
    return new Promise<String>((resolve, reject) => {
      let formdata: FormData = new FormData();
      formdata.append('file', file);

      this.http.post<String>(url,formdata).subscribe((response: any) => {
        return resolve(response);
      });
    });
  }

}
