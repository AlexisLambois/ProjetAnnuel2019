import { Component, OnInit } from '@angular/core';
import {ParameterService} from '../general/parameter.service';
import {RoutingService} from '../general/routing.service';

@Component({
  selector: 'app-mapsite',
  templateUrl: './mapsite.component.html',
  styleUrls: ['./mapsite.component.css']
})
export class MapsiteComponent implements OnInit {

  constructor(private paramService: ParameterService, private routing: RoutingService) {
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

}
