import { Address, Customer } from '@/sales/models'

describe('Customer', () => {
  it('should create an instance', () => {
    expect(
      new Customer(1, 'John Doe', new Address('123 Main St', 'Anytown', 'CA', '12345'))
    ).toBeTruthy()
  })
})
