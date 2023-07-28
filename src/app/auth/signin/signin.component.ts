import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {UserService} from '../../shared/services/user.service';
import { IUser } from 'src/app/shared/users.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {


  public closeResult: string='';
  uname='ah';
  fname='hadi';
  lname='hadi';
  upass='1234';
  uprofession='Student';
  user?:IUser;
	constructor(private modalService: NgbModal,public userService: UserService) {}
  openVerticallyCentered(content:any) {
		this.modalService.open(content, { centered: true });
	}
  setProfession(profession:string){
    this.uprofession=profession;
  };

  save(userForm:NgForm){
    console.log(userForm.form)
    console.log(userForm.valid)
    console.log(userForm.value)
  }

  signIn(){
    this.user={
      "user_id":123,
      "user_uname":this.uname,
      "user_pass":this.upass,
      "user_profession":this.uprofession,
      "user_fname":this.fname,
      "user_lname":this.lname,
      "user_role":"user"
    }
    this.userService.signInUser(this.user);
    console.log({
      "user_id":123,
      "user_uname":this.uname,
      "user_pass":this.upass,
      "user_profession":this.uprofession,
      "user_fname":this.fname,
      "user_lname":this.lname,
      "user_role":"user"
    })
  }
}
