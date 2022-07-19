import { Offer, Pax } from '@/sales/models/value-objects'
import { Customer, VacationPackage } from '@/sales/models/entities'
import { ProposalStatus } from '@/sales/models/enums'

export class Proposal {
  constructor(
    public id: number,
    public customer: Customer,
    public vacationPackage: VacationPackage,
    public passengers: Pax[],
    public status: ProposalStatus,
    public offer: Offer
  ) {}
}
