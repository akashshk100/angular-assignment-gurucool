import { NgModule } from '@angular/core'

import { ActivityComponent } from './activity.component'
import { ActivityRoutingModule } from './activity-routing.module'
import { CommonModule } from '@angular/common'
import { SharedModule } from '../shared/shared.module'

@NgModule({
    declarations: [
        ActivityComponent
    ],
    imports: [
        CommonModule, 
        ActivityRoutingModule,
        SharedModule
    ]
})
export class ActivityModule{

}