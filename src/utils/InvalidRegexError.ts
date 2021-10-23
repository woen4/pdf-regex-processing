export class InvalidRegexError extends Error {
  constructor (exp: RegExp) {
    super((`This ${exp} is unsafe dude`))
    this.name = 'InvalidRegexError'
  }
}
