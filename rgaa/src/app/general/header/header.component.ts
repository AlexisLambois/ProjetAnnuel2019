import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() fontSize: number;
  @Output() changeSize: EventEmitter<number> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  get fontSizeAdapted() {
    return this.fontSize;
  }

  changeSizeFont(change: number): void {
    this.changeSize.emit(change);
  }

}
