/// <reference types="cypress"/>

describe('Test plugin', function () {

    it('Request tests', function () {
        cy.request('https://jsonplaceholder.typicode.com/todos').its('body').then((body) => {
            cy.log(body)

            expect(body).to.have.property('completed')
            expect(body).have.property('userId').and.equal(1)

        })
    })

    it('Ping tests', function () {
        cy.ping('127.0.0.1').should('equal', 0)
    })
})