import {Component, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core';
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
  @Output() changeContrasted: EventEmitter<void> = new EventEmitter();
  private isMobileResolution: boolean;

  constructor(private routing: RoutingService) {
    this.checkResolution();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.checkResolution();
  }

  checkResolution(): void {
    if (window.innerWidth <= 800) {
      this.isMobileResolution = false;
    } else {
      this.isMobileResolution = true;
    }
  }

  get IsMobileResolution(): boolean {
    return this.isMobileResolution;
  }

  ngOnInit() {
  }

  get fontSizeAdapted(): string {
    return this.fontSize + 'px';
  }

  changeFamilyFont(): void {
    this.changeFamily.emit();
  }

  changeContrastedMode(): void {
    this.changeContrasted.emit();
  }

  redirectTo(path: string): void {
    this.routing.redirectTo(path);
  }
}
