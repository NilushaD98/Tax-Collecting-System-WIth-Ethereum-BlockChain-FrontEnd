import {Component, OnInit} from '@angular/core';
import {CompanyDetail} from "../../common/company-detail";
import {TaxpayerService} from "../../services/taxpayer.service";
import {StandardResponse} from "../../common/standard-response";
import {PersonDetail} from "../../common/person-detail";
import {data} from "autoprefixer";

@Component({
  selector: 'app-get-all-persons',
  templateUrl: './get-all-persons.component.html',
  styleUrls: ['./get-all-persons.component.css']
})
export class GetAllPersonsComponent implements OnInit{
  personDetails: PersonDetail[] = [];

  constructor(
    private taxPayerService:TaxpayerService
  ) {
  }
  ngOnInit(): void {
    this.taxPayerService.getAllPersons().subscribe(
      (response:StandardResponse) =>{
        if(response.code === 200){
          this.personDetails = response.data as PersonDetail[];
        }else{
          console.log("error")
        }
      }
    );
  }

}
