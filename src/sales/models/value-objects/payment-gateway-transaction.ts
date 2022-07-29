export type PaymentGatewayTransaction = {
  id: string
  result: PaymentGatewayTransactionResult
  errorDetails: string
}

export enum PaymentGatewayTransactionResult {
  SUCCESS = 'SUCCESS',
  FAILURE = 'FAILURE'
}
