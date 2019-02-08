import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HeaderComponent} from './general/header/header.component';
import { FooterComponent } from './general/footer/footer.component';
import { AccueilComponent } from './accueil/accueil.component';
import { MenuComponent } from './accueil/menu/menu.component';
import { MaintenanceComponent } from './general/maintenance/maintenance.component';
import { ReformeComponent } from './reforme/reforme.component';
import { CollapseMenuComponent } from './accueil/collapse-menu/collapse-menu.component';
import { FormatageComponent } from './formatage/formatage.component';
import {FileUploadModule} from 'ng2-file-upload';
import {HttpClientModule} from '@angular/common/http';
import { AuditComponent } from './audit/audit.component';
import { LinkBarComponent } from './general/link-bar/link-bar.component';
import { WhoweareComponent } from './whoweare/whoweare.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AccueilComponent,
    MenuComponent,
    MaintenanceComponent,
    ReformeComponent,
    CollapseMenuComponent,
    FormatageComponent,
    AuditComponent,
    LinkBarComponent,
    WhoweareComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    FileUploadModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}