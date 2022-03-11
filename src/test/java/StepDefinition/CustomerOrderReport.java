package StepDefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class CustomerOrderReport {

	WebDriver driver = Hooks.HooksClass.driver;
	String Customer;
	String IP;
	String crntstatus;
	String chngstatus;

	@Given("User is in Retail Login page")
	public void user_is_in_Retail_Login_page() {
		try {

			driver.get("http://retailm1.upskills.in/admin");

		} catch (Exception e) {
			System.out.println(e);
		}

	}

	@Given("User Enters {string} and {string} as valid username and password")
	public void user_Enters_and_as_valid_username_and_password(String string, String string2) {

		try {

			driver.findElement(By.id("input-username")).sendKeys(string);
			driver.findElement(By.id("input-password")).sendKeys(string2);

			System.out.println("User Entered Username " + string);
			System.out.println("User Entered Password " + string2);

		} catch (Exception e) {
			System.out.println(e);
		}

	}

	@When("User click on Log in button")
	public void user_click_on_Log_in_button() {
		try {
			driver.findElement(By.xpath("//button[@type = 'submit']")).click();
		} catch (Exception e) {

		}

	}

	@Then("User navigates to the Customer Order Report section")
	public void user_navigates_to_the_Customer_Order_Report_section() throws InterruptedException {

		try {
			System.out.println("User in Homepage ->");

			driver.findElement(By.xpath("//li[@id = 'menu-report']")).click();
			Thread.sleep(1000);
			driver.findElement(By.xpath("(//*[text()='Customers'])[4]")).click();
			Thread.sleep(1000);
			driver.findElement(By.xpath("(//*[text()='Orders'])[4]")).click();
			Thread.sleep(1000);

		} catch (Exception e) {
			System.out.println(e);
		}

	}

	@Given("User Enters {string}")
	public void user_Enters(String string) throws InterruptedException {

		try {
			System.out.println("Customer Order Report ->");

			driver.findElement(By.xpath("//input[@id='input-customer']")).sendKeys(string);
			Customer = string;
			Thread.sleep(1000);

		} catch (Exception e) {
			System.out.println(e);
		}

	}

	@Given("Search for the Report")
	public void search_for_the_Report() throws InterruptedException {

		try {
			driver.findElement(By.xpath("//button[@id='button-filter']")).click();
			Thread.sleep(1000);

		} catch (Exception e) {
			System.out.println(e);
		}

	}

	@Then("The Report will show up in result section")
	public void the_Report_will_show_up_in_result_section() throws InterruptedException {

		try {
			System.out.println("Order report shows up ->");

			String Actual = driver
					.findElement(By
							.xpath("(//div[@class='table-responsive']/table/thead/following-sibling::tbody/tr/td)[1]"))
					.getText();
			String Expected = Customer;
			Assert.assertEquals(Expected, Actual);
			Thread.sleep(2000);

		} catch (Exception e) {
			System.out.println(e);
		}

	}

	@When("User clicks on edit button")
	public void user_clicks_on_edit_button() {

		try {
			driver.findElement(By.xpath("//a[@data-original-title='Edit']")).click();

			System.out.println("User is on the Order Report edit page ->");

		} catch (Exception e) {
			System.out.println(e);
		}

	}

	@When("Change the status from enabled to disable")
	public void change_the_status_from_enabled_to_disable() throws InterruptedException {

		try {
			WebElement obj = driver.findElement(By.xpath("//select[@id='input-status']"));
			crntstatus = obj.getText();
			Select chngstatus = new Select(obj);

			if (crntstatus == "Enabled") {
				chngstatus.selectByVisibleText("Disabled");
			}

			else {

				chngstatus.selectByVisibleText("Enabled");
				Thread.sleep(2000);

			}
			System.out.println("Status Changed ->");

			driver.findElement(By.xpath("//a[text()= 'IP Addresses']")).click();
			Thread.sleep(1000);
			IP = driver
					.findElement(
							By.xpath("(//div[@id='tab-ip']/div/div/table/thead/following-sibling::tbody/tr/td)[1]"))
					.getText();
			driver.findElement(By.xpath("//button[@form='form-customer']")).click();

			System.out.println("IP address is " + IP);

		} catch (Exception e) {
			System.out.println(e);
		}

	}

	@When("User search the history by IP")
	public void user_search_the_history_by_IP() throws InterruptedException {

		try {
			driver.findElement(By.xpath("//input[@id = 'input-ip']")).sendKeys(IP);
			driver.findElement(By.xpath("//button[@id = 'button-filter']")).click();
			Thread.sleep(1000);

			System.out.println("User searched by IP");

		} catch (Exception e) {
			System.out.println(e);
		}

	}

	@Then("Checks for the change")
	public void checks_for_the_change() throws InterruptedException {

		try {
			String actual = driver.findElement(By.xpath("//*[text()='" + IP + "']/parent::tr/td[5]")).getText();

			if (crntstatus == "Enabled") {
				String expected = "Disabled";
				Assert.assertEquals(expected, actual);
				Thread.sleep(2000);
			}

			else {

				String expected = "Enabled";
				Assert.assertEquals(expected, actual);
				Thread.sleep(2000);

			}

			System.out.println("Edit button is functioning");

		} catch (Exception e) {
			System.out.println(e);
		}

	}

}