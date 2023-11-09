describe('Feature Cotar', () => {
  it('Enviar receita com sucesso', () => {
    cy.visit('/')

    cy.get('label[for=file-uploader]').selectFile('cypress/fixtures/receita.png')

    cy.get('input[name=zip]').type('13231090')
    cy.get('input[type=email]').type('hanrrison.dos@gmail.com')
    cy.get('input[name=name]').type('Hanrrisonsss Oliveira')
    cy.get('input[type=tel]').type('11975621174')
    cy.get('input[type=checkbox]').check({force: true})
    cy.get('button[type=submit]').contains('Enviar Receita').click()
  })
})