export interface PaymentServiceInterface {
    Pay() : boolean;
}

class PaymentStretegy {
    constructor(private paymentService : PaymentServiceInterface){}

    pay(){
        return this.paymentService.Pay();
    }
}
export default PaymentStretegy;