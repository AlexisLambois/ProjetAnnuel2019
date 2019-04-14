import {HttpHeaders} from '@angular/common/http';

export const environment = {
  production: false,
  isDebug: false,
  apis: {
    rest: 'http://localhost:8080/rgaa/rest'
  },
  httpHeaders : new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': 'true',
    'Accept': '*/*',
    'Access-Control-Expose-Headers': 'Authorization',
  })
};
