// app.component.ts
import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from "./services/authservice.service";
import { Router } from "@angular/router";
import { CookieService } from "ngx-cookie-service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  showSidenav = false;
  showLoginComp: boolean = true;

  constructor(
    private authService: AuthserviceService,
    private router: Router,
    private cookieService: CookieService
  ) {}

  ngOnInit(): void {
    this.authService.isLoggedIn.subscribe((loggedIn) => {
      this.showSidenav = loggedIn;
      this.showLoginComp = !loggedIn;
    });

    const storedToken = this.cookieService.get('access_token');

    if (!storedToken) {
      this.router.navigate(['/login']);
    }
  }
}
