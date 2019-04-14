import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Data} from './home.component';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor(private http: HttpClient) {
  }

  getDatas(): Promise<Data[]> {
    const url = `${environment.apis.rest}/enregistrement/`;
    return new Promise<Data[]>((resolve, reject) => {
      this.http.get<Data[]>(url, {headers: environment.httpHeaders}).subscribe((response: Data[]) => {
        return resolve(response);
      });
    });
  }
}
