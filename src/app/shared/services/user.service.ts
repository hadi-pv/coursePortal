import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../users.model';
import { NgbAlert, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertComponent } from './alert';

@Injectable({
  providedIn: 'root'
})
export class UserService{


  showAlert(message: string,type:string): void {
    const modalRef = this.modalService.open(AlertComponent, { centered: true });
    modalRef.componentInstance.type = type;
    modalRef.componentInstance.message = message;
  }

  
  users:IUser[]=[];
  private userUrl='assets/data/user.json';
  constructor(private http: HttpClient,private modalService: NgbModal) { 
    this.http.get(this.userUrl).subscribe(data => {
      this.users=data as IUser[];
    });
  }

  logInUser(username:string,password:string){
    console.log(username,password)
    this.users.forEach((element:IUser)=> {
      if(element.user_uname==username && element.user_pass==password){
        this.showAlert("Logged In Successfully",'success')
        localStorage.setItem('user',JSON.stringify(element));
      }
    });
    if(localStorage.getItem('user')===null){
      this.showAlert("Invalid username or password",'danger')
    }
  }

  signInUser(user:IUser){
    this.http.post('../../src/assets/data/user.json',user).subscribe(data => {
      console.log(data);
      alert("Signed in successfully");
    });
  }

  isUserLoggedIn(){
    return localStorage.getItem('user')!=null;
  }
  
  logOutUser(){
    localStorage.removeItem('user');
  }
}
