import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'


import { DashboardComponent } from './dashboard.component'
import { LectureListComponent } from './lecture/lecture-list/lecture-list.component';
import { LectureComponent } from './lecture/lecture.component';
import { NewLectureComponent } from './subject-list/new-lecture/new-lecture.component';
import { NewTestComponent } from './subject-list/new-test/new-test.component';
import { SubjectListComponent } from './subject-list/subject-list.component'
import { SelectSubComponent } from './subject-list/select-sub/select-sub.component'
import { TestListComponent } from './subject-list/test-list/test-list.component'
import { NewStreamComponent } from './lecture/new-stream/new-stream.component'
import { TestComponent } from './test/test.component' 
import { TakeTestComponent } from './take-test/take-test.component'
import { EditLectureComponent } from './lecture/edit-lecture/edit-lecture.component'
import { DashboardRoutingModule } from './dashboard-routing.module'
import { SharedModule } from '../shared/shared.module'
import { MaterialModule } from '../material/material.module';


@NgModule({
    declarations: [
        DashboardComponent,
        LectureComponent,
        LectureListComponent,
        NewLectureComponent,
        NewTestComponent,
        SubjectListComponent,
        SelectSubComponent,
        TestListComponent,
        NewStreamComponent,
        TestComponent,
        TakeTestComponent,
        EditLectureComponent
    ],
    imports :[
        CommonModule,
        FormsModule,
        DashboardRoutingModule,
        SharedModule,
        MaterialModule
    ]
})
export class DashboardModule{

}