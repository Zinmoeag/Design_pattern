import { PaymentMethod } from "./interfaces/paymentMethod";

class KpayPayment implements PaymentMethod {
    pay(amount: number): boolean {
        console.log("do payment with kpay" + amount);
        return true;
    }
}

export default KpayPayment;