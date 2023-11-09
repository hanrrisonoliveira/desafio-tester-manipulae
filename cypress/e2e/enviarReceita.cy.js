import { fakerPT_BR } from '@faker-js/faker'
import { faker } from '@faker-js/faker/locale/pt_BR'

describe('Feature Cotar', () => {

  beforeEach(() => {
    cy.visit('/')
  })

  it('Enviar receita com sucesso', () => {
    const receitaSucesso = {
      email: faker.internet.email(),
      nome: faker.person.firstName() + " " + faker.person.middleName(),
      celular: faker.phone.number('## 9####-####')
    }

    cy.enviarReceitaSucesso(receitaSucesso)
  })

  it('Enviar receita com falha', () => {
    const receitaFalha = {
      email: faker.internet.email(),
      nome: faker.person.firstName() + " " + faker.person.middleName(),
      celular: faker.phone.number('## 9####-####')
    }
    
    cy.enviarReceitaFalha(receitaFalha)
  })
})