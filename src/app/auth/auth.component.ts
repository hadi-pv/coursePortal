import { Component, ViewChild } from '@angular/core';
import { UserService } from '../shared/services/user.service';
import { faSignOutAlt, faSignIn} from '@fortawesome/free-solid-svg-icons'; 

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  isCollapsed = true;
  username='';
  password='';
  faSignIn=faSignIn;
  faSignOutAlt=faSignOutAlt;

  constructor(public userService: UserService) { }
  isUserLoggedIn: boolean = false;
  ngOnInit() {
    this.isUserLoggedIn=this.userService.isUserLoggedIn();
  }
  logOut(){
    this.userService.logOutUser();
    this.isUserLoggedIn=false;
  }
  logIn(){
    this.userService.logInUser(this.username,this.password);
    this.isUserLoggedIn=this.userService.isUserLoggedIn();
  }

}
