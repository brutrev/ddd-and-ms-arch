import { ReservationStatus, ReservationType } from '@/sales/models/enums'
import { Reservation } from '@/sales/models/entities/booking'

export class HotelReservation extends Reservation {
  constructor(public providerId: string, public contractCode: string) {
    super(providerId, contractCode, ReservationType.HOTEL, ReservationStatus.PENDING)
  }

  public reserve(): void {
    throw new Error('Method not implemented.')
  }
  public cancel(): void {
    throw new Error('Method not implemented.')
  }
}
