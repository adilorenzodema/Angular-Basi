import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  exports: [
    MatProgressSpinnerModule,
    BrowserAnimationsModule,
    MatButtonModule
  ]
})
export class AppMaterialModule { }
