import {Component, HostListener, OnInit} from '@angular/core';
import {ParameterService} from '../general/parameter.service';
import {FormatageService} from './formatage.service';

@Component({
  selector: 'app-formatage',
  templateUrl: './formatage.component.html',
  styleUrls: ['./formatage.component.css']
})
export class FormatageComponent implements OnInit {

  uploadFileName: string;
  currentFileUpload: File;
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

  display(): void {
    this.formatageService.getFile(this.currentFileUpload);
  }

}
