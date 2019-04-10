import {AfterViewInit, Component, HostListener, OnInit} from '@angular/core';
import {ParameterService} from '../general/parameter.service';
import {AuditService} from './audit.service';

@Component({
  selector: 'app-audit',
  templateUrl: './audit.component.html',
  styleUrls: ['./audit.component.css']
})
export class AuditComponent implements OnInit, AfterViewInit {

  private isMobileResolution: boolean;
  available = false;
  message: String = '';

  constructor(private paramService: ParameterService, private auditService: AuditService) {
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

  ngAfterViewInit() {
    this.paramService.refreshEffect();
  }

  onSubmit(hostname, email, phonenumber, comment) {
    if (this.available = this.isAvailable(hostname.value, email.value, phonenumber.value)) {
      this.auditService.postContact(hostname.value, email.value, phonenumber.value, comment.value).then(res => {
        this.message = res;
        if (res.charAt(0) == '2') {
          (<HTMLInputElement>document.getElementById('hostname')).value = '';
          (<HTMLInputElement>document.getElementById('email')).value = '';
          (<HTMLInputElement>document.getElementById('phonenumber')).value = '';
          (<HTMLInputElement>document.getElementById('comment')).value = '';
        }
      });
    } else {
      this.message = '4 Les champs ne respecte pas les critères !';
    }
  }

  isAvailable(domaineName, email, phoneNumber): boolean {
    return domaineName !== '' && email !== '' && email.indexOf('@') >= 0 && email.indexOf('.') >= email.indexOf('@') && phoneNumber.length == 10;
  }

  changeSize(event): void {
    this.paramService.setFontSize(event);
  }

  changeFamily(event): void {
    this.paramService.setFontFamily();
  }

  get fontSizeParam(): number {
    return this.paramService.fontSize;
  }

  get fontFamilyParam(): boolean {
    return this.paramService.fontFamily;
  }

}
