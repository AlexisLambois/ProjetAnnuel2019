import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AccueilComponent} from './accueil/accueil.component';
import {MaintenanceComponent} from './general/maintenance/maintenance.component';
import {ReformeComponent} from './reforme/reforme.component';
import {FormatageComponent} from './formatage/formatage.component';
import {AuditComponent} from './audit/audit.component';
import {LinkBarComponent} from './general/link-bar/link-bar.component';
import {WhoweareComponent} from './whoweare/whoweare.component';
import {MapsiteComponent} from './mapsite/mapsite.component';
import {HomeComponent} from './admin/home/home.component';
import {ContactComponent} from './contact/contact.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: AccueilComponent},
  {path: 'maintenance', component: MaintenanceComponent},
  {path: 'reforme', component: ReformeComponent},
  {path: 'formatage', component: FormatageComponent},
  {path: 'audit', component: AuditComponent},
  {path: 'link', component: LinkBarComponent},
  {path: 'whoweare', component: WhoweareComponent},
  {path: 'mapsite', component: MapsiteComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'admin', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
