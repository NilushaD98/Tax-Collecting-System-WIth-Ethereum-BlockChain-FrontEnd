import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {TaxPayingService} from "../../services/tax-paying.service";
import {StandardResponse} from "../../common/standard-response";
import {RequestCreditCompanyPaymentDTO} from "../../common/request-credit-company-payment-dto";

@Component({
  selector: 'app-add-new-company-payment',
  templateUrl: './add-new-company-payment.component.html',
  styleUrls: ['./add-new-company-payment.component.css']
})
export class AddNewCompanyPaymentComponent implements OnInit{

  companyPaymentGroup: FormGroup = new FormGroup({});
  constructor(
    private taxPayingService:TaxPayingService,
    private formBuilder:FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.companyPaymentGroup = this.formBuilder.group({
      taxPayerRegistrationNumber:[''],
      payeesNIC:[''],
      payeesName:[''],
      companyRegistrationNumber:[''],
      companyName:[''],
      periodCode:[''],
      installmentNumber:[''],
      paymentDescription:[''],
      paidAmount:[''],
    });
  }
  onSubmit() {
    const paymentDetails = this.companyPaymentGroup as FormGroup;
    const requestCompanyPayment = new RequestCreditCompanyPaymentDTO(
      paymentDetails.value.taxPayerRegistrationNumber,
      paymentDetails.value.payeesNIC,
      paymentDetails.value.payeesName,
      paymentDetails.value.companyRegistrationNumber,
      paymentDetails.value.companyName,
      paymentDetails.value.periodCode,
      paymentDetails.value.installmentNumber,
      paymentDetails.value.paymentDescription,
      paymentDetails.value.paidAmount
    );

    this.taxPayingService.addCompanyPayment(requestCompanyPayment).subscribe(
      (response:StandardResponse) =>{
        if(response.code === 201){
          alert(`Payment Saved .\n Payment Receipt: \n ${response.data}`)
          this.companyPaymentGroup.reset();
        }else {
          console.log("unsuccessful")
        }
      }
    );
  }
}
