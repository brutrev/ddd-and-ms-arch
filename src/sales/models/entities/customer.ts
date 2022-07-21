import { Address } from '@/sales'

export class Customer {
  constructor(
    public id: number,
    public firstName: string,
    public middleName: string,
    public lastName: string,
    public address: Address,
    public email: string,
    public phoneNumber: string,
    public birthDate: Date,
    public createdAt: Date,
    public updatedAt?: Date
  ) {}
}
