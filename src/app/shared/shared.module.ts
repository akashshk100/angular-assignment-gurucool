import { NgModule } from '@angular/core'

import { LoaderComponent } from './loader/loader.component'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

@NgModule({
    declarations: [
        LoaderComponent
    ],
    imports: [CommonModule, RouterModule],
    exports: [
        LoaderComponent
    ]
})
export class SharedModule{

}