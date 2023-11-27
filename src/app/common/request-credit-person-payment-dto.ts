export class RequestCreditPersonPaymentDTO {
  constructor(
    public taxPayerRegistrationNumber:number,
    public payeesNIC:string,
    public payeesName:string,
    public payersNIC:string,
    public payersName:string,
    public periodCode:string,
    public installmentNumber:number,
    public paymentDescription:string,
    public paidAmount:string
  ) {
  }
}
