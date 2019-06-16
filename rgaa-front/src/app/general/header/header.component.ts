import {Component, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core';
import {RoutingService} from '../routing.service';
import {Router} from '@angular/router';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ParameterService} from '../parameter.service';

interface Alert {
  type: string;
  message: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() fontSize: number;
  @Input() fontFamily: boolean;
  @Input() contrastedMode: boolean;
  @Output() changeSize: EventEmitter<number> = new EventEmitter();
  displayAlert = false;
  modalRef: any;
  nameMode = '';

  navbarOpen = false;
  private isMobileResolution: boolean;

  constructor(private routing: RoutingService, private router: Router, private modalService: NgbModal, private paramService: ParameterService) {
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

  get IsMobileResolution(): boolean {
    return this.isMobileResolution;
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  ngOnInit() {
  }

  changeSizeFont(change: number): void {
    this.changeSize.emit(change);
  }

  get fontSizeParam(): number {
    return this.fontSize;
  }

  get fontFamilyParam(): boolean {
    return this.fontFamily;
  }

  redirectTo(path: string): void {
    this.routing.redirectTo(path);
  }

  notOnHome(): boolean {
    return !this.router.url.includes('home') && !this.router.url.includes('admin');
  }

  toForm(content): void {
    this.modalRef = this.modalService.open(content, {centered: true});
    this.modalRef.result.then((result) => {
      console.log(`Closed with: ${result}`);
    }, (reason) => {
      console.log(`Dismissed ${this.getDismissReason(reason)}`);
    });
  }

  setCataracte(): void {
    this.close();
    this.displayAlert = true;
    this.paramService.setEffects(1);
    this.nameMode += ' Cataracte';
  }

  setDmla() {
    this.close();
    this.displayAlert = true;
    this.paramService.setEffects(2);
    this.nameMode += ' DMLA';
  }

  setRetinite() {
    this.close();
    this.displayAlert = true;
    this.paramService.setEffects(3);
    this.nameMode += ' La rétinite pigmentaire et Le glaucome';
  }

  close(): void {
    this.displayAlert = false;
    this.nameMode = '';
    this.paramService.resetEffect();
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
