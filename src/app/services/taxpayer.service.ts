import { Injectable } from '@angular/core';
import {RequestAddNewTaxpayerPersonDTO} from "../common/request-add-new-taxpayer-person-dto";
import {Observable} from "rxjs";
import {StandardResponse} from "../common/standard-response";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {RequestAddNewTaxpayerCompanyDTO} from "../common/request-add-new-taxpayer-company-dto";
import {CookieService} from "ngx-cookie-service";

@Injectable({
  providedIn: 'root'
})
export class TaxpayerService {

  private baseURL =  `http://localhost:8765/tax_payer/`;
  constructor(
    private httpClient:HttpClient,
    private cookieService: CookieService
  ) { }

  addNewTaxPayerPerson(requestAddNewTaxpayerPersonDTO: RequestAddNewTaxpayerPersonDTO):Observable<StandardResponse> {
    const storedToken = this.cookieService.get('access_token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': storedToken
    });
    const options = { headers: headers };
    const AddNewTaxpayerPersonURL:string = `${this.baseURL}register_new_person`;
    return this.httpClient.post<StandardResponse>(AddNewTaxpayerPersonURL,requestAddNewTaxpayerPersonDTO,options);
  }

  addNewTaxPayerCompany(requestAddNewTaxpayerCompanyDTO: RequestAddNewTaxpayerCompanyDTO):Observable<StandardResponse>{
    const storedToken = this.cookieService.get('access_token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': storedToken
    });
    const options = { headers: headers };
    const AddNewTaxpayerCompanyURL:string = `${this.baseURL}register_new_company`;
    return this.httpClient.post<StandardResponse>(AddNewTaxpayerCompanyURL,requestAddNewTaxpayerCompanyDTO,options);

  }

  getAllCompanies():Observable<StandardResponse> {
    const storedToken = this.cookieService.get('access_token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': storedToken
    });
    const getAllCompaniesURL:string = `${this.baseURL}get_all_companies`;
    return this.httpClient.get<StandardResponse>(getAllCompaniesURL,{headers});
  }

  getAllPersons():Observable<StandardResponse> {
    const storedToken = this.cookieService.get('access_token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': storedToken
    });
    const getAllPersonsURL:string = `${this.baseURL}get_all_persons`;
    return this.httpClient.get<StandardResponse>(getAllPersonsURL,{headers});
  }
}
