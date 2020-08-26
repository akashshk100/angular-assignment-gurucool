import { NgModule } from '@angular/core'

import { ActivityComponent } from './activity.component'
import { ActivityRoutingModule } from './activity-routing.module'
import { CommonModule } from '@angular/common'

@NgModule({
    declarations: [
        ActivityComponent
    ],
    imports: [
        CommonModule, 
        ActivityRoutingModule
    ]
})
export class ActivityModule{

}