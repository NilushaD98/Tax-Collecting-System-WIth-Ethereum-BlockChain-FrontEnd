// login.component.ts
import { FormBuilder, FormGroup } from "@angular/forms";
import { AuthserviceService } from "../../services/authservice.service";
import { Router } from "@angular/router";
import { AuthDetails } from "../../common/auth-details";
import { Tokens } from "../../common/tokens";
import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { StandardResponse } from "../../common/standard-response";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginGroup: FormGroup = new FormGroup({});
  tokens: Tokens = { access_token: '', refresh_token: '' };

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthserviceService,
    private route: Router,
    private cookieService: CookieService
  ) { }

  showLogging = true;

  ngOnInit(): void {
    this.loginGroup = this.formBuilder.group({
      authdetails: this.formBuilder.group({
        username: [''],
        password: [],
        walletaddress: []
      })
    });

    this.authService.isLoggedIn.subscribe((loggedIn) => {
      this.showLogging = loggedIn;
    });
  }

  onSubmit() {
    const logindetails = this.loginGroup.get('authdetails') as FormGroup;
    const logd = new AuthDetails(
      logindetails.value.username,
      logindetails.value.password,
      logindetails.value.walletaddress
    );

    this.authService.authenticateUser(logd).subscribe(
      (response: StandardResponse) => {
        if (response.code === 200) {
          console.log(response.data);
          this.tokens = response.data as Tokens;
          this.cookieService.set('access_token', this.tokens.access_token);
          this.authService.login();
        }
      }
    );
  }

  protected readonly onsubmit = onsubmit;
  authDetails!: AuthDetails;
}
