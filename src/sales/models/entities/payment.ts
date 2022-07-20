export class Payment {
  constructor(
    public id: string,
    public confirmationReference: number,
    public cancelationReference: number,
    public processedDate: Date
  ) {}
}
