import { Customer } from '@/sales/models/entities'

export interface ICustomerRepo {
  upsert(customer: Customer): Promise<Customer>
  get(customerId: number): Promise<Customer>
  find(email: string, phoneNumber: string): Promise<Customer>
  delete(customerId: number): Promise<void>
}
