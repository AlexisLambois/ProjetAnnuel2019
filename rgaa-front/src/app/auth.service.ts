import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = `${environment.apis.rest}/login`;

  constructor(private http: HttpClient, private router: Router) {
  }

  login(data): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.http.post<any>(this.url, data, {headers: environment.httpHeaders}).subscribe((token: any) => {
        console.log(token);
        this.save_token(token);
        return resolve(token);
      });
    });
  }

  private save_token(data) {
    if (data.success) {
      localStorage.setItem('token', data.token);
      return;
    }
  }

  canActivate(): boolean {
    const token = localStorage.getItem('token');
    if (token == null) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
