import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ParameterService {

  constructor() {
  }

  // filter: blur(2px);

  get fontSize(): number {
    const actualSize = +localStorage.getItem('size');
    return (actualSize > 15 && actualSize < 21 ? +localStorage.getItem('size') : 15);
  }

  get fontFamily(): boolean {
    return (localStorage.getItem('family') === 'true');
  }

  setFontSize(change: number): void {
    const actualSize: number = +localStorage.getItem('size') !== 0 ? +localStorage.getItem('size') + change : 15 + change;
    if (actualSize > 15 && actualSize < 20) {
      localStorage.setItem('size', String(actualSize));
    }
  }

  setFontFamily(): void {
    localStorage.setItem('family', String(!this.fontFamily));
  }

  get effects(): number {
    return +localStorage.getItem('effects');
  }

  setEffects(effects: string) {
    localStorage.setItem('effects',effects);
  }
}
