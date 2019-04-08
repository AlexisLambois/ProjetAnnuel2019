import {Component, HostListener, OnInit, AfterViewInit, ViewChild} from '@angular/core';
import {ParameterService} from '../general/parameter.service';
import {RoutingService} from '../general/routing.service';
import {LinkBarComponent} from '../general/link-bar/link-bar.component';
import {MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-reforme',
  templateUrl: './reforme.component.html',
  styleUrls: ['./reforme.component.css']
})
export class ReformeComponent implements OnInit, AfterViewInit {

  @ViewChild(LinkBarComponent) linkBarComponent: LinkBarComponent;
  private isMobileResolution: boolean;
  selectedItem: string;
  listItems: any[] = [{
    label: 'Image',
    element: 'image1',
    element2: 'image2'
  }, {
    label: 'Cadres',
    element: 'cadres1',
    element2: 'cadres2'
  }, {
    label: 'Couleurs',
    element: 'couleurs1',
    element2: 'couleurs2'
  }, {
    label: 'Multimédia',
    element: 'multimedia1',
    element2: 'multimedia2'
  }, {
    label: 'Tableaux',
    element: 'tableaux1',
    element2: 'tableaux2'
  }, {
    label: 'Liens',
    element: 'liens1',
    element2: 'liens2'
  }, {
    label: 'Scripts',
    element: 'scripts1',
    element2: 'scripts2'
  }, {
    label: 'Éléments obligatoires',
    element: 'elementsobli1',
    element2: 'elementsobli2'
  }, {
    label: 'Structurations de l\'information',
    element: 'structurationsinfo1',
    element2: 'structurationsinfo2'
  }, {
    label: 'Présentation de l\'information',
    element: 'presentationinfo1',
    element2: 'presentationinfo2'
  }, {
    label: 'Formulaires',
    element: 'formulaires1',
    element2: 'formulaires2'
  }, {
    label: 'Navigation',
    element: 'navigation1',
    element2: 'navigation2'
  }, {
    label: 'Consulation',
    element: 'consultation1',
    element2: 'consultation2'
  }];

  constructor(private paramService: ParameterService, private routing: RoutingService, private iconRegistry: MatIconRegistry, private sanitizer: DomSanitizer) {
    this.checkResolution();
    iconRegistry.addSvgIcon(
      'more_vert',
      sanitizer.bypassSecurityTrustResourceUrl('./assets/img/more_vert.svg'));
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

  swip(element: string): void {
    for (const item of this.listItems) {
      if (document.getElementById(item.element) !== null) {
        document.getElementById(item.element).setAttribute('style', 'display:none;');
      }
      if (document.getElementById(item.element2) !== null) {
        document.getElementById(item.element2).setAttribute('style', 'display:none;');
      }
    }
    this.selectedItem = element;
    document.getElementById(element).setAttribute('style', 'display:block;');
  }

}
