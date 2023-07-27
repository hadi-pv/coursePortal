import { Component } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {
//show hide div variables
userlogin = true;
userregister = false;
//Buttons clicks functionalities 
user_register()
{
  this.userlogin = false;
  this.userregister = true;
}
user_login()
{
  this.userlogin = true;
  this.userregister = false;
}
}
