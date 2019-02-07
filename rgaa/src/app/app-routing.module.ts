import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AccueilComponent} from './accueil/accueil.component';
import {MaintenanceComponent} from './general/maintenance/maintenance.component';
import {ReformeComponent} from './reforme/reforme.component';
import {FormatageComponent} from './formatage/formatage.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: AccueilComponent},
  {path: 'maintenance', component: MaintenanceComponent},
  {path: 'reforme', component: ReformeComponent},
  {path: 'formatage', component: FormatageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
