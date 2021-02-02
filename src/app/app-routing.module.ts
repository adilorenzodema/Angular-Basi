import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimaliComponent } from './animali/animali.component';
import { DipendentiDetailsComponent } from './dipendenti-details/dipendenti-details.component';
import { DipendentiComponent } from './dipendenti/dipendenti.component';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component';

const routes: Routes = [
  { path: '', component: DipendentiComponent}, //utilizzata per la pagina di default
  { path: 'Dipendenti', component: DipendentiComponent},
  { path: 'Dipendenti/:id', component: DipendentiDetailsComponent},
  { path: 'Animali', component: AnimaliComponent},
  { path: '**', component: PageNotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [DipendentiComponent, DipendentiDetailsComponent, AnimaliComponent, PageNotfoundComponent]