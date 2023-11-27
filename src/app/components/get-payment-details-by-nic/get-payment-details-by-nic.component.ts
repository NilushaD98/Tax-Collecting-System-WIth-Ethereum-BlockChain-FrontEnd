import { Component } from '@angular/core';
import { TaxPayingService } from "../../services/tax-paying.service";
import { StandardResponse } from "../../common/standard-response";
import {PersonPaymentDetail} from "../../common/person-payment-detail";

@Component({
  selector: 'app-get-payment-details-by-nic',
  templateUrl: './get-payment-details-by-nic.component.html',
  styleUrls: ['./get-payment-details-by-nic.component.css']
})
export class GetPaymentDetailsByNICComponent {
  paymentDetails: PersonPaymentDetail[] = []; // Adjust the type based on your actual data structure
  showTable: boolean = false;

  constructor(private taxPayingService: TaxPayingService) {}

  doSearch(value: string) {
    console.log(value);
    this.taxPayingService.getPaymentDetailsByNIC(value).subscribe(
      (response: StandardResponse) => {
        if (response.code === 200) {
          console.log(response.data);
          this.paymentDetails = response.data as PersonPaymentDetail[];
          this.showTable = true;
        }
      }
    );
  }
}
