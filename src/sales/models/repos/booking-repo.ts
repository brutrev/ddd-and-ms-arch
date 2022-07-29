import { Booking } from '@/sales/models/entities'

export interface IBookingRepo {
  upsert(booking: Booking): Promise<Booking>
  get(bookingId: number): Promise<Booking>
  delete(bookingId: number): Promise<void>
}
