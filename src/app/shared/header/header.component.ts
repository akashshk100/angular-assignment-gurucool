import { Component, Output, EventEmitter, ViewChild, ElementRef } from "@angular/core"
import { Router } from '@angular/router';
import { UserService } from '../../user.service'
import { SideNavService } from './side-nav.service';

@Component({
    selector: 'head-comp',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class  HeaderComponent{
    @Output() screenChanged = new EventEmitter<{screenName: String}>();
    @ViewChild('dropdownButton') dropdownButton: ElementRef;

    constructor(private router: Router, private userService: UserService, private sideNavService: SideNavService){

    }

    dropdownStatus = false;
    showFiller = false;
     
    screenChange(name: String){
        this.screenChanged.emit({screenName: name});
    }

    changeDropdownStatus(){
        if(this.dropdownStatus){
            this.dropdownButton.nativeElement.className = "dropdown-menu dropdown-menu-right"; 
            this.dropdownStatus = !this.dropdownStatus;
        }
        else{
            this.dropdownButton.nativeElement.className = "dropdown-menu dropdown-menu-right show";
            this.dropdownStatus = !this.dropdownStatus;
        }
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