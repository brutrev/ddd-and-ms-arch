import { CustomerHistory } from '@/sales/models/value-objects'

export interface ICustomerHistory {
  get(customerId: number): Promise<CustomerHistory>
  get(email: number, phoneNumber: number): Promise<CustomerHistory>
}
