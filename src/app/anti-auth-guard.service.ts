import { Injectable } from '@angular/core'
import { UserService } from './user.service'
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router'
import { Observable } from 'rxjs';


@Injectable()
export class AntiAuthGuard{
    constructor(private userService: UserService, private router: Router){

    }

    canActivate( route: ActivatedRouteSnapshot,
                 state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        //console.log(this.userService.loginStatus)
        if (this.userService.user){
            this.router.navigate(['dashboard'])
            return !this.userService.user.isAuthenticated;
        }
        else{
            return true;
        }
    }
}