
import { Component, ViewChild } from "@angular/core"
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { SideNavService } from '../shared/header/side-nav.service';

@Component({
    selector: 'activity-tag',
    templateUrl: './activity.component.html',
    styleUrls: ['./activity.component.css']
})
export class ActivityComponent{
    @ViewChild('sideNav') sideNav

    constructor(private userService: UserService, private router: Router, private sideNavService: SideNavService){

    }

    ngOnInit(){
        this.sideNavService.sideNaveToggle
        .subscribe( () => {
            this.sideNav.toggle()
        })
    }

    onLogout(){
        this.userService.user = null;
        localStorage.removeItem('userData');
        this.router.navigate(['/'])
    }
}