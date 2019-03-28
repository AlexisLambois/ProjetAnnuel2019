import {Component, HostListener, OnInit, AfterViewInit, ViewChild} from '@angular/core';
import {ParameterService} from '../general/parameter.service';
import {RoutingService} from '../general/routing.service';
import {LinkBarComponent} from '../general/link-bar/link-bar.component';

@Component({
  selector: 'app-reforme',
  templateUrl: './reforme.component.html',
  styleUrls: ['./reforme.component.css']
})
export class ReformeComponent implements OnInit, AfterViewInit {

  @ViewChild(LinkBarComponent) linkBarComponent: LinkBarComponent;
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
      this.isMobileResolution = false;
    } else {
      this.isMobileResolution = true;
    }
  }

  get getIsMobileResolution(): boolean {
    return true;
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
    this.routing.redirectTo(path);
  }

}
