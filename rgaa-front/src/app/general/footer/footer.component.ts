import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @Input() fontSize: number;
  @Input() fontFamily: boolean;
  @Output() changeFamily: EventEmitter<void> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  get fontSizeAdapted(): string {
    return this.fontSize + 'px';
  }

  changeFamilyFont(): void {
    this.changeFamily.emit();
  }

}
