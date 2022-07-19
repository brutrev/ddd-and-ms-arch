import { HotelReservation } from '@/sales/models'

describe('HotelReservation', () => {
  it('should create an instance', () => {
    const reservation = new HotelReservation()
    expect(reservation).toBeTruthy()
  })
})
