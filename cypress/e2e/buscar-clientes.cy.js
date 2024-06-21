// A linha 2 serve para o cypress reconhecer os comandos
/// <reference types="cypress"/> 
require('dotenv').config();
let UrlBase = process.env.BaseUrl

describe('Buscar clientes', () =>{
    
    it('Buscar todos os clientes', () => {
        cy.request({
            method: 'GET',
            url: `${UrlBase}/api/clientes`
        }).then((resultado) => {
            expect(resultado.status).to.eql(200)
            
        })
    })

    it('Buscar cliente por id', () => {
        cy.request({
            method: 'GET',
            url: `${UrlBase}/api/clientes/1`
        }).then((resultado) => {
            expect(resultado.status).to.eql(200)
            expect(resultado.body.data.id).to.eql(1)
            expect(resultado.body.data.attributes.Nome).to.equals("Teste")
            expect(resultado.body.data.attributes).to.haveOwnProperty("Nome")
            expect(resultado.body.data.attributes).to.haveOwnProperty("Nascimento")
            expect(resultado.body.data.attributes).to.haveOwnProperty("CPF")
        })
    })


})