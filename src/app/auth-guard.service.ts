import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router'
import { Observable } from 'rxjs';
import { UserService } from './user.service'
import { Injectable } from '@angular/core';

@Injectable()
export class AuthGuard implements CanActivate{

    constructor(private route: Router, private userService: UserService){

    }

    canActivate( route: ActivatedRouteSnapshot,
                 state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        //console.log(this.userService.loginStatus)
        if (this.userService.user){
            return this.userService.user.isAuthenticated;
        }
        else{
            this.route.navigate(['/'])
            return false;
        }
    }
} 