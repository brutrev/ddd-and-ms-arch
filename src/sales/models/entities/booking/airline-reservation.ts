import { Reservation } from '@/sales/models/entities/booking'

export class AirlineReservation extends Reservation {
  constructor(public providerId: string, public contractCode: string) {
    super(providerId, contractCode)
  }

  public reserve(): void {
    throw new Error('Method not implemented.')
  }
  public cancel(): void {
    throw new Error('Method not implemented.')
  }
}
