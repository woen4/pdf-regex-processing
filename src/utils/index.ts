import safeRegex from 'safe-regex'
import { InvalidRegexError } from './InvalidRegexError'

export const evaluateRegex = (regex: RegExp) => {
  const isSafe = safeRegex(regex)

  if (isSafe) return regex

  throw new InvalidRegexError(regex)
}
