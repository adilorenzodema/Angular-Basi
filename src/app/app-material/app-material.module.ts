import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table' 
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule , ReactiveFormsModule} from '@angular/forms'
import { MatSelectModule} from '@angular/material/select'
import { MatInputModule} from '@angular/material/input'
import { MatSortModule } from '@angular/material/sort'
import { MatPaginatorModule} from '@angular/material/paginator'
import { MatSidenavModule } from '@angular/material/sidenav';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatSidenavModule,
    FlexLayoutModule
  ],
  exports: [
    MatProgressSpinnerModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatSidenavModule
  ]
})
export class AppMaterialModule { }
