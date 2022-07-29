import { Payment } from '@/sales/models/entities'
import {
  PaymentGatewayTransaction,
  PaymentGatewayTransactionDetails
} from '@/sales/models/value-objects'

export interface IPaymentGatewayService {
  charge(
    cardNumber: number,
    expiryMonth: number,
    expiryYear: number,
    cvv: number
  ): Promise<PaymentGatewayTransaction>

  refund(payment: Payment): Promise<PaymentGatewayTransaction>

  getTransactionDetails(transactionId: string): Promise<PaymentGatewayTransactionDetails>
}
