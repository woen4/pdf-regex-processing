import { evaluateRegex } from './utils'

export class Person {
  private name: string
  private citizenship: string
  private maritalStatus: string
  private cpf: string
  private street: string
  private streetNumber: string
  private district: string
  private country: string

  constructor ([
    name,
    citizenship,
    maritalStatus,
    cpf,
    street,
    streetNumber,
    district,
    country
  ]: string[]) {
    this.name = name
    this.citizenship = this.upperFirstLetter(citizenship)
    this.maritalStatus = this.upperFirstLetter(maritalStatus)
    this.cpf = cpf.replace(evaluateRegex(/\D/gm), '')
    this.street = street.match(evaluateRegex(/(?=Av\.|Rua)(.*$)/gm)).join() // .join || [0]
    this.streetNumber = streetNumber.replace(evaluateRegex(/\D+/), '')
    this.district = district.match(evaluateRegex(/(?<=\s).*$/)).join()
    this.country = country.replace(/\.$/, '')
  }

  private upperFirstLetter (value: string): string {
    const regex = evaluateRegex(/(^\w{1})([a-zA-Z]+$)/)

    return value.replace(regex, (fullMatch, g1: string, g2: string) => {
      return `${g1.toUpperCase()}${g2.toLowerCase()}`
    })
  }
}
