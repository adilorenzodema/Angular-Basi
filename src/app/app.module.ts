import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule, routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations'
import { AppMaterialModule } from './app-material/app-material.module'

@NgModule({
  declarations: [
    AppComponent,
    routingComponent,
    PageNotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NoopAnimationsModule,
    AppMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
