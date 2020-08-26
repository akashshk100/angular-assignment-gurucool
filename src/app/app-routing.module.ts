import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component'
import { TestListComponent } from './dashboard/subject-list/test-list/test-list.component'
import { LectureComponent } from './dashboard/lecture/lecture.component'
import { ActivityComponent } from './activity/activity.component'
import { NotFoundComponent } from './not-found/not-found.component'
import { NewTestComponent } from './dashboard/subject-list/new-test/new-test.component' 
import { SelectSubComponent } from './dashboard/subject-list/select-sub/select-sub.component'
import { SubjectListComponent } from './dashboard/subject-list/subject-list.component';
import { LoginComponent } from './login/login.component'
import {AuthGuard} from './auth-guard.service'
import { AntiAuthGuard } from './anti-auth-guard.service'
import { TestComponent } from './dashboard/test/test.component' 
import { TakeTestComponent } from './dashboard/take-test/take-test.component'


 
const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', canActivate:[AntiAuthGuard], component: LoginComponent},
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
  ]},
  {path: 'activity', component: ActivityComponent},
  {path: 'not-found', component: NotFoundComponent},
  {path: '**', redirectTo: 'not-found'}
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
