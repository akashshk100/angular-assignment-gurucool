import { NgModule } from '@angular/core'

import { ActivityComponent } from './activity.component'
import { ActivityRoutingModule } from './activity-routing.module'
import { CommonModule } from '@angular/common'
import { SharedModule } from '../shared/shared.module'
import { MaterialModule } from '../material/material.module'
import { StudentListComponent } from './student-list/student-list.component'

@NgModule({
    declarations: [
        ActivityComponent,
        StudentListComponent
    ],
    imports: [
        CommonModule, 
        ActivityRoutingModule,
        SharedModule,
        MaterialModule
    ]
})
export class ActivityModule{

}