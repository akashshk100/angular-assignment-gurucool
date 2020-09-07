import { Component, Output, EventEmitter, ViewChild, ElementRef, OnInit } from "@angular/core"
import { Router} from '@angular/router';
import { UserService } from '../../user.service'
import { SideNavService } from './side-nav.service';
import { HttpClient } from '@angular/common/http';

export interface notifications{
    id: number
    name: string
    message: string
    dateTime: string
}

@Component({
    selector: 'head-comp',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class  HeaderComponent implements OnInit{
    @Output() screenChanged = new EventEmitter<{screenName: String}>();
    @ViewChild('dropdownButton') dropdownButton: ElementRef;

    constructor(private router: Router, 
        private userService: UserService, 
        private sideNavService: SideNavService,
        private http: HttpClient){

    }

    notifications: notifications[] = [
        {id: 1, name: 'Aditya Shukla', message: 'Mockaroos Generate API is a single endpoint that you can use to generate data based on a saved schema or fields you define in the post body of the request. Anything you can generate via the website can also be generated via the data API.', dateTime: '09/06/2020 12:45'},
        {id: 2, name: 'Ms. Janice', message: 'Output format is specified by the file type part of the URL. Two formats are supported:', dateTime: '09/05/2020 12:01'},
        {id: 3, name: 'Neeraj Jadhav', message: 'Uploads a dataset. Specify the data in the request body. Content-Type must be text/csv or text/plain.', dateTime: '08/27/2020 03:55'},
        {id: 4, name: 'Ken Adams', message: 'How you doin..', dateTime: '09/06/2020 02:45'}
    ]
    notificationsLength: number = 0

    ngOnInit(){
        // this.http.get("https://api.mockaroo.com/api/3a6a3850?count=5&key=6b5d9e30")
        // .subscribe( (response: notifications[]) => {
        //     this.notifications = response
        //     this.notificationsLength = this.notifications.length
        // } )
    }

    badgeHidden: boolean = false

    screenChange(name: String){
        this.screenChanged.emit({screenName: name});
    }

    toggleSidenav(){
        this.sideNavService.sideNaveToggle.next()
    }

    homeClick(){
        this.router.navigate(['/dashboard'])
    }

    onLogout(){
        this.userService.user = null;
        localStorage.removeItem('userData');
        this.router.navigate(['/'])
    }
}