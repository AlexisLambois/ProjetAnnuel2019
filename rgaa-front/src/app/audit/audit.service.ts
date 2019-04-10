import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuditService {
  isMock: boolean;

  constructor(private http: HttpClient) {
    this.isMock = environment.isDebug;
  }

  postContact(name: string, email: string, phonenumber: string, comment: string): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      this.http.post<string>(this.isMock ? 'assets/mocks/contact.json' : `${environment.apis.rest}/enregistrement/saveEnregistrement`, {
        name: name,
        email: email,
        phonenumber: phonenumber,
        comment: comment
      }, {headers: environment.httpHeaders}).subscribe( res => {
          return resolve('2 Votre demande d\'audit a été prise en comtpe pour le domaine : ' + name);
      }, error => {
        if (error.status == 406) {
          return resolve('4 Le nom de domaine est déjà présent en base de données !');
        }
      });
    });
  }

}
