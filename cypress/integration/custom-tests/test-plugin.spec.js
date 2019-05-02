/// <reference types="cypress"/>

describe('Custom tests', function () {

    it('Request tests', function () {

        // Checking basic structure of response object
        cy.request('https://www.google.com').then((response) => {
            cy.log(response)
            expect(response).to.have.property('status', 200)
            expect(response).to.have.property('body').and.not.be.empty
        })

        // Checking we got a JSON response from the below web API
        cy.request('https://jsonplaceholder.typicode.com/todos')
        .its('body')
        .should('be.an', 'array')
        .and('not.be.empty')

        // Checking that an individual object can be obtained from the web API
        cy.request('https://jsonplaceholder.typicode.com/todos/15')
        .its('body')
        .should('be.an', 'object')
        .and('have.property', 'id', 15)
    })

    context('Ping plugin tests', function () {
        
        // Testing our custom plugin
        it('Ping tests', function () {
            cy.ping('127.0.0.1').should('be.a', 'string').and('not.be.empty')
        })

        // Testing additional arguments
        it('Ping latency return', function () {
            cy.ping('127.0.0.1', true).should('equal', 0)
        })

    })
})
