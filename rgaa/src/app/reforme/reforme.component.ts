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

  get fontSizeParam(): number {
    return this.paramService.fontSize;
  }
}
