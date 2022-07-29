import { Proposal } from '@/sales/models/entities'

export interface IProposalRepo {
  upsert(proposal: Proposal): Promise<Proposal>
  get(proposalId: number): Promise<Proposal>
  delete(proposalId: number): Promise<void>
}
