import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ParameterService} from '../general/parameter.service';

@Component({
  selector: 'app-whoweare',
  templateUrl: './whoweare.component.html',
  styleUrls: ['./whoweare.component.css']
})
export class WhoweareComponent implements OnInit, AfterViewInit {

  constructor(private paramService: ParameterService) {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.paramService.refreshEffect();
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
    window.location.href = path;
  }
}
