Feature: I want to test sauce demo page
  Scenario: Login with success
      Given I open www.saucedemo.com
      When I login with valid credentials
      Then I want to see Products header

  Scenario: Login without success
    Given I open www.saucedemo.com
    When I want to login but something gone wrong
    Then Error message is displayed