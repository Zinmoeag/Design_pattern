import PaymentStretegy from "./PaymentStretegy";
import KpayPaymentService from "./KpayPaymentService";
import CreditCardPaymentService from "./CreaditCardPaymentServce";

class PayMentController {
    constructor(
        private stretegy : string
    ){}
    doPayProcess(){
        let paymentStretegy;
        switch(this.stretegy){
            case "KPAY":
                 paymentStretegy = new PaymentStretegy(new KpayPaymentService());
                break;
            case "CREDITCARD":
                paymentStretegy = new PaymentStretegy(new CreditCardPaymentService());
                break;
            default:
                paymentStretegy = new PaymentStretegy(new KpayPaymentService());
        }
       paymentStretegy.pay();
    }
}

const paymentcontroller = new PayMentController("KPAY");
paymentcontroller.doPayProcess();