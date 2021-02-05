import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimaliComponent } from './animali/animali.component';
import { DipendentiAddComponent } from './dipendenti-add/dipendenti-add.component';
import { DipendentiDetailsComponent } from './dipendenti-details/dipendenti-details.component';
import { DipendentiComponent } from './dipendenti/dipendenti.component';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component';


const routes: Routes = [
  { path: '', component: DipendentiComponent}, //utilizzata per la pagina di default
  { path: 'Dipendenti', component: DipendentiComponent
    /* children: [
      {path: 'Add', component: DipendentiAddComponent}
  ] */},
  { path: 'Dipendenti/Add', component: DipendentiAddComponent},
  { path: 'Dipendenti/Edit', component: DipendentiDetailsComponent},
  { path: 'Animali', component: AnimaliComponent},
  { path: '**', component: PageNotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [DipendentiComponent, DipendentiAddComponent, DipendentiDetailsComponent, AnimaliComponent, PageNotfoundComponent]