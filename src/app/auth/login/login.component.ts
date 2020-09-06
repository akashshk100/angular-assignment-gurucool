import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { NgForm } from '@angular/forms' 
import { AuthService } from '../auth.service'
import { UserService } from '../../user.service'  
import {MatSnackBar} from '@angular/material/snack-bar'


@Component({
    selector: 'login-tag',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent{

    

    constructor(private router: Router, 
        private authService: AuthService, 
        private userService: UserService,
        private _snackBar: MatSnackBar){

    }
    hide = true
    isLoading:boolean = false;
    passwordText: string;
    showPassword:boolean = false;
    invalidPopin:boolean = false;

    onLogin(f: NgForm){
        this.isLoading = true;
        if(this.authService.login(f.value.username, f.value.password)){
            this.isLoading = false;
            this.router.navigate(['dashboard'])
        }
        else{
            this.openSnackBar('Invalid Credentials')
        }
    }

    onShowPassword(){
        this.showPassword = !this.showPassword;
    }
    
    openSnackBar(message: string) {
        this._snackBar.open(message, 'ok', {
          duration: 2000,
        });
    }
}