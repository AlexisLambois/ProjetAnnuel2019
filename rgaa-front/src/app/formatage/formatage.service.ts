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

  postContact(name: string, email: string, phonenumber: string): Promise<Contact> {
    return new Promise<Contact>((resolve, reject) => {
      this.http.post<Contact>(this.isMock ? 'assets/mocks/contact.json' : `${environment.apis.rest}/contact/`, {
        name: name,
        email: email,
        phonenumber: phonenumber
      }, {headers: environment.httpHeaders}).subscribe((contact: Contact) => {
        return resolve(contact);
      }, error => {
        if (error.status == 406) {
          return resolve(null);
        }
      });
    });
  }

  sendFile(name: string, email: string, phonenumber: string, file: File): any {
    const url = this.isMock ? 'assets/mocks/orders.json' : `${environment.apis.rest}/file/uploadFile`;
    return new Promise<String>((resolve, reject) => {
      let formdata: FormData = new FormData();
      formdata.append('file', file);
      this.http.post<String>(url, formdata).subscribe((response: any) => {
        return resolve('2 Le fichier ' + response.fileName + ' a été envoyé avec succès !');
      }, error => {
        if (error.status == 406) {
          return resolve('4 Le nom de domaine est déjà présent en base de données !');
        }
      });
    });
  }

}
