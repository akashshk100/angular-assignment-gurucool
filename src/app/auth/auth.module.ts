import { NgModule } from "@angular/core";
import { LoginComponent } from "./login/login.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        CommonModule, 
        FormsModule, 
        RouterModule.forChild([{path: 'login', component: LoginComponent}])
    ]
})
export class AuthModule{

}