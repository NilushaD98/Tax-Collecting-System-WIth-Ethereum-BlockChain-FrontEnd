export class RequestCreditCompanyPaymentDTO {
  constructor(
    public taxPayerRegistrationNumber:number,
    public payeesNIC:string,
    public payeesName:string,
    public companyRegistrationNumber:string,
    public companyName:string,
    public periodCode:string,
    public installmentNumber:number,
    public paymentDescription:string,
    public paidAmount:string
  ) {
  }
}
