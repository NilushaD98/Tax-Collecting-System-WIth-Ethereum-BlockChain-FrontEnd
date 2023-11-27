import {Component, OnInit} from '@angular/core';
import {AuthserviceService} from "../../services/authservice.service";

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit{

  showSidenav = false;
  constructor(private authService:AuthserviceService) {
  }
  ngOnInit(): void {
    this.authService.isLoggedIn.subscribe((loggedIn) => {
      this.showSidenav = loggedIn;
    });
  }

}
