import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {RoutingService} from '../routing.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() fontSize: number;
  @Input() fontFamily: boolean;
  @Output() changeSize: EventEmitter<number> = new EventEmitter();

  constructor(private routing: RoutingService) {
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

}
