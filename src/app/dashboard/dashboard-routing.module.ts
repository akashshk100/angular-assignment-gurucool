import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

import { DashboardComponent } from './dashboard.component'
import { TestListComponent } from './subject-list/test-list/test-list.component'
import { LectureComponent } from './lecture/lecture.component'
import { NewTestComponent } from './subject-list/new-test/new-test.component' 
import { SelectSubComponent } from './subject-list/select-sub/select-sub.component'
import { SubjectListComponent } from './subject-list/subject-list.component';
import { AuthGuard } from '../auth/auth-guard.service'
import { TestComponent } from './test/test.component' 
import { TakeTestComponent } from './take-test/take-test.component'

const routes: Routes = [
    {path: 'dashboard', canActivate: [AuthGuard] ,component: DashboardComponent, children: [
        {path: '', redirectTo: 'subject-list', pathMatch: 'full'},
        {path: 'subject-list', component: SubjectListComponent, children:[
          {path: '', redirectTo: 'select-sub', pathMatch: 'full'},
          {path: 'select-sub', component: SelectSubComponent},
          {path: 'test/:subjectId/:subjectName', component: TestListComponent},
          {path: 'new-test/:subjectId/:subjectName', component: NewTestComponent}
        ]},
        {path: 'lecture/:subjectId/:subjectName', component: LectureComponent},
        {path: 'test/:title/:noOfQue/:duration/:deadline', component: TestComponent},
        {path: 'take-test/:id', component: TakeTestComponent}
    ]}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule{

}