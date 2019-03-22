import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HeaderComponent} from './general/header/header.component';
import {FooterComponent} from './general/footer/footer.component';
import {AccueilComponent} from './accueil/accueil.component';
import {MenuComponent} from './accueil/menu/menu.component';
import {MaintenanceComponent} from './general/maintenance/maintenance.component';
import {ReformeComponent} from './reforme/reforme.component';
import {CollapseMenuComponent} from './accueil/collapse-menu/collapse-menu.component';
import {FormatageComponent} from './formatage/formatage.component';
import {FileUploadModule} from 'ng2-file-upload';
import {HttpClientModule} from '@angular/common/http';
import {AuditComponent} from './audit/audit.component';
import {LinkBarComponent} from './general/link-bar/link-bar.component';
import {WhoweareComponent} from './whoweare/whoweare.component';
import {MapsiteComponent} from './mapsite/mapsite.component';
import {MatExpansionModule, MatIconModule, MatMenuModule} from '@angular/material';

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
    WhoweareComponent,
    MapsiteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgbModule,
    MatExpansionModule,
    MatMenuModule,
    MatIconModule,
    BrowserAnimationsModule,
    FileUploadModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
