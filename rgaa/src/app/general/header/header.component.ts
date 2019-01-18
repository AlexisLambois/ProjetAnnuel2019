import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() fontSize: string;
  @Output() changeSize: EventEmitter<number> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  changeSizeFont(change: number): void {
    this.changeSize.emit(change);
  }

  // get cursorType(): boolean {
  //   console.log(this.fontSize);
  //   return this.fontSize === '23 || this.fontSize === 16;
  // }

}
