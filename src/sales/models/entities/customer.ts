import { Address } from '@/sales'

export class Customer {
  constructor(
    public id: number,
    public firstName: string,
    public middleName: string,
    public lastName: string,
    public address: Address
  ) {}
}
