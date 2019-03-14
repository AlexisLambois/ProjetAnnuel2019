import {Component, Input, OnInit, Renderer2} from '@angular/core';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';

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
  nameMode: string;

  constructor(private modalService: NgbModal, private renderer: Renderer2) {
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
    this.renderer.addClass(document.getElementById('context1'), 'blur');
    this.renderer.addClass(document.getElementById('context2'), 'blur');
    this.displayAlert = true;
    this.nameMode = 'Cataracte';
  }

  setDmla() {
    this.displayAlert = true;
    this.nameMode = 'DMLA';
  }

  reset(): void {
    this.renderer.removeClass(document.getElementById('context1'), 'blur');
    this.renderer.removeClass(document.getElementById('context2'), 'blur');
  }

  close(): void {
    this.displayAlert = false;
    this.nameMode = '';
    this.reset();
  }

}
