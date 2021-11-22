$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/Login.feature");
formatter.feature({
  "name": "Login Feature",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@LoginFeature"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Possitive Login",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User Enters Username \"\u003cUsername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User Enter Password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User Clicks on Login Button",
  "keyword": "And "
});
formatter.step({
  "name": "User Should be on Products Page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Username",
        "Password"
      ]
    },
    {
      "cells": [
        "standard_user",
        "secret_sauce"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User has Launched Swag Lab Application",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.user_opened_swag_lab_application()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Possitive Login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@LoginFeature"
    }
  ]
});
formatter.step({
  "name": "User Enters Username \"standard_user\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.user_enters_username_something(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Enter Password \"secret_sauce\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.user_enter_password_something(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Clicks on Login Button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Should be on Products Page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.user_should_be_on_the_products_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Negative Login",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User Enters Username \"\u003cUsername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User Enter Password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User Clicks on Login Button",
  "keyword": "And "
});
formatter.step({
  "name": "User Should Get \"\u003cError\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Username",
        "Password",
        "Error"
      ]
    },
    {
      "cells": [
        "standard_user",
        "secret_sauces",
        "Epic sadface: Username and password do not match any user in this service"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User has Launched Swag Lab Application",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.user_opened_swag_lab_application()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Negative Login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@LoginFeature"
    }
  ]
});
formatter.step({
  "name": "User Enters Username \"standard_user\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.user_enters_username_something(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Enter Password \"secret_sauces\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.user_enter_password_something(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Clicks on Login Button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Should Get \"Epic sadface: Username and password do not match any user in this service\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.user_should_get_something(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/java/features/Product.feature");
formatter.feature({
  "name": "Product Add",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Product"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Product Add to cart",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User has Launched Swag Lab Application",
  "keyword": "Given "
});
formatter.step({
  "name": "User Enters Username \"\u003cUsername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User Enter Password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User Clicks on Login Button",
  "keyword": "And "
});
formatter.step({
  "name": "User adds a product to the cart \"\u003cProduct\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User see product is added to the cart",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Username",
        "Password",
        "Product"
      ]
    },
    {
      "cells": [
        "standard_user",
        "secret_sauce",
        "Sauce Labs Backpack"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Product Add to cart",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Product"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User has Launched Swag Lab Application",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.user_opened_swag_lab_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Enters Username \"standard_user\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.user_enters_username_something(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Enter Password \"secret_sauce\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.user_enter_password_something(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Clicks on Login Button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User adds a product to the cart \"Sauce Labs Backpack\"",
  "keyword": "And "
});
formatter.match({
  "location": "ProductSteps.user_adds_a_product_to_the_cart_something(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see product is added to the cart",
  "keyword": "Then "
});
formatter.match({
  "location": "ProductSteps.user_see_product_is_added_to_the_cart()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});