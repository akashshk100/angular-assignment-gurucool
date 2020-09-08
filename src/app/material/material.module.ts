import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button'
import {MatListModule} from '@angular/material/list'
import {MatDividerModule} from '@angular/material/divider'
import {MatSidenavModule} from '@angular/material/sidenav'
import {MatToolbarModule, MatToolbar} from '@angular/material/toolbar'
import {MatMenuModule} from '@angular/material/menu'
import {MatGridListModule} from '@angular/material/grid-list'
import {MatSnackBarModule} from '@angular/material/snack-bar'
import {MatDatepickerModule} from '@angular/material/datepicker'
import {MatNativeDateModule} from '@angular/material/core'
import {MatExpansionModule} from '@angular/material/expansion'
import { MaterialFileInputModule } from 'ngx-material-file-input'
import {MatPaginatorModule} from '@angular/material/paginator'
import {MatTableModule} from '@angular/material/table'
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'
import {MatBadgeModule} from '@angular/material/badge'
import {MatTabsModule} from '@angular/material/tabs'


const MaterialComponent = [
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatListModule,
  MatDividerModule,
  MatSidenavModule,
  MatToolbarModule,
  MatMenuModule,
  MatGridListModule,
  MatSnackBarModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatExpansionModule,
  MaterialFileInputModule,
  MatPaginatorModule,
  MatTableModule,
  MatProgressSpinnerModule,
  MatBadgeModule,
  MatTabsModule
]

@NgModule({
  imports : [
    MaterialComponent
  ],
  exports: [
    MaterialComponent
  ]
})
export class MaterialModule { }
