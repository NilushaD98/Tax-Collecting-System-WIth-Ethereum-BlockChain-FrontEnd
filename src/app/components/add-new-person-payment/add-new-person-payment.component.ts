import {Component, OnInit} from '@angular/core';
import {TaxPayingService} from "../../services/tax-paying.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {RequestCreditPersonPaymentDTO} from "../../common/request-credit-person-payment-dto";
import {StandardResponse} from "../../common/standard-response";
import {PersonPaymentDTO} from "../../common/PersonPaymentDTO";

@Component({
  selector: 'app-add-new-person-payment',
  templateUrl: './add-new-person-payment.component.html',
  styleUrls: ['./add-new-person-payment.component.css']
})
export class AddNewPersonPaymentComponent implements OnInit{
  isLoading: boolean = false;

  personPaymentGroup: FormGroup = new FormGroup({});
  constructor(
    private taxPayingService:TaxPayingService,
    private formBuilder:FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.personPaymentGroup = this.formBuilder.group({
      taxPayerRegistrationNumber:[''],
      payeesNIC:[''],
      payeesName:[''],
      payersNIC:[''],
      payersName:[''],
      periodCode:[''],
      installmentNumber:[''],
      paymentDescription:[''],
      paidAmount:[''],
    });
  }
  onSubmit() {
    this.isLoading= true;
    const paymentDetails = this.personPaymentGroup as FormGroup;
    const requestPersonPayment = new RequestCreditPersonPaymentDTO(
      paymentDetails.value.taxPayerRegistrationNumber,
      paymentDetails.value.payeesNIC,
      paymentDetails.value.payeesName,
      paymentDetails.value.payersNIC,
      paymentDetails.value.payersName,
      paymentDetails.value.periodCode,
      paymentDetails.value.installmentNumber,
      paymentDetails.value.paymentDescription,
      paymentDetails.value.paidAmount
    );
    this.taxPayingService.addPersonPayment(requestPersonPayment).subscribe(
      (response:StandardResponse) =>{
        if(response.code === 201){
          this.isLoading = false;
          alert(`Payment Saved .`)
          this.personPaymentGroup.reset();
        }else {
          console.log("unsuccessful")
        }
      }
    );
  }
}
