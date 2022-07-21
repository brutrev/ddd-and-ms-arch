import { Customer } from '@/sales/models/entities'
import { Address } from '@/sales/models/value-objects'

describe('Customer', () => {
  it('should create an instance', () => {
    const address = new Address('123 Main St', '', 'Anytown', 'CA', '12345')

    const customer = new Customer(
      1,
      'John',
      '',
      'Doe',
      address,
      'foo@foo.com',
      '123-456-7890',
      new Date(1990, 1, 1),
      new Date()
    )
    expect(customer).toBeTruthy()
  })
})
