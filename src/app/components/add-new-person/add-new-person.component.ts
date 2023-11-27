import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {TaxpayerService} from "../../services/taxpayer.service";
import {Router} from "@angular/router";
import {Person,} from "../../common/person";
import {ContactDetails} from "../../common/contact-details";
import {BankDetails} from "../../common/bank-details";
import {RequestAddNewTaxpayerPersonDTO} from "../../common/request-add-new-taxpayer-person-dto";
import {StandardResponse} from "../../common/standard-response";

@Component({
  selector: 'app-add-new-person',
  templateUrl: './add-new-person.component.html',
  styleUrls: ['./add-new-person.component.css']
})
export class AddNewPersonComponent implements OnInit{

  personGroup:FormGroup = new FormGroup({})
  constructor(
    private formBuilder:FormBuilder,
    private taxPayerService:TaxpayerService,
    private route:Router
  ) {
  }

  ngOnInit() {
    this.personGroup = this.formBuilder.group({
      person : this.formBuilder.group({
        nic:[''],
        nameWithInitials:[''],
        fullName:[''],
        birthDate:[''],
        country:[''],
        gender:[''],
        race:[''],
        jobTitle:[''],
        nationality:['']
      }),
      contactDetails:this.formBuilder.group({
        premisesNo:[''],
        unitNo:[''],
        address:[''],
        postalCode:[''],
        province:[''],
        district:[''],
        divisionalSecretariat:[''],
        gramaNiladhariDivision:[''],
        mobileContact:[''],
        officeContact:[''],
        homeContact:[''],
        email:[''],
        nameOfContactPerson:['']
      }),
      bankDetails:this.formBuilder.group({
        bankName:[''],
        accountNumber:['']
      })
    });
  }

  onSubmit(){
    const person = this.personGroup.get('person') as FormGroup;
    const contactDetails  = this.personGroup.get('contactDetails') as FormGroup;
    const bankDetails = this.personGroup.get('bankDetails') as FormGroup;
    const requestAddNewTaxpayerPersonDTO = new RequestAddNewTaxpayerPersonDTO(
      person.value.nic,
      person.value.nameWithInitials,
      person.value.fullName,
      person.value.birthDate,
      person.value.country,
      person.value.gender,
      person.value.race,
      person.value.jobTitle,
      person.value.nationality,
      contactDetails.value.premisesNo,
      contactDetails.value.unitNo,
      contactDetails.value.address,
      contactDetails.value.postalCode,
      contactDetails.value.province,
      contactDetails.value.district,
      contactDetails.value.divisionalSecretariat,
      contactDetails.value.gramaNiladhariDivision,
      contactDetails.value.mobileContact,
      contactDetails.value.officeContact,
      contactDetails.value.homeContact,
      contactDetails.value.email,
      contactDetails.value.nameOfContactPerson,bankDetails.value.bankName,
      bankDetails.value.accountNumber
    );

    console.log(requestAddNewTaxpayerPersonDTO);

    this.taxPayerService.addNewTaxPayerPerson(requestAddNewTaxpayerPersonDTO).subscribe(
      (response:StandardResponse)=>{
        if(response.code === 201){
          alert(`person saved : ${response.data}`);
          this.personGroup.reset();
        }else {
          alert(`Check Your Input Details`)
        }
      }
    );
  }

  protected readonly onsubmit = onsubmit;
}
