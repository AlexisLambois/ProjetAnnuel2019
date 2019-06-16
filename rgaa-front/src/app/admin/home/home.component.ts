import {Component, HostListener, OnInit, ViewChild} from '@angular/core';
import {ParameterService} from '../../general/parameter.service';
import {DataService} from './data.service';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {RoutingService} from '../../general/routing.service';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';

export interface Element {
  id: number;
  type: string;
  date: Date;
  email: string;
  telephone: string;

}

const ELEMENT_DATA: Element[] = [
  {id: 0, type: 'Fichier', date: new Date(), email: 'matty@outlook.com', telephone: '+33-755-555-285'},
  {id: 1, type: 'Audit', date: new Date('2019-01-16'), email: 'debest@yahoo.ca', telephone: '+33-700-555-844'},
  {id: 2, type: 'Contact', date: new Date('2019-01-16'), email: 'jugalator@comcast.net', telephone: '+33-755-558-344'},
  {id: 3, type: 'Contact', date: new Date('2019-01-16'), email: 'klaudon@sbcglobal.net', telephone: '+33-700-555-642'},
  {id: 4, type: 'Contact', date: new Date('2019-01-16'), email: 'chance@live.com', telephone: '+33-755-554-559'},
  {id: 5, type: 'Fichier', date: new Date('2019-01-16'), email: 'ideguy@outlook.com', telephone: '+33-700-555-547'},
  {id: 6, type: 'Audit', date: new Date('2019-01-16'), email: 'rsmartin@outlook.com', telephone: '+33-700-555-220'},
  {id: 7, type: 'Audit', date: new Date('2019-01-16'), email: 'burns@mac.com', telephone: '+33-700-555-521'},
  {id: 8, type: 'Fichier', date: new Date('2019-01-16'), email: 'rsmartin@outlook.com', telephone: '+33-700-555-346'},
  {id: 9, type: 'Fichier', date: new Date('2019-01-16'), email: 'debest@yahoo.ca', telephone: '+33-755-554-559'},
];

const ELEMENT_DATA2: Element[] = [
  {id: 0, type: 'Fichier', date: new Date(), email: 'matty@outlook.com', telephone: '+33-755-555-285'},
  {id: 1, type: 'Audit', date: new Date('2019-01-16'), email: 'debest@yahoo.ca', telephone: '+33-700-555-844'},
  {id: 2, type: 'Contact', date: new Date('2019-01-16'), email: 'jugalator@comcast.net', telephone: '+33-755-558-344'},
  {id: 3, type: 'Fichier', date: new Date('2019-01-16'), email: 'debest@yahoo.ca', telephone: '+33-755-554-559'},
];

const ELEMENT_DATA3: Element[] = [
  {id: 0, type: 'Fichier', date: new Date(), email: 'matty@outlook.com', telephone: '+33-755-555-285'},
  {id: 1, type: 'Audit', date: new Date('2019-01-16'), email: 'debest@yahoo.ca', telephone: '+33-700-555-844'},
  {id: 2, type: 'Contact', date: new Date('2019-01-16'), email: 'jugalator@comcast.net', telephone: '+33-755-558-344'},
  {id: 3, type: 'Contact', date: new Date('2019-01-16'), email: 'klaudon@sbcglobal.net', telephone: '+33-700-555-642'},
  {id: 4, type: 'Contact', date: new Date('2019-01-16'), email: 'chance@live.com', telephone: '+33-755-554-559'},
];

const ELEMENT_DATA4: Element[] = [
  {id: 0, type: 'Audit', date: new Date('2019-01-16'), email: 'rsmartin@outlook.com', telephone: '+33-700-555-220'},
  {id: 1, type: 'Audit', date: new Date('2019-01-16'), email: 'burns@mac.com', telephone: '+33-700-555-521'},
  {id: 2, type: 'Fichier', date: new Date('2019-01-16'), email: 'rsmartin@outlook.com', telephone: '+33-700-555-346'},
  {id: 3, type: 'Fichier', date: new Date('2019-01-16'), email: 'debest@yahoo.ca', telephone: '+33-755-554-559'},
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private isMobileResolution: boolean;

  displayedColumns: string[] = ['id', 'type', 'date', 'email', 'telephone'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  dataSource2 = new MatTableDataSource(ELEMENT_DATA2);
  dataSource3 = new MatTableDataSource(ELEMENT_DATA3);
  dataSource4 = new MatTableDataSource(ELEMENT_DATA4);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  modalRef: any;

  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.dataSource2.sort = this.sort;
    this.dataSource3.sort = this.sort;
    this.dataSource4.sort = this.sort;
  }

  constructor(private routing: RoutingService, private paramService: ParameterService, private dataService: DataService, private modalService: NgbModal) {
    this.checkResolution();
  }


  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.checkResolution();
  }

  getLength(datasource: number): number {
    if (datasource === 1) {
      return ELEMENT_DATA.length;
    } else if (datasource === 2) {
      return ELEMENT_DATA2.length;
    } else if (datasource === 3) {
      return ELEMENT_DATA3.length;
    } else if (datasource === 4) {
      return ELEMENT_DATA4.length;
    }
    return 0;
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

  get contrastedMode(): boolean {
    return this.paramService.isContrastedMode;
  }

  changeContrasted(event) {
    this.paramService.setContrastedMode();
  }

  redirectTo(path: string): void {
    this.routing.redirectTo(path);
  }

  delete(element: HTMLElement) {
    element.setAttribute('style', 'display:none');
  }

  toForm(content): void {
    this.modalRef = this.modalService.open(content, {centered: true});
    this.modalRef.result.then((result) => {
      console.log(`Closed with: ${result}`);
    }, (reason) => {
      console.log(`Dismissed ${this.getDismissReason(reason)}`);
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
