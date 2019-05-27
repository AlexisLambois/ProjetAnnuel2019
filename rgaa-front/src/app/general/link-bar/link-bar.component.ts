import {Component, HostListener, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-link-bar',
  templateUrl: './link-bar.component.html',
  styleUrls: ['./link-bar.component.css']
})
export class LinkBarComponent implements OnInit {

  @Input() param: boolean;
  @Input() fontSize: number;
  @Input() fontFamily: boolean;
  private isMobileResolution: boolean;

  constructor() {
    this.checkResolution();
  }

  ngOnInit() {
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.checkResolution();
  }

  get getIsMobileResolution(): boolean {
    return this.isMobileResolution;
  }

  redirectTo(path: string): void {
    window.location.href = path;
  }

  checkResolution(): void {
    if (window.innerWidth <= 800) {
      this.isMobileResolution = false;
    } else {
      this.isMobileResolution = true;
    }
  }

}
