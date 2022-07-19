import { AirlineReservation } from '@/sales/models'

describe('AirlineReservation', () => {
  it('should create an instance', () => {
    const reservation = new AirlineReservation()
    expect(reservation).toBeTruthy()
  })
})
