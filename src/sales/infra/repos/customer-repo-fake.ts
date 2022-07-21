import { Customer } from '@/sales'
import { ICustomerRepo } from '@/sales/models/repos/customer-repo'

export class CustomerRepoFake implements ICustomerRepo {
  private customers: Customer[] = []

  constructor() {}

  upsert(customer: Customer): Promise<Customer> {
    const index = this.customers.findIndex(c => c.id === customer.id)
    if (index > -1) {
      this.customers[index] = customer
    } else {
      this.customers.push(customer)
    }

    return Promise.resolve(customer)
  }

  get(customerId: number): Promise<Customer> {
    const customer = this.customers.find(c => c.id === customerId)

    if (!customer) return null

    return Promise.resolve(customer)
  }

  find(email: string, phoneNumber: string): Promise<Customer> {
    const customer = this.customers.find(c => c.email === email || c.phoneNumber === phoneNumber)

    if (!customer) return null

    return Promise.resolve(customer)
  }

  delete(customerId: number): Promise<void> {
    const index = this.customers.findIndex(c => c.id === customerId)

    if (index > -1) {
      this.customers.splice(index, 1)
    }

    return
  }
}
