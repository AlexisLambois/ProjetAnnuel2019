import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ParameterService {

  constructor() {
  }

  get fontSize(): string {
    const actualSize = +localStorage.getItem('size');
    return (actualSize > 15 && actualSize < 24 ? +localStorage.getItem('size') : 15) + 'px';
  }

  setFontSize(change: number): void {
    const actualSize: number = +localStorage.getItem('size') !== 0 ? +localStorage.getItem('size') + change : 15 + change;
    console.log(actualSize);
    if (actualSize > 15 && actualSize < 24) {
      localStorage.setItem('size', String(actualSize));
    }
  }
}
