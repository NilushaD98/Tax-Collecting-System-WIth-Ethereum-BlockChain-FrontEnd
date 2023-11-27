import {Component, OnInit} from '@angular/core';
import {TaxpayerService} from "../../services/taxpayer.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Country} from "../../common/country";
import {StandardResponse} from "../../common/standard-response";
import {RequestAddNewTaxpayerCompanyDTO} from "../../common/request-add-new-taxpayer-company-dto";

@Component({
  selector: 'app-add-new-company',
  templateUrl: './add-new-company.component.html',
  styleUrls: ['./add-new-company.component.css']
})
export class AddNewCompanyComponent implements OnInit{

  companyGroup: FormGroup = new FormGroup({});

  constructor(
    private taxPayerService:TaxpayerService,
    private formBuilder:FormBuilder
    ) {
  }

  ngOnInit(): void {
    const company = this.companyGroup.get('company') as FormGroup;
    this.companyGroup = this.formBuilder.group({
      company:this.formBuilder.group({
        registrationNumber:[''],
        companyName:[''],
        comTypeID:[''],
        dateOfIncorporation:[''],
        countryOfIncorporation:[''],
        principalActivityOfBusiness:[''],
        contact:[''],
        companyEmail:[''],
        websiteURL:[''],
        BOIRegisterStatus:[''],
        BOIStartDate:[''],
        BOIExpiryDate:[''],
        BankCode:[''],
        foreignCompanyDateOfIncorporation:[''],
        foreignCompanyCountryOfIncorporation:[''],
        foreignCompanyDateOfCommencement:['']
      }),
      groupCompany:this.formBuilder.group({
        groupCompanyRegistrationNo:[''],
        nameOfParentCountry:[''],
        addressOfGroupCompany:[''],
        groupCompanyCountryOfIncorporation:[''],
        groupCompanyDateOfIncorporation:[''],
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
      director:this.formBuilder.group({
        NICOrPassportNo:[''],
        IssuanceCountryOfPassport:[''],
        fullName:[''],
        nameWithInitials:[''],
        dateOfBirth:[''],
        directorAddress:[''],
        directorPostalCode:[''],
        contactMobile:[''],
        contactOffice:[''],
        contactHome:[''],
        directorEmail:[''],
      }),
      bankDetails:this.formBuilder.group({
        bankName:[''],
        accountNumber:['']
      })
    });
  }



  onSubmit() {
    const company = this.companyGroup.get('company') as FormGroup;
    const groupOfCompany = this.companyGroup.get('groupCompany') as FormGroup;
    const contactDetails = this.companyGroup.get('contactDetails') as FormGroup;
    const directorDetails  = this.companyGroup.get('director') as FormGroup;
    const bankDetails  = this.companyGroup.get('bankDetails') as FormGroup;

    const requestAddNewTaxpayerCompanyDTO = new RequestAddNewTaxpayerCompanyDTO(
      company.value.registrationNumber,
      company.value.companyName,
      company.value.comTypeID,
      company.value.dateOfIncorporation,
      company.value.countryOfIncorporation,
      company.value.principalActivityOfBusiness,
      company.value.contact,
      company.value.companyEmail,
      company.value.websiteURL,
      company.value.BOIRegisterStatus,
      company.value.BOIStartDate,
      company.value.BOIExpiryDate,
      company.value.BankCode,
      company.value.foreignCompanyDateOfIncorporation,
      company.value.foreignCompanyCountryOfIncorporation,
      company.value.foreignCompanyDateOfCommencement,
      groupOfCompany.value.groupCompanyRegistrationNo,
      groupOfCompany.value.nameOfParentCountry,
      groupOfCompany.value.addressOfGroupCompany,
      groupOfCompany.value.groupCompanyCountryOfIncorporation,
      groupOfCompany.value.groupCompanyDateOfIncorporation,
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
      contactDetails.value.nameOfContactPerson,
      directorDetails.value.NICOrPassportNo,
      directorDetails.value.IssuanceCountryOfPassport,
      directorDetails.value.fullName,
      directorDetails.value.nameWithInitials,
      directorDetails.value.dateOfBirth,
      directorDetails.value.directorAddress,
      directorDetails.value.directorPostalCode,
      directorDetails.value.contactMobile,
      directorDetails.value.contactOffice,
      directorDetails.value.contactHome,
      directorDetails.value.directorEmail,
      bankDetails.value.bankName,
      bankDetails.value.accountNumber,
    );

    this.taxPayerService.addNewTaxPayerCompany(requestAddNewTaxpayerCompanyDTO).subscribe(
      (response:StandardResponse)=>{
        if(response.code === 201){
          alert(`Company saved : ${response.data}`);
          this.companyGroup.reset();
        }else {
          alert(`Check Your Input Details`)
        }
      }
    );
  }
}
