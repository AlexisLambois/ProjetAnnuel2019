import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Contact} from '../shared/contact';

@Injectable({
  providedIn: 'root'
})
export class AuditService {
  isMock: boolean;

  constructor(private http: HttpClient) {
    this.isMock = environment.isDebug;
  }

  postContact(contact: Contact): Promise<String> {
    return new Promise<String>((resolve, reject) => {
      this.http.post<Contact>(this.isMock ? 'assets/mocks/contact.json' : `${environment.apis.rest}/contact/`,contact,{headers: environment.httpHeaders}).subscribe((contact: Contact) => {
        return resolve('2 Votre demande d\'audit a été prise en comtpe pour le domaine : ' + contact.hostname);
      }, error => {
        if (error.status == 406 ) {
          return resolve('4 Le nom de domaine est déjà présent en base de données !');
        }
      });
    });
  }

}
