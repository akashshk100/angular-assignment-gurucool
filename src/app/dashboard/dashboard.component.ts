import { Component, OnInit, ViewChild, ElementRef } from '@angular/core'
import { TestListService } from './subject-list/test-list/test-list.service' 
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { SideNavService } from '../shared/header/side-nav.service';

@Component({
    selector: 'dashboard-tag',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css'],
    providers: [TestListService]
})
export class DashboardComponent implements OnInit{

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