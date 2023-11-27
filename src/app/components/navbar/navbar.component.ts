import { Component } from '@angular/core';
import {AuthserviceService} from "../../services/authservice.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private authService: AuthserviceService) {}
  logout() {
    // Clear cookies or perform any logout logic
    this.authService.logout();
  }
}
