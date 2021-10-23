import { Person } from './Person'

class TextProcessorFluentAPI {
  private originalContent: string;
  public onlyPerson: string[];
  public content: string;
  public textDividedInColumns: string[][];
  public textDividedWithoutWhitespace: string[][];
  public person: Person[]

  constructor (content: string) {
    this.originalContent = content
    this.content = content
  }

  extractPeopleData () {
    /*
      ?<= => Dá match a partir da expressão seguinte
      [contratada|contratante] => Operador de ||
      :\s{1} => match em dois pontos seguido de espaço
      ?!\s{1} => ignora matches que tem um espaço após a sequência
      .*\n => match em tudo até o primeiro \n
      .*? => match em tudo até a primeira recorrencia
      [contratada|contratante]:\s{1} => toda essa expressão, está sujeita a essa => ?<=
      gmi => global, multiline, insensitive
    */
    const matchPerson = /(?<=[contratada|contratante]:\s{1})(?!\s{1})(.*\n.*?)$/gim
    const onlyPerson = this.originalContent.match(matchPerson)

    this.onlyPerson = onlyPerson
    return this
  }

  divideTextInColumns () {
    const textDivided = this.onlyPerson.map((person) => person.split(','))
    this.textDividedInColumns = textDivided

    return this
  }

  removeEmptyCharacters () {
    const textDividedWithoutWhitespace = this.textDividedInColumns.map(
      (person) =>
        person.map((prop) => prop.replace(/^\s|\s+$/gm, '').replace('\n', ' '))
    )
    this.textDividedWithoutWhitespace = textDividedWithoutWhitespace
    return this
  }

  mapPerson () {
    this.person = this.textDividedWithoutWhitespace.map(arrayProperties => new Person(arrayProperties))
    return this
  }

  build () {
    return this.content
  }
}

export { TextProcessorFluentAPI }
