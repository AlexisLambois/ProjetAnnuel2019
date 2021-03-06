import {AfterViewInit, Component, HostListener, OnInit, ViewChildren} from '@angular/core';
import {ParameterService} from '../general/parameter.service';
import {RoutingService} from '../general/routing.service';
import {ListKeyManager} from '@angular/cdk/a11y';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit, AfterViewInit {

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
    return this.isMobileResolution;
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

  get contrastedMode(): boolean{
    return this.paramService.isContrastedMode;
  }

  changeContrasted(event){
    this.paramService.setContrastedMode();
  }

  redirectTo(path: string): void {
    this.routing.redirectTo(path);
  }

}
