import fs from 'fs/promises'
import path from 'path'
import pdfParse from 'pdf-parse'
import { TextProcessorFluentAPI } from './textProcessorFluentAPI'

const main = async () => {
  const contractFile = await fs.readFile(path.resolve(__dirname, '..', 'contract-example.pdf'))
  const pdfData = await pdfParse(contractFile)
  const pdfContent = pdfData.text
  new TextProcessorFluentAPI(pdfContent).extractPeopleData()
}

main()
