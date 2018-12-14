import { Router } from '@angular/router';
import { AuthService } from 'shared/services/account/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private auth: AuthService) {

  }

  login() {
    this.auth.login();
  }
}
