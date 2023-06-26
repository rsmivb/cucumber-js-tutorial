Feature: Search in Google

  Scenario: Correctness of the results
    Given user opens a Google Search Page
    When user inputs a "<keyword>" on search bar
    When another when
      | word          | num |
      | Brazil        | 11  |
      | United States | 11  |
    Then user could see <results> the results found based on criteria

    Examples:
      | keyword        | results |
      | United Kingdom | 11      |
      | Brazil         | 11      |
      | Canada         | 11      |
