import {Component, Input, OnInit} from '@angular/core';
import {RoutingService} from '../../general/routing.service';

@Component({
  selector: 'app-collapse-menu',
  templateUrl: './collapse-menu.component.html',
  styleUrls: ['./collapse-menu.component.css']
})
export class CollapseMenuComponent implements OnInit {

  @Input() fontSize: number;
  @Input() fontFamily: boolean;

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
