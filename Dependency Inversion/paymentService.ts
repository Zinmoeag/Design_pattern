import { PaymentMethod } from "./interfaces/paymentMethod";


//tell service class with interface which process to do
class PaymentService{
    private PaymentMethod : PaymentMethod;
    constructor(PaymentMethod : PaymentMethod){
        this.PaymentMethod = PaymentMethod
    }
    public processPayment(amount : number) : boolean{ 
        return this.PaymentMethod.pay(amount);
    }
}

export default PaymentService;