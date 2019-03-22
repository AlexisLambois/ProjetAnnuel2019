import {Component, HostListener, Input, OnInit} from '@angular/core';
import {RoutingService} from '../../general/routing.service';

@Component({
  selector: 'app-collapse-menu',
  templateUrl: './collapse-menu.component.html',
  styleUrls: ['./collapse-menu.component.css']
})
export class CollapseMenuComponent implements OnInit {

  @Input() fontSize: number;
  @Input() fontFamily: boolean;
  private isMobileResolution: boolean;

  constructor(private routing: RoutingService) {
    this.checkResolution();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.checkResolution();
  }

  checkResolution(): void {
    if (window.innerWidth <= 1024) {
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

  get fontSizeAdapted(): number {
    return this.fontSize;
  }

  redirectTo(path: string): void {
    this.routing.redirectTo(path);
  }

}
