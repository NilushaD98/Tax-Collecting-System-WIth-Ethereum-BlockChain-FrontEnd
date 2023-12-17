// auth.service.ts
import { Injectable } from '@angular/core';
import { AuthDetails } from "../common/auth-details";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Tokens } from "../common/tokens";
import { BehaviorSubject } from 'rxjs';
import { StandardResponse } from "../common/standard-response";
import {CookieService} from "ngx-cookie-service";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
  private loggedIn = new BehaviorSubject<boolean>(false);

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  constructor(private http: HttpClient,private cookieService:CookieService,private router: Router) { }

  private baseURL = 'http://localhost:8765/auth/register';

  authenticateUser(authDetails: AuthDetails): Observable<StandardResponse> {
    return this.http.post<StandardResponse>(this.baseURL, authDetails);
  }

  login() {
    localStorage.setItem('isLoggedIn', 'true');
    this.loggedIn.next(true);
  }

  logout() {
    localStorage.removeItem('isLoggedIn');
    this.cookieService.delete('access_token');
    this.loggedIn.next(false);
  }
}
