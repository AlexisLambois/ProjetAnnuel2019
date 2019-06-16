import {Component, HostListener, OnInit} from '@angular/core';
import {ParameterService} from '../general/parameter.service';
import {RoutingService} from '../general/routing.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  private isMobileResolution: boolean;

  constructor(private paramService: ParameterService, private routing: RoutingService) {
    this.checkResolution();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.checkResolution();
  }

  checkResolution(): void {
    if (window.innerWidth <= 800) {
      this.isMobileResolution = true;
    } else {
      this.isMobileResolution = false;
    }
  }

  get getIsMobileResolution(): boolean {
    return this.isMobileResolution;
  }

  ngOnInit() {
  }

  changeSize(event) {
    this.paramService.setFontSize(event);
  }

  changeFamily(event) {
    this.paramService.setFontFamily();
  }

  get fontSizeParam(): number {
    return this.paramService.fontSize;
  }

  get fontFamilyParam(): boolean {
    return this.paramService.fontFamily;
  }

  redirectTo(path: string): void {
    this.routing.redirectTo(path);
  }

  get contrastedMode(): boolean {
    return this.paramService.isContrastedMode;
  }

  changeContrasted(event) {
    this.paramService.setContrastedMode();
  }

  onSubmit(name, email, message) {
    (<HTMLInputElement>document.getElementById('name')).value = '';
    (<HTMLInputElement>document.getElementById('email')).value = '';
    (<HTMLInputElement>document.getElementById('message')).value = '';
  }
}
