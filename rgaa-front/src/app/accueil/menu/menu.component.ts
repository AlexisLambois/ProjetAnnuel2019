import {Component, Input, OnInit} from '@angular/core';
import {RoutingService} from '../../general/routing.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Input() fontSize: number;
  @Input() fontFamily: boolean;
  @Input() contrastedMode: boolean;

  constructor(private routing: RoutingService) {
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
