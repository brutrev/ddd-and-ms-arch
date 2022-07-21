import { Customer } from '@/sales'
import { ICustomerRepo } from '@/sales/models/repos/customer-repo'

export class CustomerRepoFake implements ICustomerRepo {
  constructor() {}
  
  upsert(customer: Customer): Promise<Customer> {
    throw new Error('Method not implemented.')
  }
  get(customerId: number): Promise<Customer>
  get(email: string, phoneNumber: string): Promise<Customer>
  get(email: unknown, phoneNumber?: unknown): Promise<import('../../../../src/sales').Customer> {
    throw new Error('Method not implemented.')
  }
  delete(customerId: number): Promise<void> {
    throw new Error('Method not implemented.')
  }
}
