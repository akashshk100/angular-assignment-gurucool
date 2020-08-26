import { HttpClient } from '@angular/common/http';
import { UserService } from './user.service';
import { Injectable } from '@angular/core';
import { User } from './user.model';
import { Router } from '@angular/router';

@Injectable()
export class AuthService{

    constructor(private http: HttpClient, private userService: UserService, private router: Router){

    }

    login(username: string, password: string){
        /* here will be call to your own api
        let reqBody = {'username': username, 'password': password} 
        
        this.http.post('myownapi.com', reqBody).
        subscribe( 
        resData => {
            this.user.next(new User(resData['userId'], resData['userType']));
        },
        errorData => {

        }
        ) */

        if (username === 'akash@gmail.com' && password === 'akash'){
            this.userService.user = new User(1002, 1, true);
            localStorage.setItem('userData', JSON.stringify(this.userService.user));
        }
        else{

        }
    }
    
}