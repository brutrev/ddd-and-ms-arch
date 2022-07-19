import { Pax } from '@/sales/models/value-objects'
import { Customer, VacationPackage } from '@/sales/models/entities'

export class Proposal {
  constructor(
    public id: number,
    public customer: Customer,
    public vacationPackage: VacationPackage,
    public passengers: Pax[]
  ) {}
}
