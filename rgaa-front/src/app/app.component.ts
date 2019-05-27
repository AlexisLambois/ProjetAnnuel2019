import {Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @HostListener('mousemove', ['$event'])
  mouseMove($event: MouseEvent) {
    document.getElementById('circle').setAttribute('style', 'left:' + $event.screenX + 'px;top:' + $event.screenY + 'px');
  }
}
