Feature: Login feature
  As a user I want to login into nopecommerce website

  @LoginPageNavigation
  Scenario: User should navigate to login page successfully
    Given I am on home page
    When I click on login link
    Then I should navigate to login page successfully

  @ValidLogin
  Scenario: User should login successfully with valid credentials
    Given I am on home page
    When I click on login link
    And I enter email address "unknown@india.com" into email field
    And I enter password "unknown" into password field
    And I click on login button
    Then I should successfully login to my account

  @InvalidLogin
  Scenario Outline: User should not login successfully with invalid credentials
    Given I am on home page
    When I click on login link
    And I enter email address "<email>" into email field
    And I enter password "<password>" into password field
    And I click on login button
    Then I should not successfully login to my account

    Examples:
      | email             | password |
      | unknown@india.com | Prime123 |
      | abc153@yahoo.com  | unknown  |
      | xyz123@yahoo.com  | abcxyz10 |

  @PageNavigation
  Scenario Outline: User should navigate to different pages successfully
    Given I am on home page
    When I click on "<Options>"
    Then I should navigate to "<Options>" page successfully

    Examples:
      | Options           |
      | Registration      |
      | Computers         |
      | Electronics       |
      | Apparel           |
      | Digital downloads |
      | Books             |
      | Jewellery         |
      | Gift Cards        |