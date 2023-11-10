Cypress.Commands.add('enviarReceitaSucesso', receitaSucesso => {
    cy.get('label[for=file-uploader]').selectFile('cypress/fixtures/receita.png')
    cy.get('input[name=zip]').type('13231090')
    cy.get('input[type=email]').type(receitaSucesso.email)
    cy.get('input[name=name]').type(receitaSucesso.nome)
    cy.get('input[type=tel]').type(receitaSucesso.celular)
    cy.get('input[type=checkbox]').check({force: true})
    cy.get('button[type=submit]').contains('Enviar Receita').click()
    cy.contains('h2', 'Receita enviadacom sucesso!')
})

Cypress.Commands.add('enviarReceitaFalha', receitaFalha => {
    cy.get('label[for=file-uploader]').selectFile('cypress/fixtures/receita2.jpg')
    cy.get('input[name=zip]').type('69982-000')
    cy.get('input[type=email]').type(receitaFalha.email)
    cy.get('input[name=name]').type(receitaFalha.nome)
    cy.get('input[type=tel]').type(receitaFalha.celular)
    cy.get('input[type=checkbox]').check({force: true})
    cy.get('button[type=submit]').contains('Enviar Receita').click()
    cy.contains('h2', 'Que pena. Ainda não atendemos sua região.')
})

Cypress.Commands.add('uploadImagemErro', () => {
    cy.origin('https://manipulaecombr-my.sharepoint.com', () => {
    cy.visit('/:f:/g/personal/matheus_marinho_manipulae_com_br/Eklx5HErM45OsGgxOLHB3Q0BxZZSzVBzW0FvUKY0EoVajQ?e=XyoPxV')
    cy.get('button[data-automationid=uploadCommand]').click()
    cy.get('button[data-automationid=uploadFileCommand]').selectFile('cypress/screenshots/enviarReceita.cy.js/teste.png')    
  })
})