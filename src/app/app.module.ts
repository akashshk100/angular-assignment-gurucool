import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http' 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActivityComponent } from './activity/activity.component';
import { LectureService } from './dashboard/lecture/lecture.service'
import { NotFoundComponent } from './not-found/not-found.component'
import { AuthGuard } from './auth-guard.service';
import { AuthService } from './auth.service';
import { AntiAuthGuard } from './anti-auth-guard.service'
import { UserService } from './user.service';
import { LoaderComponent } from './shared/loader/loader.component'
import { LoginComponent } from './login/login.component';
//import { DashboardModule } from './dashboard/dashboard.module' 
import { DashboardComponent } from './dashboard/dashboard.component'
import { LectureListComponent } from './dashboard/lecture/lecture-list/lecture-list.component';
import { LectureComponent } from './dashboard/lecture/lecture.component';
import { NewLectureComponent } from './dashboard/lecture/new-lecture/new-lecture.component';
import { NewTestComponent } from './dashboard/subject-list/new-test/new-test.component';
import { SubjectListComponent } from './dashboard/subject-list/subject-list.component'
import { TestListComponent } from './dashboard/subject-list/test-list/test-list.component'
import { NewStreamComponent } from './dashboard/lecture/new-stream/new-stream.component'
import { TestComponent } from './dashboard/test/test.component' 
import { TakeTestComponent } from './dashboard/take-test/take-test.component'
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    ActivityComponent,
    LoginComponent,
    NotFoundComponent,
    LoaderComponent,
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
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [LectureService, AuthGuard, AuthService, UserService, AntiAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
