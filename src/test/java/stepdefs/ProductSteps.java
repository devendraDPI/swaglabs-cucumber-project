package stepdefs;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Then;

public class ProductSteps {
	WebDriver driver = Baseclass.driver;
	
	@And("^User adds a product to the cart \"([^\"]*)\"$")
	public void user_adds_a_product_to_the_cart_something(String Product) throws Throwable {
		
		WebElement Product_adds = driver.findElement(By.xpath("//div[@class='inventory_item_name' and text()='" + Product + "']/following::button[1]"));
		Product_adds.click();  

	}

	@Then("^User see product is added to the cart$")
	public void user_see_product_is_added_to_the_cart() throws Throwable {
		
		WebElement cart_verification = driver.findElement(By.xpath("//*[@class='shopping_cart_badge']"));
		Assert.assertEquals("1", cart_verification.getText());
	}

}