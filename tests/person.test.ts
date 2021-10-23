import { Person } from '../src/Person'

describe('Person', () => {
  it('Should generate a person instance from a property list', () => {
    /*
      'Arya Robbin',
      'belga',
      'casado',
      'CPF 884.112.200-52',
      'residente e domiciliada a Av. paulista',
      '1400',
      'bairro Consolação',
      'São Paulo.'
    */
    const properties = [
      'Arya Robbin',
      'belga',
      'casado',
      'CPF 884.112.200-52',
      'residente e domiciliada a Av. paulista',
      '1400',
      'bairro Consolação',
      'São Paulo.'
    ]
    const person = new Person(properties)
    const expected = {
      name: 'Arya Robbin',
      citizenship: 'Belga',
      maritalStatus: 'Casado',
      cpf: '88411220052',
      street: 'Av. paulista',
      streetNumber: '1400',
      district: 'Consolação',
      country: 'São Paulo'
    }
    expect(expected).toEqual(person)
  })
})
