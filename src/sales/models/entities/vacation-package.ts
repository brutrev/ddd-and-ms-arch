import { Reservation } from '@/sales/models/entities/booking'

export class VacationPackage {
  constructor(public name: string, public reservations: Reservation[] = []) {}

  public addReservation(reservation: Reservation): void {
    this.reservations.push(reservation)
  }
}
