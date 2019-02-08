import {Component, OnInit} from '@angular/core';
import {ParameterService} from '../general/parameter.service';

@Component({
  selector: 'app-reforme',
  templateUrl: './reforme.component.html',
  styleUrls: ['./reforme.component.css']
})
export class ReformeComponent implements OnInit {

  constructor(private paramService: ParameterService) {
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
}
