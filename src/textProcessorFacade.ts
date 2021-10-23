import { TextProcessorFluentAPI } from './textProcessorFluentAPI'

class TextProcessorFacade {
  private textProcessorFluentAPI: TextProcessorFluentAPI;
  constructor (content: string) {
    this.textProcessorFluentAPI = new TextProcessorFluentAPI(content)
  }

  getPeopleFromPdf () {
    const {
      person
    } = this.textProcessorFluentAPI
      .extractPeopleData()
      .divideTextInColumns()
      .removeEmptyCharacters()
      .mapPerson()

    return person
  }
}

export { TextProcessorFacade }
