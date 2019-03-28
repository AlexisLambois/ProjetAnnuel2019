import {Component, Input, OnInit} from '@angular/core';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ParameterService} from '../parameter.service';

interface Alert {
  type: string;
  message: string;
}

@Component({
  selector: 'app-link-bar',
  templateUrl: './link-bar.component.html',
  styleUrls: ['./link-bar.component.css']
})
export class LinkBarComponent implements OnInit {

  @Input() param: boolean;
  modalRef: any;
  @Input() fontSize: number;
  @Input() fontFamily: boolean;
  displayAlert = false;
  nameMode = '';

  constructor(private modalService: NgbModal, private paramService: ParameterService) {
  }

  ngOnInit() {
  }

  redirectTo(path: string): void {
    window.location.href = path;
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

  close(): void {
    this.displayAlert = false;
    this.nameMode = '';
    this.paramService.resetEffect();
  }

}
