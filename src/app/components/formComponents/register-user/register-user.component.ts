import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../services/user.service';
import { TestBed } from '@angular/core/testing';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss'],
  providers: [UserService]
})
export class RegisterUserComponent implements OnInit {


  username:string ="";
  email:string = "";
  password:string = "";
  reenterPassword:string = "";

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  registerUser(){
    if(this.validation()){
      let user = {
        userName:"tester1",
        password:"qwerty",
        contact: 9878788112
      }
      this.userService.registerUser(user).subscribe(res=>{
        debugger;
        console.log(res);
      });
    }
  }

  validation(){
    if(this.password == this.reenterPassword && this.password != ""){
      return true;
    }
  }

}
