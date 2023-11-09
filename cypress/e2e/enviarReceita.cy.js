describe('Feature Cotar', () => {

  beforeEach(() => {
    cy.visit('/')
  })

  it('Enviar receita com sucesso', () => {
    cy.enviarReceitaSucesso()
  })

  it('Enviar receita com falha', () => {
    cy.enviarReceitaFalha()
  })
})