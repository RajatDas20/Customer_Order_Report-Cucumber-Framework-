package TestRunner;


import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)

@CucumberOptions(

		features = "src/test/java/Features", glue = { "StepDefinition", "Hooks" }, tags = { "@CustomerOrderReport" },
		// dryRun = true,
		monochrome = true, plugin = { "pretty", "html:reports/cucumber-html-reports/Elearning",
				"json:reports/cucumber-json-reports/Elearning.json",
				"junit:reports/cucumber-xml-reports/Elearning.xml" }

)

public class TestRunner {

}
