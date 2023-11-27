
export class RequestAddNewTaxpayerPersonDTO {
  constructor(
    //person Details
    public nic:string,
    public nameWithInitials:string,
    public fullName:string,
    public birthDate:Date,
    public country:string,
    public gender:string,
    public race:string,
    public jobTitle:string,
    public nationality:string,
    //contact Details
    public premisesNo:number,
    public unitNo:number,
    public address:string,
    public postalCode:number,
    public province:string,
    public district:string,
    public divisionalSecretariat:string,
    public gramaNiladhariDivision:string,
    public mobileContact:string,
    public officeContact:string,
    public homeContact:string,
    public email:string,
    public nameOfContactPerson:string,
    //bank details
    public bankName:string,
    public accountNumber:string,
  ) {
  }
}
