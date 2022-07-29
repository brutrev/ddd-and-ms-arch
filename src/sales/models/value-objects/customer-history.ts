import { Booking, Customer, Proposal } from '@/sales/models/entities'

export type CustomerHistory = {
  customer: Customer
  proposals: Proposal[]
  bookings: Booking[]
}
