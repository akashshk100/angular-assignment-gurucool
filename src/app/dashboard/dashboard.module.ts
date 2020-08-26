import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component'
import { LectureListComponent } from './lecture/lecture-list/lecture-list.component';
import { LectureComponent } from './lecture/lecture.component';
import { NewLectureComponent } from './lecture/new-lecture/new-lecture.component';
import { NewTestComponent } from './subject-list/new-test/new-test.component';
import { SubjectListComponent } from './subject-list/subject-list.component'
import { TestListComponent } from './subject-list/test-list/test-list.component'
import { NewStreamComponent } from './lecture/new-stream/new-stream.component'
import { TestComponent } from './test/test.component' 
import { TakeTestComponent } from './take-test/take-test.component'
import { HeaderComponent } from '../header/header.component';


@NgModule({
    declarations: [
        DashboardComponent,
        LectureComponent,
        LectureListComponent,
        NewLectureComponent,
        NewTestComponent,
        SubjectListComponent,
        TestListComponent,
        NewStreamComponent,
        TestComponent,
        TakeTestComponent,
        HeaderComponent
    ],
    imports :[
        RouterModule,
        CommonModule,
        FormsModule
    ],
    exports: [
        DashboardComponent,
        LectureComponent,
        LectureListComponent,
        NewLectureComponent,
        NewTestComponent,
        SubjectListComponent,
        TestListComponent,
        NewStreamComponent,
        TestComponent,
        TakeTestComponent,
        HeaderComponent
    ]
})
export class DashboardModule{

}