import { ReservationStatus, ReservationType } from '@/sales/models/enums'

export abstract class Reservation {
  constructor(
    public providerId: string,
    public contractCode: string,
    public type: ReservationType,
    public status: ReservationStatus,
    public reservationReference?: string,
    public cancellationReference?: string
  ) {}

  public reserve() {}
  public cancel() {}
}
