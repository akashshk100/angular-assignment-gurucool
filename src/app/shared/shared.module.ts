import { NgModule } from '@angular/core'

import { LoaderComponent } from './loader/loader.component'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { HeaderComponent } from './header/header.component'

@NgModule({
    declarations: [
        LoaderComponent,
        HeaderComponent
    ],
    imports: [CommonModule, RouterModule],
    exports: [
        LoaderComponent,
        HeaderComponent
    ]
})
export class SharedModule{

}