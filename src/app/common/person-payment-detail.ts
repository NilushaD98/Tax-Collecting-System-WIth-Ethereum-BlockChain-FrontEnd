export class PersonPaymentDetail {
  constructor(
    public invoiceNumber:string,
    public payeesNIC:string,
    public payeesName:string,
    public periodCode:number,
    public installmentNumber:string,
    public paidAmount:string,
  ) {
  }
}
