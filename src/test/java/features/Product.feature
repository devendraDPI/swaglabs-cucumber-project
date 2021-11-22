@Product
Feature: Product Add

  Scenario Outline: Product Add to cart
    Given User has Launched Swag Lab Application
    When User Enters Username "<Username>"
    And User Enter Password "<Password>"
    And User Clicks on Login Button
    And User adds a product to the cart "<Product>"
    Then User see product is added to the cart

    Examples: 
      | Username      | Password     | Product             |
      | standard_user | secret_sauce | Sauce Labs Backpack |