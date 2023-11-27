import {Component, OnInit} from '@angular/core';
import {TaxpayerService} from "../../services/taxpayer.service";
import {CompanyDetail} from "../../common/company-detail";
import {StandardResponse} from "../../common/standard-response";

@Component({
  selector: 'app-get-all-companies',
  templateUrl: './get-all-companies.component.html',
  styleUrls: ['./get-all-companies.component.css']
})
export class GetAllCompaniesComponent implements OnInit{
  companyDetails: CompanyDetail[] = [];

  constructor(
    private taxPayerService:TaxpayerService
  ) {
  }
  ngOnInit(): void {
    this.taxPayerService.getAllCompanies().subscribe(
      (response:StandardResponse) =>{
        if(response.code === 200){
          this.companyDetails = response.data as CompanyDetail[];
        }else{
          console.log("error")
        }
      }
    );
  }
}
