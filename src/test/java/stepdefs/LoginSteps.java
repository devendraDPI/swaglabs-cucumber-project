package stepdefs;

import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;


public class LoginSteps {

	WebDriver driver = Baseclass.driver;

	@Given("^User has Launched Swag Lab Application$")
	public void user_opened_swag_lab_application() throws Throwable {

		driver.get("https://www.saucedemo.com/");
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(20000, TimeUnit.MILLISECONDS);

	}

	@When("^User Enters Username \"([^\"]*)\"$")
	public void user_enters_username_something(String UsernameVal) throws Throwable {
		
		WebElement Username = driver.findElement(By.xpath("//input[@id='user-name']"));
		Username.sendKeys(UsernameVal);

	}

	@And("^User Enter Password \"([^\"]*)\"$")
	public void user_enter_password_something(String PasswordVal) throws Throwable {
		
		WebElement Password = driver.findElement(By.xpath("//input[@id='password']"));
		Password.sendKeys(PasswordVal);
	}


	@And("^User Clicks on Login Button$")
	public void clicks_on_login_button() throws Throwable {

		WebElement LoginButton = driver.findElement(By.xpath("//input[@id='login-button']"));
		LoginButton.click();

	}

	@Then("^User Should be on Products Page$")
	public void user_should_be_on_the_products_page() throws Throwable {
		
		WebElement check_status = driver.findElement(By.xpath("//span[text()='Products']"));
		String Expected = "PRODUCTS";
		Assert.assertEquals(Expected, check_status.getText());
		
	}

	@Then("^User Should Get \"([^\"]*)\"$")
	public void user_should_get_something(String error) throws Throwable {
		
		WebElement Error = driver.findElement(By.xpath("//h3[starts-with(text(),'Epic sadface: Username and password')]"));
		Assert.assertEquals(error, Error.getText());
		
	}

}