import fs from 'fs/promises'
import path from 'path'
import pdfParse from 'pdf-parse'

import { TextProcessorFacade } from './textProcessorFacade'

const main = async () => {
  const contractFile = await fs.readFile(path.resolve(__dirname, '..', 'contract-example.pdf'))
  const pdfData = await pdfParse(contractFile)
  const pdfContent = pdfData.text

  const instance = new TextProcessorFacade(pdfContent)
  const people = instance.getPeopleFromPdf()

  console.log(people)
}

main()
