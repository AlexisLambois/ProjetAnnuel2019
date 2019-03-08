import {Component, HostListener, OnInit, ViewChild} from '@angular/core';
import {ParameterService} from '../general/parameter.service';
import {RoutingService} from '../general/routing.service';
import {LinkBarComponent} from '../general/link-bar/link-bar.component';

@Component({
  selector: 'app-reforme',
  templateUrl: './reforme.component.html',
  styleUrls: ['./reforme.component.css']
})
export class ReformeComponent implements OnInit {

  @ViewChild(LinkBarComponent) linkBarComponent: LinkBarComponent;

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
