import { RentalCarReservation } from '@/sales/models/entities/booking'

describe('RentalCarReservation', () => {
  it('should create an instance', () => {
    const reservation = new RentalCarReservation('any-provider-id', 'any-contract-code')
    expect(reservation).toBeTruthy()
  })
})
