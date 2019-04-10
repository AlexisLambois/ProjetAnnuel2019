import {AfterViewInit, Component, HostListener, OnInit} from '@angular/core';
import {ParameterService} from '../general/parameter.service';
import {FormatageService} from './formatage.service';
import {ContactFormatage} from '../shared/contact';

@Component({
  selector: 'app-formatage',
  templateUrl: './formatage.component.html',
  styleUrls: ['./formatage.component.css']
})
export class FormatageComponent implements OnInit, AfterViewInit {

  uploadFileName: string;
  currentFileUpload: File;
  available = false;
  message: String = '';
  private isMobileResolution: boolean;

  constructor(private paramService: ParameterService, private formatageService: FormatageService) {
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
    this.uploadFileName = 'Pas de fichier';
  }

  ngAfterViewInit() {
    this.paramService.refreshEffect();
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

  fileSelected(event) {
    this.currentFileUpload = event.target.files[0];
    this.uploadFileName = event.target.files[0].name;
  }

  onSubmit(name, email, phonenumber) {
    if (this.available = this.isAvailable(name.value, email.value, phonenumber.value)) {
      this.formatageService.postContact(name.value, email.value, phonenumber.value, this.uploadFileName).then((contactId: number) => {
        this.formatageService.sendFile(contactId, this.currentFileUpload).then(res => {
          this.message = res;
          if (res.charAt(0) == '2') {
            (<HTMLInputElement>document.getElementById('name')).value = '';
            (<HTMLInputElement>document.getElementById('email')).value = '';
            (<HTMLInputElement>document.getElementById('phonenumber')).value = '';
            this.uploadFileName = '';
          }
        });
      });
    } else {
      this.message = '4 Les champs ne respecte pas les critères !';
    }
  }

  isAvailable(name, email, phoneNumber): boolean {
    return name !== '' && email !== '' && email.indexOf('@') >= 0 && email.indexOf('.') >= email.indexOf('@') && phoneNumber.length == 10;
  }
}
