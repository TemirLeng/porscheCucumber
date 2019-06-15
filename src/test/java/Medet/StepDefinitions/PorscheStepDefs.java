package Medet.StepDefinitions;

import Medet.Pages.PorschePages;
import Medet.Utilities.BrowserUtilities;
import Medet.Utilities.Configurations;
import Medet.Utilities.Driver;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;

public class PorscheStepDefs {

    WebDriver driver = Driver.getDriver();
    PorschePages porschePages = new PorschePages();
    JavascriptExecutor jse = (JavascriptExecutor) driver;

    @Given("^User is on Porsche CaymanPage$")
    public void user_is_on_Porsche_CaymanPage() throws Throwable {
        driver.get(Configurations.getProperty("porscheUrl"));
    }
    @Then("^user select model (\\d+)$")
    public void user_select_model(int model) throws Throwable {
        porschePages.selectcayman718.click();
        Thread.sleep(1000);
        porschePages.cayman718.click();
        BrowserUtilities.switchToWindow("Porsche Car Configurator");
    }

    @Then("^User select color \"([^\"]*)\"$")
    public void user_select_color(String arg1) throws Throwable {
        porschePages.MiamiBlue.click();
    }

    @Then("^User select Wheel \"([^\"]*)\" Carrera Sport Wheels\"$")
    public void user_select_Wheel_Carrera_Sport_Wheels(String arg1) throws Throwable {
        jse.executeScript("scroll(0, 400);");
        Thread.sleep(1000);
        porschePages.carreraWheel.click();
    }

    @Then("^User select seat \"([^\"]*)\"$")
    public void user_select_seat(String arg1) throws Throwable {
        jse.executeScript("scroll(0, 1800);");
        Thread.sleep(1000);
        porschePages.Seat.click();
    }

    @When("^User clicks on Interior Carbon Fiber$")
    public void user_clicks_on_Interior_Carbon_Fiber() throws Throwable {
        jse.executeScript("scroll(0, 2700);");
        Thread.sleep(1000);
        porschePages.carbonFiberclick.click();
    }

    @When("^User selects Interior Trim in Carbon Fiber i\\.c\\.w\\. Standard Interior$")
    public void user_selects_Interior_Trim_in_Carbon_Fiber_i_c_w_Standard_Interior() throws Throwable {
        porschePages.carbonFiber.click();
    }

    @When("^User clicks on Poerformance section$")
    public void user_clicks_on_Poerformance_section() throws Throwable {
        jse.executeScript("scroll(0, 2400);");
        Thread.sleep(1000);
        porschePages.performance.click();
    }

    @When("^User selects (\\d+)-speed Porsche Doppelkupplung \\(PDK\\)$")
    public void user_selects_speed_Porsche_Doppelkupplung_PDK(int arg1) throws Throwable {
        porschePages.PDK.click();
    }

    @When("^User selects Porsche Ceramic Composite Brakes \\(PCCB\\)$")
    public void user_selects_Porsche_Ceramic_Composite_Brakes_PCCB() throws Throwable {
        jse.executeScript("scroll(0, 3000);");
        Thread.sleep(1000);
        porschePages.PCCB.click();
    }

    @When("^User verifies actual and expected prices$")
    public void user_verifies_actual_and_expected_prices() throws Throwable {
        String a =porschePages.totalPrice.getText().substring(1).replace(",","");;
        Integer totalPrice=Integer.parseInt(a);
        porschePages.dropDown.click();
        String b =porschePages.basePrice.getText().substring(1).replace(",","");;
        Integer basePrice=Integer.parseInt(b);

        String c =porschePages.equpmentPrice.getText().substring(1).replace(",","");;
        Integer equpmentPrice=Integer.parseInt(c);

        String d = porschePages.deliverFee.getText().substring(1).replace(",","");;
        Integer deliveryFee=Integer.parseInt(d);

       Integer expectedTotalPrice=deliveryFee+equpmentPrice+basePrice;
        Assert.assertEquals(expectedTotalPrice,totalPrice);

    }


}
