import { RentalCarReservation } from '@/sales/models'

describe('RentalCarReservation', () => {
  it('should create an instance', () => {
    const reservation = new RentalCarReservation()
    expect(reservation).toBeTruthy()
  })
})
