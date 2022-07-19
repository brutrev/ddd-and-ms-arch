import { Customer } from '@/sales/models/entities'
import { Address } from '@/sales/models/value-objects'

describe('Customer', () => {
  it('should create an instance', () => {
    const address = new Address('123 Main St', '', 'Anytown', 'CA', '12345')

    const customer = new Customer(1, 'John', '', 'Doe', address)
    expect(customer).toBeTruthy()
  })
})
