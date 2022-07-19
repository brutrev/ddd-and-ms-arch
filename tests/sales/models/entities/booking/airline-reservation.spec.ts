import { AirlineReservation } from '@/sales/models/entities/booking'

describe('AirlineReservation', () => {
  it('should create an instance', () => {
    const reservation = new AirlineReservation('any-provider-id', 'any-contract-code')
    expect(reservation).toBeTruthy()
  })
})
