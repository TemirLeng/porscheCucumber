package kyial.steps;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import kyial.pages.HomepagePorsche;
import kyial.utilities.BrowserUtilities;
import kyial.utilities.Configuration;
import kyial.utilities.Driver;
import org.junit.Assert;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;


public class PorscheSteps {
    WebDriver driver= Driver.getDriver();
    HomepagePorsche homepagePorsche=new HomepagePorsche();
    JavascriptExecutor js = (JavascriptExecutor) driver;

    @Given("^User is on Porsche Webpage$")
    public void user_is_on_Porsche_Webpage() throws Throwable {
        driver.get(Configuration.getProperty("porscheUrl"));
    }

    @Then("^User selects (\\d+) model$")
    public void user_selects_model(int arg1) throws Throwable {
        homepagePorsche.porsche718.click();
        Thread.sleep(1000);
    }

    @Then("^User clicks (\\d+) Cayman$")
    public void user_clicks_Cayman(int arg1) throws Throwable {
        homepagePorsche.cayman718.click();
        Thread.sleep(2000);
        BrowserUtilities.switchToWindow("Porsche Car Configurator");

    }

    @Then("^User selects Miami Blue color$")
    public void user_selects_Miami_Blue_color() throws Throwable {
        js.executeScript("window.scrollBy(0,300)");
        WebDriverWait wait = new WebDriverWait(driver, 20);
        wait.until(ExpectedConditions.visibilityOf(homepagePorsche.miamiBlue));

        Thread.sleep(5000);
        homepagePorsche.miamiBlue.click();
        Thread.sleep(2000);


    }

    @Then("^User selects (\\d+) Carrera Sport Wheels$")
    public void user_selects_Carrera_Sport_Wheels(int arg1) throws Throwable {
        js.executeScript("window.scrollBy(0,300)");
        WebDriverWait wait = new WebDriverWait(driver, 20);
        wait.until(ExpectedConditions.visibilityOf(homepagePorsche.miamiBlue));

        Thread.sleep(5000);
        homepagePorsche.carreraWheel.click();
        Thread.sleep(2000);

    }

    @Then("^User selects Power Sport Seats \\((\\d+)-way\\) with Memory Package$")
    public void user_selects_Power_Sport_Seats_way_with_Memory_Package(int arg1) throws Throwable {
        js.executeScript("window.scrollBy(0,1300)");
        Thread.sleep(2000);
        homepagePorsche.seat.click();
    }

    @When("^User clicks on Interior Carbon Fiber section$")
    public void user_clicks_on_Interior_Carbon_Fiber_section() throws Throwable {
        js.executeScript("scroll(0, 2700);");
        Thread.sleep(1000);
        homepagePorsche.carbon.click();
    }

    @When("^User selects Interior Trim in Carbon Fiber i\\.c\\.w\\. Standard Interior$")
    public void user_selects_Interior_Trim_in_Carbon_Fiber_i_c_w_Standard_Interior() throws Throwable {
        homepagePorsche.standardInterior.click();
    }

    @When("^User clicks on performance section$")
    public void user_clicks_on_performance_section() throws Throwable {
        js.executeScript("scroll(0, 2400);");
        Thread.sleep(1000);
        homepagePorsche.performance.click();
    }

    @When("^User selects (\\d+)-speed Porsche Doppelkupplung \\(PDK\\)$")
    public void user_selects_speed_Porsche_Doppelkupplung_PDK(int arg1) throws Throwable {
        homepagePorsche.pdd.click();
    }

    @When("^User selects Porsche Ceramic Composite Brakes \\(PCCB\\)$")
    public void user_selects_Porsche_Ceramic_Composite_Brakes_PCCB() throws Throwable {
        js.executeScript("scroll(0, 3150);");
        Thread.sleep(1000);
        homepagePorsche.pccb.click();
        Thread.sleep(2000);
    }

    @When("^User verifies actual and expected price$")
    public void user_verifies_actual_and_expected_price() throws Throwable {
        String strPrice=homepagePorsche.totalPrice.getText().substring(1).replace(",","");
        Integer totalPr=Integer.parseInt(strPrice);

        homepagePorsche.dropDown.click();

        String strBase=homepagePorsche.basePrice.getText().substring(1).replace(",","");
        Integer basePr=Integer.parseInt(strBase);
       // System.out.println(basePr+" base");

        String strEquip=homepagePorsche.equpmentPrice.getText().substring(1).replace(",","");
        Integer equipPr=Integer.parseInt(strEquip);
     //   System.out.println(equipPr+" equip");

        String strDeliver=homepagePorsche.deliverFee.getText().substring(1).replace(",","");
        Integer deliverPr=Integer.parseInt(strDeliver);
      //  System.out.println(deliverPr+" deliverP");

        Integer expectedPrice=basePr+equipPr+deliverPr;
        System.out.println(expectedPrice);
        Assert.assertEquals(expectedPrice, totalPr);
    }

}