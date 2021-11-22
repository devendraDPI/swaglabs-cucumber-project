@LoginFeature
Feature: Login Feature

  Background: 
    Given User has Launched Swag Lab Application

  Scenario Outline: Possitive Login
    When User Enters Username "<Username>"
    And User Enter Password "<Password>"
    And User Clicks on Login Button
    Then User Should be on Products Page

    Examples: 
      | Username      | Password     |
      | standard_user | secret_sauce |

  Scenario Outline: Negative Login
    When User Enters Username "<Username>"
    And User Enter Password "<Password>"
    And User Clicks on Login Button
    Then User Should Get "<Error>"

    Examples: 
      | Username      | Password      | Error                                                                     |
      | standard_user | secret_sauces | Epic sadface: Username and password do not match any user in this service |
