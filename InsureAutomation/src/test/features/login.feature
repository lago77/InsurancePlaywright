Feature: User Login

    Background:
        Given User navigates to the application
        And User clicks on the login link

    Scenario: Successful Login
    And User enters a username "omar"
    And User enters a password "password123"
    When User clicks on the login button
    Then User should see their dashboard
