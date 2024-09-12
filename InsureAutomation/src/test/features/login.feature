@runLogin
Feature: User Login

    Background:
        Given User starts at the main page
        And User clicks on the login link

    Scenario: Successful Login
    And User enters their username "oabdi"
    And User enters their password "password123"
    When User clicks on the login button
    Then User should see their dashboard

    Scenario: Unsuccessful Login - non-existent username
    And User enters their username "oabdi2"
    And User enters their password "password123"
    When User clicks on the login button
    Then The user should see a "Invalid credentials or Non-existent user" message for an unsuccessful login