import { Component, Output, EventEmitter, ViewChild, ElementRef } from "@angular/core"
import { Router } from '@angular/router';
import { UserService } from '../../user.service'

@Component({
    selector: 'head-comp',
    templateUrl: './header.component.html' 
})
export class  HeaderComponent{
    @Output() screenChanged = new EventEmitter<{screenName: String}>();
    @ViewChild('dropdownButton') dropdownButton: ElementRef;

    constructor(private router: Router, private userService: UserService){

    }

    dropdownStatus = false;

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

    onLogout(){
        this.userService.user = null;
        localStorage.removeItem('userData');
        this.router.navigate(['/'])
    }
}