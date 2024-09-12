
@runRegistration
Feature: User Registration

    Background:
        Given User navigates to the application
        Given User clicks on the Registration link

    Scenario: Successful Registration
    Given User enters an email "omar@gmail.com"
    Given User enters a name "omar"
    Given User enters a username "oabdi"
    Given User enters a password "password123"
    Then User clicks on the Register button
    Then The user should see a "Successful registration" message for a successful registration

    Scenario: Unsuccessful Registration - no username input
    Given User enters an email "omar@gmail.com"
    Given User enters a name "omar"
    Given User enters a password "password123"
    Then User clicks on the Register button
    Then The user should see a "Unsuccessful registration" message for an unsuccessful registration
