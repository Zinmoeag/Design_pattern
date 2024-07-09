import { PaymentServiceInterface } from "./PaymentStretegy";
class KpayPaymentService implements PaymentServiceInterface{
    Pay(): boolean {
        console.log("do payment with kpay");
        return true
    }
}

export default KpayPaymentService;