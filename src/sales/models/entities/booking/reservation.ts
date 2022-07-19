export abstract class Reservation {
  constructor(
    public providerId: string,
    public contractCode: string,
    public reservationReference?: string,
    public cancellationReference?: string
  ) {}

  public reserve() {}
  public cancel() {}
}
