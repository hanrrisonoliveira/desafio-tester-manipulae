## Teste manual

Este documento tem como objetivo descrever os cenários de testes realizados manualmente no site [Cotar](https://webmani-test.manipulae.com.br/cotar) de acordo com as regras de negócio citadas neste documento.

## Procedimento de execução do teste

    1. Abrir a página de cotação de receitas
    2. Seguir os cenários do caso de teste

## Cenários de testes de acordo com as regras de negócio

### RN1 - Os seguintes campos são obrigatórios: Receita, CEP, Email, Nome, Celular.

**CT01 - Validar campos obrigatórios sem enviar uma receita**

**Dado** que estou na página de cotação de receitas

**Quando** preencher os campos obrigatórios com dados válidos (Receita, CEP, Email, Nome, Celular) sem enviar uma receita

**Então** é exibido a mensagem "Envie pelo menos uma receita"

**CT02 - Validar campos obrigatórios, enviando uma receita**

**Dado** que estou na página de cotação de receitas

**Quando** preencher os campos obrigatórios com dados válidos (Receita, CEP, Email, Nome, Celular) enviando uma receita

**Então** é exibido a mensagem "Receita enviada com sucesso!"

### RN2 - O campo nome tem as seguintes validações 1 - Obrigatório informar o nome e sobrenome. 2 - O nome informado precisa ter no mínimo 3 caracteres e o sobrenome tem que ter no mínimo 2 caracteres. 3 - Não é permitido o usuário informar caracteres especiais e números

**CT03 - Validar o campo Nome com sucesso**

**Dado** que estou na página de cotação de receitas

**Quando** preenchido o nome e sobrenome válidos

**Então** o campo é validado com sucesso

**CT04 - Validar o nome com 3 caracteres**

**Dado** que estou na página de cotação de receitas

**Quando** preenchido o nome com menos de 3 caracteres

**Então** é exibido a mensagem "Digite o primeiro nome com 3 dígitos."

**CT05 - Validar o sobrenome com 2 caracteres**

**Dado** que estou na página de cotação de receitas

**Quando** preenchido o sobrenome com menos de 2 caracteres

**Então** é exibido a mensagem "Digite o sobrenome completo sem abreviações."

**CT06 - Validar caracteres especiais/números no nome/sobrenome**

**Dado** que estou na página de cotação de receitas

**Quando** preenchido o nome e sobrenome com caracteres especiais/números

**Então** é exibido a mensagem "Não use caracteres especiais ou números."

### RN3 - O campo e-mail precisa ser um e-mail válido, ou seja, precisa ter um "@", precisa ter um ou mais caracteres antes e depois do "@", e depois do "@" precisar ter pelo menos um "." com caracteres antes e depois dele também.

**CT07 - Validar o e-mail com sucesso**

**Dado** que estou na página de cotação de receitas

**Quando** informado um e-mail válido

**Então** o campo E-mail é validado com sucesso

**CT08 - Validar se o e-mail tem um ou mais caracteres antes do "@"**

**Dado** que estou na página de cotação de receitas

**Quando** informado um e-mail que contém um ou mais caracteres antes do "@"

**Então**  o campo E-mail é validado com sucesso

**CT09 - Validar se o e-mail tem um ou mais caracteres depois do "@"**

**Dado** que estou na página de cotação de receitas

**Quando** informado um e-mail que contém um ou mais caracteres depois do "@"

**Então** o campo E-mail é validado com sucesso

**CT10 - Validar se o e-mail tem pelo menos um "." depois do "@" com caracteres antes e depois dele também**

**Dado** que estou na página de cotação de receitas

**Quando** informado um e-mail que contém pelo menos um "." depois do "@" com caracteres antes e depois dele também

**Então** o campo E-mail é validado com sucesso

### RN4 - O CEP deve ser um campo numérico e com 8 dígitos

**CT11 - Validar o CEP com sucesso**

**Dado** que estou na página de cotação de receita

**Quando** informado um CEP válido

**Então** o campo CEP é validado com sucesso

**CT12 - Informar o CEP com menos de 8 dígitos**

**Dado** que estou na página de cotação de receita

**Quando** informado um CEP com menos de 8 dígitos

**Então** é exibido a mensagem "insira 8 dígitos"

### RN5 - O CEP deve ser um número de CEP válido, ou seja, que possui um endereço nos principais sistemas de buscas (Correios, Google Maps)

**CT13 - Informar um CEP válido que seja exibido a região**

**Dado** que estou na página de cotação de receita

**Quando** informado um CEP válido nas bases dos "Correios", "Google Maps"

**Então** é exibido a região do CEP

## RN6 - O Celular deve ser um campo numérico com exatamente 11 dígitos

**CT14 - Validar o campo Celular com 11 dígitos**

**Dado** que estou na página de cotação de receita

**Quando** informado um celular válido

**Então** o campo Celular é validado com sucesso

**CT15 - Informar o campo Celular com menos de 11 dígitos**

**Dado** que estou na página de cotação de receita

**Quando** informado um celular com menos de 11 dígitos

**Então** é exibido a mensagem "Digite pelo menos 10 dígitos"

**CT16 - Informar o campo Celular com todos os dígitos iguais**

**Dado** que estou na página de cotação de receita

**Quando** informado um celular com  todos os dígitos iguais

**Então** é exibido a mensagem "Todos os números são iguais"

### RN7 - Não é permitido enviar duas vezes a mesma receita

**CT17 - Informar o campo Celular com todos os dígitos iguais**

**Dado** que estou na página de cotação de receita

**Quando** enviado a mesma receita mais de uma vezes

**Então** é exibido a mensagem "Não foi possível criar seu pedido. Uma ou mais receitas já foram enviadas anteriormente. Tente enviar uma receita diferente."