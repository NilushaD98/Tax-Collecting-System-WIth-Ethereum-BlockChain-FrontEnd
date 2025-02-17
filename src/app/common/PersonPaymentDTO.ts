export class PersonPaymentDTO{
  constructor(
    private date:Date ,
    private transactionID:String,
    private invoiceID:String,
    private payeeNIC:String,
    private payeeName:String,
    private payerNIC:String,
    private payerName:String,
    private periodCode:String,
    private installmentNumber:number,
    private paymentDescription:String,
    private paidAmount:String
  ) {
  }
}
