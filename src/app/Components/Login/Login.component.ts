import { Globals } from './../../Common/Globals';
import { CookieService } from 'ngx-cookie-service';
import { LoginService } from './../../Services/login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.scss']
})
export class LoginComponent implements OnInit {

  accountText = '';
  passwordText = '';

  constructor(private loginService: LoginService, private cookieService: CookieService, private router: Router) { }

  ngOnInit(): void {
  }

  accountTextChanged(text: string): void {
    this.accountText = text;
  }

  passwordTextChanged(text: string): void {
    this.passwordText = text;
  }

  checkFields(): void {
    console.log(this.accountText);
    console.log(this.passwordText);

    this.loginService.login(this.accountText, this.passwordText)
    .subscribe( token => {
      console.log(token);
      this.cookieService.set(Globals.tokenCookieString, token.value, 5);
      this.router.navigate(['/main']);
    });
  }
}
