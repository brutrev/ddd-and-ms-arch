import { ReservationType, ReservationStatus } from '@/sales/models/enums'
import { Reservation } from '@/sales/models/entities/booking'

export class RentalCarReservation extends Reservation {
  constructor(public providerId: string, public contractCode: string) {
    super(providerId, contractCode, ReservationType.RENTALCAR, ReservationStatus.PENDING)
  }

  public reserve(): void {
    throw new Error('Method not implemented.')
  }
  public cancel(): void {
    throw new Error('Method not implemented.')
  }
}
