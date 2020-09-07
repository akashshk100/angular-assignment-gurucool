import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { StudentListComponent } from './student-list/student-list.component'

import { ActivityComponent } from './activity.component'

const routes: Routes = [
    {path: '', component: ActivityComponent, children: [
        {path: '', redirectTo: 'student-list', pathMatch: 'full'},
        {path: 'student-list', component: StudentListComponent}
    ]}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ActivityRoutingModule{

}