import { Injectable } from '@angular/core';
import {RequestCreditPersonPaymentDTO} from "../common/request-credit-person-payment-dto";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {StandardResponse} from "../common/standard-response";
import {Observable} from "rxjs";
import {RequestCreditCompanyPaymentDTO} from "../common/request-credit-company-payment-dto";
import {CookieService} from "ngx-cookie-service";

@Injectable({
  providedIn: 'root'
})
export class TaxPayingService {

  private baseURL = `http://localhost:8765/tax_credit/`;
  constructor(
    private httpClient:HttpClient,
    private cookieService: CookieService
  ) { }

  addPersonPayment(requestPersonPayment: RequestCreditPersonPaymentDTO):Observable<StandardResponse> {
    const storedToken = this.cookieService.get('access_token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': storedToken
    });
    const options = { headers: headers };
    const personPaymentURL:string = `${this.baseURL}person_payment`
    return this.httpClient.post<StandardResponse>(personPaymentURL,requestPersonPayment,options);
  }
  addCompanyPayment(requestCompanyPayment: RequestCreditCompanyPaymentDTO):Observable<StandardResponse> {
    const storedToken = this.cookieService.get('access_token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': storedToken
    });
    const options = { headers: headers };
    const personPaymentURL:string = `${this.baseURL}person_payment`
    return this.httpClient.post<StandardResponse>(personPaymentURL,requestCompanyPayment,options);
  }

  getPaymentDetailsByNIC(value: string):Observable<StandardResponse> {
    const storedToken = this.cookieService.get('access_token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': storedToken
    });
    const params = {
      NIC: value
    };
    const options = {headers:headers,params:params}
    const getPersonPaymentDetailsURL:string = `${this.baseURL}get_payment_details_by_nic`;
    return this.httpClient.get<StandardResponse>(getPersonPaymentDetailsURL,options);

  }

  getPaymentDetailsByComRegNum(value: string):Observable<StandardResponse> {
    const storedToken = this.cookieService.get('access_token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': storedToken
    });
    const params = {
      regNumber: value
    };
    const options = {headers:headers,params:params}
    const getCompanyPaymentDetailsURL:string = `${this.baseURL}get_payment_details_by_company_registration_number`;
    return this.httpClient.get<StandardResponse>(getCompanyPaymentDetailsURL,options);
  }
}
