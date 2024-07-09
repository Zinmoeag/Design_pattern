import { PaymentServiceInterface } from "./PaymentStretegy";
class CreditCardPaymentService implements PaymentServiceInterface{
    Pay(): boolean {
        console.log("do payment with credit card");
        return false;
    }
}

export default CreditCardPaymentService