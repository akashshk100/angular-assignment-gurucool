import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { NgForm } from '@angular/forms' 
import { AuthService } from '../auth.service'
import { UserService } from '../../user.service'  

@Component({
    selector: 'login-tag',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent{

    constructor(private router: Router, private authService: AuthService, private userService: UserService){

    }

    isLoading:boolean = false;
    passwordText: string;
    showPassword:boolean = false;
    invalidPopin:boolean = false;

    onLogin(f: NgForm){
        this.isLoading = true;
        this.authService.login(f.value.username, f.value.password);
        this.isLoading = false;
        this.router.navigate(['dashboard'])
    }

    onShowPassword(){
        this.showPassword = !this.showPassword;
    } 
}