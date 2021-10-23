import { evaluateRegex } from '../src/utils'
import { InvalidRegexError } from '../src/utils/InvalidRegexError'

describe('Text processor test', () => {
  it('Should throw an error on validate a unsafe regex', () => {
    const unsafeRegex = /^([a-z|A-Z|0-9]+\s?)+$/
    expect(() => evaluateRegex(unsafeRegex)).toThrowError(InvalidRegexError)
  })
  it('Should not throw an error on validate a safe regex', () => {
    const unsafeRegex = /^([a-z])$/
    expect(() => evaluateRegex(unsafeRegex)).not.toThrowError()
  })
})
