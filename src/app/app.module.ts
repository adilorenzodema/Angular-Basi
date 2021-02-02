import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule, routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component';
import { DipendentiDetailsComponent } from './dipendenti-details/dipendenti-details.component';
import { DipendentiServiceService} from './dipendenti-service.service'

@NgModule({
  declarations: [
    AppComponent,
    routingComponent,
    PageNotfoundComponent,
    DipendentiDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DipendentiServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
