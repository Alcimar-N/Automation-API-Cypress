// A linha 2 serve para o cypress reconhecer os comandos
/// <reference types="cypress"/> 

describe('Cadastrar clientes', () =>{
    let token

    before(() =>{
        cy.request({
            method: 'POST',
            url: 'https://api.restful-api.dev/login',
            body:{
                "email": '',
                "senha": ''
            }
        }).then((resultado) => {
            token = resultado.body.token //paga o token retornado no body e armazanda na varável da linha 5
        })
    })

    it('Buscar todos os clientes', () => {
        cy.request({
            method: 'POST',
            url: 'https://api.restful-api.dev/objects',
            body: {
            
                "name": "Teste Cypress",
                "data": {
                  "year": 2024,
                  "price": 100,
                  "CPU model": "Testando cypress core I7",
                  "Hard disk size": "128 GB"
                }
            },
            headers:{
                'Authorization': `Bearer ${token}` //usa o token armazenada na variável
            }

        }).then((resultado) => {
            expect(resultado.status).to.eql(200)
            expect(resultado.body.id).to.not.empty
            expect(resultado.body.name).to.eql('Teste Cypress')
        })
    })


})