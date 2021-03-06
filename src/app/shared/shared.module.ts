import { NgModule } from '@angular/core'

import { LoaderComponent } from './loader/loader.component'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { HeaderComponent } from './header/header.component'
import { MaterialModule } from '../material/material.module'

@NgModule({
    declarations: [
        LoaderComponent,
        HeaderComponent
    ],
    imports: [CommonModule, RouterModule, MaterialModule],
    exports: [
        LoaderComponent,
        HeaderComponent
    ]
})
export class SharedModule{

}