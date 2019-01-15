import {Component, OnInit} from '@angular/core';
import {ParameterService} from '../general/parameter-service.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  constructor(private paramService: ParameterService) {
  }

  ngOnInit() {
  }

  changeSize(event) {
    this.paramService.setFontSize(event);
  }
}
