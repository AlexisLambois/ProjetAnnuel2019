import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {RoutingService} from '../routing.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @Input() fontSize: number;
  @Input() fontFamily: boolean;
  @Output() changeFamily: EventEmitter<void> = new EventEmitter();

  constructor(private routing: RoutingService) {
  }

  ngOnInit() {
  }

  get fontSizeAdapted(): string {
    return this.fontSize + 'px';
  }

  changeFamilyFont(): void {
    this.changeFamily.emit();
  }

  redirectTo(path: string): void {
    this.routing.redirectTo(path);
  }
}
