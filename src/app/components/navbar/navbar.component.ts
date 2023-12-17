import {Component, OnInit} from '@angular/core';
import {AuthserviceService} from "../../services/authservice.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  isLogging: boolean=false;

  constructor(
    private authService: AuthserviceService,
    private router:Router,
  ) {}
  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  ngOnInit(): void {
    this.authService.isLoggedIn.subscribe((loggedIn) => {
      this.isLogging = loggedIn;
    });
  }
}
