import { Reservation } from '@/sales'

export class RentalCarReservation extends Reservation {
  public reserve(): void {
    throw new Error('Method not implemented.')
  }
  public cancel(): void {
    throw new Error('Method not implemented.')
  }
}
