export default class Saucedemo {
    loginWithCredentials() {
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
    }

    loginWithBadCredentials() {
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('not valid password')
        cy.get('[data-test="login-button"]').click()
    }

    reviewHeader() {
        cy.get('.header_secondary_container').should('contain', 'Products')
    }

    hasErrorMessage() {
        cy.get('[data-test="error"]').should('contain', 'Epic sadface: Username and password do not match any user in this service')
    }
}