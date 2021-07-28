import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from 'src/app/registration.service';
import { User } from 'src/app/user';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  user = new User();
  private userexist:boolean=false;
  
  message = '';

  constructor(private _service : RegistrationService, private _router: Router) { }

  ngOnInit() {
  }

  reginUser(){
    console.log('USER_ : '+JSON.stringify(this.user));
    this._service.registerUserFromRemote(this.user).subscribe(
      data=>{
        console.log("response received");
        this.userexist=false;
        this._router.navigate(['/login'])
    },
    error=>{
      console.log("exception occured");
      this.userexist=true;
      this.message = "User already exist"
  }
)
}
  goLogin(){
    this._router.navigate(['/login'])
  }
}

