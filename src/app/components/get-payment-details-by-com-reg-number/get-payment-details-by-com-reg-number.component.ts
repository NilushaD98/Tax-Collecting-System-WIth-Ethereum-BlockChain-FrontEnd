import { Component } from '@angular/core';
import {PersonPaymentDetail} from "../../common/person-payment-detail";
import {TaxPayingService} from "../../services/tax-paying.service";
import {StandardResponse} from "../../common/standard-response";
import {CompanyPaymentDetail} from "../../common/company-payment-detail";

@Component({
  selector: 'app-get-payment-details-by-com-reg-number',
  templateUrl: './get-payment-details-by-com-reg-number.component.html',
  styleUrls: ['./get-payment-details-by-com-reg-number.component.css']
})
export class GetPaymentDetailsByComRegNumberComponent {

  paymentDetails: CompanyPaymentDetail[] = [];
  showTable: boolean = false;

  constructor(private taxPayingService: TaxPayingService) {}

  doSearch(value: string) {
    this.taxPayingService.getPaymentDetailsByComRegNum(value).subscribe(
      (response: StandardResponse) => {
        if (response.code === 200) {
          this.paymentDetails = response.data as CompanyPaymentDetail[];
          this.showTable = true;
        }
      }
    );
  }
}
