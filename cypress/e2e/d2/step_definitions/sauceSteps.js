import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import Saucedemo from "../../pages/Saucedemo/Saucedemo";

const saucedemo = new Saucedemo();

Given("I open www.saucedemo.com", () => {
    cy.visit("https://www.saucedemo.com/");
    cy.get('.login_logo').should('contain', 'Swag Labs')
});

When("I login with valid credentials", () => {
    saucedemo.loginWithCredentials();
});

When('I want to see Products header', () => {
    saucedemo.reviewHeader();
})

When('I want to login but something gone wrong', () => {
    saucedemo.loginWithBadCredentials();
})

When('Error message is displayed', () => {
    saucedemo.hasErrorMessage();
})