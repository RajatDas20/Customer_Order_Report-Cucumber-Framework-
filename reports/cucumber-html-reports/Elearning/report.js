$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/Features/CustomerOrderReport.feature");
formatter.feature({
  "name": "Customer Order Report",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "User wants some details about an order report",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@CustomerOrderReport"
    }
  ]
});
formatter.step({
  "name": "User Enters \"\u003cCustomer Name\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "Search for the Report",
  "keyword": "And "
});
formatter.step({
  "name": "The Report will show up in result section",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Customer Name"
      ]
    },
    {
      "cells": [
        "Krishna Mohan"
      ]
    }
  ]
});
formatter.background({
  "name": "Navigate to the Customer Order Report section",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is in Retail Login page",
  "keyword": "Given "
});
formatter.match({
  "location": "CustomerOrderReport.user_is_in_Retail_Login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Enters \"admin\" and \"Admin@123\" as valid username and password",
  "keyword": "And "
});
formatter.match({
  "location": "CustomerOrderReport.user_Enters_and_as_valid_username_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Log in button",
  "keyword": "When "
});
formatter.match({
  "location": "CustomerOrderReport.user_click_on_Log_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User navigates to the Customer Order Report section",
  "keyword": "And "
});
formatter.match({
  "location": "CustomerOrderReport.user_navigates_to_the_Customer_Order_Report_section()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User wants some details about an order report",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@CustomerOrderReport"
    }
  ]
});
formatter.step({
  "name": "User Enters \"Krishna Mohan\"",
  "keyword": "Given "
});
formatter.match({
  "location": "CustomerOrderReport.user_Enters(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Search for the Report",
  "keyword": "And "
});
formatter.match({
  "location": "CustomerOrderReport.search_for_the_Report()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The Report will show up in result section",
  "keyword": "Then "
});
formatter.match({
  "location": "CustomerOrderReport.the_Report_will_show_up_in_result_section()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Change the Status of an existing order report",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@CustomerOrderReport"
    }
  ]
});
formatter.step({
  "name": "User Enters \"\u003cCustomer Name\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "Search for the Report",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on edit button",
  "keyword": "When "
});
formatter.step({
  "name": "Change the status from enabled to disable",
  "keyword": "And "
});
formatter.step({
  "name": "User search the history by IP",
  "keyword": "When "
});
formatter.step({
  "name": "Checks for the change",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Customer Name"
      ]
    },
    {
      "cells": [
        "Krishna Mohan"
      ]
    }
  ]
});
formatter.background({
  "name": "Navigate to the Customer Order Report section",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is in Retail Login page",
  "keyword": "Given "
});
formatter.match({
  "location": "CustomerOrderReport.user_is_in_Retail_Login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Enters \"admin\" and \"Admin@123\" as valid username and password",
  "keyword": "And "
});
formatter.match({
  "location": "CustomerOrderReport.user_Enters_and_as_valid_username_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Log in button",
  "keyword": "When "
});
formatter.match({
  "location": "CustomerOrderReport.user_click_on_Log_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User navigates to the Customer Order Report section",
  "keyword": "And "
});
formatter.match({
  "location": "CustomerOrderReport.user_navigates_to_the_Customer_Order_Report_section()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Change the Status of an existing order report",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@CustomerOrderReport"
    }
  ]
});
formatter.step({
  "name": "User Enters \"Krishna Mohan\"",
  "keyword": "Given "
});
formatter.match({
  "location": "CustomerOrderReport.user_Enters(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Search for the Report",
  "keyword": "And "
});
formatter.match({
  "location": "CustomerOrderReport.search_for_the_Report()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on edit button",
  "keyword": "When "
});
formatter.match({
  "location": "CustomerOrderReport.user_clicks_on_edit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Change the status from enabled to disable",
  "keyword": "And "
});
formatter.match({
  "location": "CustomerOrderReport.change_the_status_from_enabled_to_disable()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User search the history by IP",
  "keyword": "When "
});
formatter.match({
  "location": "CustomerOrderReport.user_search_the_history_by_IP()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Checks for the change",
  "keyword": "Then "
});
formatter.match({
  "location": "CustomerOrderReport.checks_for_the_change()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});