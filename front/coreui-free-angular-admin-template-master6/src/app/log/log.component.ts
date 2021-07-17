import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {LoginService} from '../login.service';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {

  loggedIn: boolean;  
  username: string;
  password: string;

	constructor (private loginService: LoginService, private router: Router) {
    if(localStorage.getItem('PortalAdminHasLoggedIn') == '' || localStorage.getItem('PortalAdminHasLoggedIn') == null) {
      this.loggedIn = false;
    } else {
      this.loggedIn = true;
    }
  }
  
  
  onSubmit() {       

  	this.loginService.sendCredential(this.username, this.password).subscribe(
      res => { 
        console.log("good  ",this.username );
        this.loggedIn=true;
        localStorage.setItem('PortalAdminHasLoggedIn', 'true');
        location.reload();
        this.router.navigate(['/dashboard']);

      },
      err =>{ console.log("erreur ",this.username , this.password),
      this.router.navigate(['/dashboard']);
    }
    );

  }

  ngOnInit() {}



}
