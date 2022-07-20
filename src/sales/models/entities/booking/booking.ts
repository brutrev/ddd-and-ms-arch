import { BookingState } from '@/sales/models/enums'
import { Payment } from '@/sales/models/entities'
import { Reservation } from '@/sales/models/entities/booking'

export class Booking {
  constructor(
    public id: number,
    public reservations: Reservation[],
    public proposalId: number,
    public payment: Payment,
    public state: BookingState
  ) {}
}
