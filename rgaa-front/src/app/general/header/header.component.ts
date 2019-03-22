import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {RoutingService} from '../routing.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() fontSize: number;
  @Input() fontFamily: boolean;
  @Output() changeSize: EventEmitter<number> = new EventEmitter();

  navbarOpen = false;

  constructor(private routing: RoutingService, private router: Router) {
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
    return !this.router.url.includes('home');
  }

}
