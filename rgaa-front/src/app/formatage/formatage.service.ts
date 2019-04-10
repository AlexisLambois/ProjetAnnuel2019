import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FormatageService {
  isMock: boolean;

  constructor(private http: HttpClient) {
    this.isMock = environment.isDebug;
  }

  postContact(name: string, email: string, phonenumber: string, fileName: string): Promise<number> {
    return new Promise<number>((resolve, reject) => {
      this.http.post<number>(this.isMock ? 'assets/mocks/contact.json' : `${environment.apis.rest}/enregistrement/saveEnregistrement`, {
        name: name,
        email: email,
        phonenumber: phonenumber,
        fileName: fileName
      }, {headers: environment.httpHeaders}).subscribe((contactId: number) => {
        console.log(contactId);
        return resolve(contactId);
      }, error => {
        if (error.status == 406) {
          return resolve(null);
        }
      });
    });
  }

  sendFile(contactId: number, file: File): any {
    const url = this.isMock ? 'assets/mocks/orders.json' : `${environment.apis.rest}/enregistrement/uploadFile/` + contactId;
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
