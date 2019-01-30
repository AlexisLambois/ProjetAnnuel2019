import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @Input() fontSize: number;

  constructor() {
  }

  ngOnInit() {
  }

  get fontSizeAdapted(): string {
    return this.fontSize + 'px';
  }

}
