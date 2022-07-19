import { HotelReservation } from '@/sales/models/entities/booking'

describe('HotelReservation', () => {
  it('should create an instance', () => {
    const reservation = new HotelReservation('any-provider-id', 'any-contract-code')
    expect(reservation).toBeTruthy()
  })
})
