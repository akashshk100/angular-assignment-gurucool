import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service'
import { User } from './user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private userService: UserService){}
  ngOnInit(){
    this.autoLogin()
  }

  private autoLogin(){
    if(localStorage.getItem('userData')){
      let userData = JSON.parse(localStorage.getItem('userData'))
      this.userService.user = new User(userData.userId, userData.userType, true);
    }
  }
  title = 'gurucool';
  selectedScreen: String = "";
}
