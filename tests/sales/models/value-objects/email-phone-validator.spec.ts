import { EmailPhoneValidator } from '@/sales/models/value-objects/email-phone-validator'

describe('EmailPhoneValidator', () => {
  let emailPhoneValidator: any = null
  beforeEach(() => {
    emailPhoneValidator = new EmailPhoneValidator()
  })

  it('validateEmail', () => {
    expect(emailPhoneValidator.validateEmail('foo@example.com')).toBe(true)
    expect(emailPhoneValidator.validateEmail('yabba dabba doo')).toBe(false)
  })

  it('validatePhone', () => {
    expect(emailPhoneValidator.validatePhone('1234567890')).toBe(true)
    expect(emailPhoneValidator.validatePhone('12345678901')).toBe(false)
  })
})
