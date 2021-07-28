import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from 'src/app/registration.service';
import { User } from 'src/app/user';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  user = new User();
  message = '';

  constructor(private _service : RegistrationService, private _router : Router) { }

  ngOnInit() {
  }

  loginUser(){
    this._service.logInUserFromRemote(this.user).subscribe(
      data=>{
                console.log("response received");
                this._router.navigate(['/product-list'])
            },
      error=>{
                console.log("exception occured");
                this.message = "Bad Credentials"
            }
    )
  }
  goRegistration(){
    this._router.navigate(['/registration']) 
  }
}
