import {Component, HostListener, OnInit, ViewChild} from '@angular/core';
import {ParameterService} from '../../general/parameter.service';
import {DataService} from './data.service';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {RoutingService} from '../../general/routing.service';

export interface Data {
  id: string;
  name: string;
  phonenumber: string;
  email: string;
  dateDemande: Date;
  comment: string;
  type: number;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private isMobileResolution: boolean;
  displayedColumns: string[] = ['id', 'name', 'email', 'phonenumber', 'type', 'dateDemande', 'comment'];
  dataSource: MatTableDataSource<Data>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private routing: RoutingService, private paramService: ParameterService, private dataService: DataService) {
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

  get getIsMobileResolution(): boolean {
    return this.isMobileResolution;
  }

  ngOnInit() {
    this.dataService.getDatas().then(res => {
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  changeSize(event) {
    this.paramService.setFontSize(event);
  }

  changeFamily(event) {
    this.paramService.setFontFamily();
  }

  get fontSizeParam(): number {
    return this.paramService.fontSize;
  }

  get fontFamilyParam(): boolean {
    return this.paramService.fontFamily;
  }

  applyFilter(filterValue: any) {
    this.dataSource.filter = filterValue.value.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  redirectTo(path: string): void {
    this.routing.redirectTo(path);
  }

  toDate(date: any) {
    return new Date(date).toLocaleDateString();
  }
}
