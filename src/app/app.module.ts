import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http' 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LectureService } from './dashboard/lecture/lecture.service'
import { NotFoundComponent } from './not-found/not-found.component'
import { AuthGuard } from './auth/auth-guard.service';
import { AuthService } from './auth/auth.service';
import { LoginAuthGuard } from './auth/login-auth-guard.service'
import { UserService } from './user.service'; 

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [LectureService, AuthGuard, AuthService, UserService, LoginAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
