import { Address } from '@/sales/models/value-objects/address'

export class Customer {
  constructor(
    public id: number,
    public firstName: string,
    public middleName: string,
    public lastName: string,
    public address: Address
  ) {}
}
