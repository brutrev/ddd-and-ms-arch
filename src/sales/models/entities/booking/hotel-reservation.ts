import { Reservation } from '@/sales'

export class HotelReservation extends Reservation {
  public reserve(): void {
    throw new Error('Method not implemented.')
  }
  public cancel(): void {
    throw new Error('Method not implemented.')
  }
}
