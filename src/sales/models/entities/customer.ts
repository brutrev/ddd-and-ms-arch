import { Address } from '@/sales/models/value-objects/address'

export class Customer {
  constructor(public id: number, public name: string, public address: Address) {}
}
