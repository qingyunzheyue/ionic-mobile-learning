import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpRequestService } from '../common/http-request.service';
import { StorageService } from '../common/storage.service';
import { LoginAPIServiceService } from './login-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user = {
    username: "",
    password: ""
  }

  constructor(private router: Router, private readonly loginService: LoginAPIServiceService, private readonly storage: StorageService) {
   }

  ngOnInit() {
  }

  login(){

    this.loginService.login().subscribe( user =>{
      this.storage.set("current_user", user);
      this.router.navigate(['/home']);
    });
  }

}
