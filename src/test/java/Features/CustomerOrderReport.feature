Feature: Customer Order Report

  Background: Navigate to the Customer Order Report section
    Given User is in Retail Login page
    And User Enters "admin" and "Admin@123" as valid username and password
    When User click on Log in button
    And User navigates to the Customer Order Report section

  @CustomerOrderReport
  Scenario Outline: User wants some details about an order report
    Given User Enters "<Customer Name>"
    And Search for the Report
    Then The Report will show up in result section

    Examples: 
      | Customer Name |
      | Krishna Mohan |

  @CustomerOrderReport
  Scenario Outline: Change the Status of an existing order report
    Given User Enters "<Customer Name>"
    And Search for the Report
    When User clicks on edit button
    And Change the status from enabled to disable
    When User search the history by IP
    Then Checks for the change

    Examples: 
      | Customer Name |
      | Krishna Mohan |
