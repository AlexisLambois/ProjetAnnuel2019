import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.component.html',
  styleUrls: ['./maintenance.component.css']
})
export class MaintenanceComponent implements OnInit {

  constructor(private _location: Location) { }

  ngOnInit() {
  }

  cancel() {
    this._location.back();
  }

}
