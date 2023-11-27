export class CompanyPaymentDetail {
  constructor(
    public invoiceNumber:string,
    public payeesNIC:string,
    public payeesName:string,
    public periodCode:number,
    public installmentNumber:number,
    public paidAmount:string,
  ) {
  }
}
