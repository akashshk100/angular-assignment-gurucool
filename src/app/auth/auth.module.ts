import { NgModule } from "@angular/core";
import { LoginComponent } from "./login/login.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { LoginAuthGuard } from './login-auth-guard.service'

@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        CommonModule, 
        FormsModule, 
        RouterModule.forChild([{path: 'login', component: LoginComponent, canActivate: [LoginAuthGuard]}])
    ]
})
export class AuthModule{

}