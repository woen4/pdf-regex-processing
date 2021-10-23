import { TextProcessorFluentAPI } from '../src/textProcessorFluentAPI'
import validMock from './mocks/valid'

describe('Text processor test', () => {
  it('#build', () => {
    const content = new TextProcessorFluentAPI(validMock).build()
    expect(content).toEqual(validMock)
  })
  it('#extractPeopleData', () => {
    const { onlyPerson } = new TextProcessorFluentAPI(
      validMock
    ).extractPeopleData()

    const peopleData = [
      [
        'Xuxa da Silva, brasileira, casada, CPF 235.743.420-12, residente e ',
        'domiciliada a Rua dos bobos, zero, bairro Alphaville, São Paulo. '
      ].join('\n'),
      [
        'Arya Robbin, belga, casado, CPF 884.112.200-52, residente e ',
        'domiciliada a Av. paulista, 1400, bairro Consolação, São Paulo. '
      ].join('\n'),
      [
        'Júlia Menezes, brasileira, solteira, CPF 297.947.800-81, residente e ',
        'domiciliada a Av. dos Estados, 99, bairro Jardins, São Paulo. '
      ].join('\n')
    ]

    expect(onlyPerson).toEqual(peopleData)
  })
  it('#divideTextInColumns', () => {
    const { textDividedInColumns } = new TextProcessorFluentAPI(validMock)
      .extractPeopleData()
      .divideTextInColumns()

    const peopleData = [
      [
        'Xuxa da Silva',
        ' brasileira',
        ' casada',
        ' CPF 235.743.420-12',
        ' residente e \ndomiciliada a Rua dos bobos',
        ' zero',
        ' bairro Alphaville',
        ' São Paulo. '
      ],
      [
        'Arya Robbin',
        ' belga',
        ' casado',
        ' CPF 884.112.200-52',
        ' residente e \ndomiciliada a Av. paulista',
        ' 1400',
        ' bairro Consolação',
        ' São Paulo. '
      ],
      [
        'Júlia Menezes',
        ' brasileira',
        ' solteira',
        ' CPF 297.947.800-81',
        ' residente e \ndomiciliada a Av. dos Estados',
        ' 99',
        ' bairro Jardins',
        ' São Paulo. '
      ]
    ]

    expect(textDividedInColumns).toEqual(peopleData)
  })
  it('#divideTextInColumns', () => {
    const { textDividedWithoutWhitespace } = new TextProcessorFluentAPI(
      validMock
    )
      .extractPeopleData()
      .divideTextInColumns()
      .removeEmptyCharacters()

    const peopleData = [
      [
        'Xuxa da Silva',
        'brasileira',
        'casada',
        'CPF 235.743.420-12',
        'residente e domiciliada a Rua dos bobos',
        'zero',
        'bairro Alphaville',
        'São Paulo.'
      ],
      [
        'Arya Robbin',
        'belga',
        'casado',
        'CPF 884.112.200-52',
        'residente e domiciliada a Av. paulista',
        '1400',
        'bairro Consolação',
        'São Paulo.'
      ],
      [
        'Júlia Menezes',
        'brasileira',
        'solteira',
        'CPF 297.947.800-81',
        'residente e domiciliada a Av. dos Estados',
        '99',
        'bairro Jardins',
        'São Paulo.'
      ]
    ]

    expect(textDividedWithoutWhitespace).toEqual(peopleData)
  })

  it('#mapPerson', () => {
    const { person } = new TextProcessorFluentAPI(validMock)
      .extractPeopleData()
      .divideTextInColumns()
      .removeEmptyCharacters()
      .mapPerson()

    const expected = [
      {
        citizenship: 'Brasileira',
        country: 'São Paulo',
        cpf: '23574342012',
        district: 'Alphaville',
        maritalStatus: 'Casada',
        name: 'Xuxa da Silva',
        street: 'Rua dos bobos',
        streetNumber: ''
      },
      {
        citizenship: 'Belga',
        country: 'São Paulo',
        cpf: '88411220052',
        district: 'Consolação',
        maritalStatus: 'Casado',
        name: 'Arya Robbin',
        street: 'Av. paulista',
        streetNumber: '1400'
      },
      {
        citizenship: 'Brasileira',
        country: 'São Paulo',
        cpf: '29794780081',
        district: 'Jardins',
        maritalStatus: 'Solteira',
        name: 'Júlia Menezes',
        street: 'Av. dos Estados',
        streetNumber: '99'
      }
    ]

    expect(person).toEqual(expected)
  })
})
