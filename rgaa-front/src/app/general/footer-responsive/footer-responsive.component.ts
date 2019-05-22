import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {RoutingService} from '../routing.service';

@Component({
  selector: 'app-footer-responsive',
  templateUrl: './footer-responsive.component.html',
  styleUrls: ['./footer-responsive.component.css']
})
export class FooterResponsiveComponent implements OnInit {

  @Input() fontSize: number;
  @Input() fontFamily: boolean;
  @Output() changeFamily: EventEmitter<void> = new EventEmitter();
  @Output() changeContrasted: EventEmitter<void> = new EventEmitter();

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

  changeContrastedMode(): void {
    this.changeContrasted.emit();
  }
}
