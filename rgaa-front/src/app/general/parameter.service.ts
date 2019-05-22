import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ParameterService {

  constructor() {
    this.refreshEffect();
  }

  get fontSize(): number {
    const actualSize = +localStorage.getItem('size');
    return (actualSize > 15 && actualSize < 21 ? +localStorage.getItem('size') : 15);
  }

  get fontFamily(): boolean {
    return (localStorage.getItem('family') === 'true');
  }

  get isContrastedMode(): boolean {
    return (localStorage.getItem('contrasted') === 'true');
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

  setContrastedMode(): void {
    localStorage.setItem('contrasted',  String(!this.isContrastedMode));
  }

  refreshEffect(): void {
    const actualEffect: number = +localStorage.getItem('effects');
    switch (actualEffect) {
      case 1: {
        if (document.getElementById('context1') !== null) {
          document.getElementById('context1').classList.add('blur');
        }
        if (document.getElementById('context2') !== null) {
          document.getElementById('context2').classList.add('blur');
        }
        break;
      }
      case 2: {
        if (document.getElementById('circle') !== null) {
          document.getElementById('circle').setAttribute('style', 'display:block');
        }
        break;
      }
    }
  }

  resetEffect(): void {
    if (document.getElementById('circle') !== null) {
      document.getElementById('circle').setAttribute('style', 'display:none');
    }
    if (document.getElementById('context1') !== null) {
      document.getElementById('context1').classList.remove('blur');
    }
    if (document.getElementById('context2') !== null) {
      document.getElementById('context2').classList.remove('blur');
    }
    localStorage.removeItem('effects');
  }

  setEffects(effects: number) {
    localStorage.setItem('effects', String(effects));
    this.refreshEffect();
  }
}
