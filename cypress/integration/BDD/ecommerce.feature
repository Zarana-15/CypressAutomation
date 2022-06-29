Feature: E2E ecommerce validation

    application regression

    @Regression
    Scenario: Ecommerce products delivery
    Given I open ecommerce page
    When I add items to cart
    And validate total prices
    Then select the country submit and verify thankyou

    @Smoke
    Scenario: Filling the form to shop
    Given I open ecommerce page
    When I fill the form details
    |name |gender |
    |Dheer |Male |
    Then validate form behavior
    And select the shop page



    