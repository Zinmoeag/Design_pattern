import PaymentService from "./paymentService";
import KpayPayment from "./KpayPayment";
import CreditCardPayment from "./CreditCardPayment";

const kpayPayment = new KpayPayment();
const creditCardPayment = new CreditCardPayment();

class PaymentController {
    pay(payment : any, amount : number) {
        const service =  new PaymentService(payment);
        return service.processPayment(2000);
    }
}

const controller = new PaymentController();
console.log(controller.pay(kpayPayment, 2000));