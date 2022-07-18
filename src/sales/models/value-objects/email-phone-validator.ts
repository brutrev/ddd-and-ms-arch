export class EmailPhoneValidator {
  public validateEmail = (email: string): boolean => {
    const regex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return regex.test(String(email).toLowerCase())
  }

  public validatePhone = (phone: string): boolean => {
    const regex = /^\d{10}$/
    return regex.test(String(phone))
  }
}
