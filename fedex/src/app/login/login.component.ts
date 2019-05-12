import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
username: string;
password: string;
rd ;
  constructor(private router: Router){ }

  ngOnInit() {
  }
  login() : void {
    if(this.username == 'fedex' && this.password == 'fedex' && this.rd=="1"){
     this.router.navigate(["fedex"]);
    } else if(this.username == 'customs' && this.password == 'customs' && this.rd=="2"){
this.router.navigate(["customs"]);
    }
    else {
      alert("Invalid credentials");
    }
  }

}
