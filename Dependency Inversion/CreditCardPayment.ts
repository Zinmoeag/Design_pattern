import {PaymentMethod} from "./interfaces/paymentMethod";
class CreditCardPayment implements PaymentMethod {
    pay(amount : number) : boolean {
        console.log("do payment with credit card" + "amount : " + amount);
        return true
    }
}

export default CreditCardPayment;