package myshyk.stepDefinitions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import myshyk.pages.PorschMainPage;
import myshyk.utilities.BrowserUtilities;
import myshyk.utilities.Configuration;
import myshyk.utilities.Driver;
import org.junit.Assert;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;

public class PorscheStepDef {
    WebDriver driver = Driver.getDriver();
    PorschMainPage porschMainPage = new PorschMainPage();
    JavascriptExecutor jsEx = (JavascriptExecutor)driver;

    @Given("^User is on porsche main page$")
    public void user_is_on_porsche_main_page() throws Throwable {
    driver.get(Configuration.getProperty("porscheUrl"));
    }

    @When("^User selects 718 and chooses Cayman$")
    public void user_selects_and_chooses_Cayman() throws Throwable {
        porschMainPage.choose718.click();
        porschMainPage.chooseCayman718.click();
        BrowserUtilities.switchToWindow("Porsche Car Configurator");
        porschMainPage.expandButton.click();

    }

    @Then("^User gets 718 Cayman equipment price ,handling fee price , base price  and sum price$")
    public void user_gets_Cayman_equipment_price_handling_fee_price_base_price_and_sum_price() throws Throwable {

        String actualTotal$ = porschMainPage.total$.getText();
        System.out.printf("actual total price is %s%n", actualTotal$);
        String expectedTotalPrice = "$58,150";
        Assert.assertEquals(expectedTotalPrice,actualTotal$);

        String actualBase$ = porschMainPage.basePrice.getText();
        System.out.printf("actual Base price is %s%n", actualBase$);
        String expectedBasePrice ="$56,900";
        Assert.assertEquals(expectedBasePrice,actualBase$);

        String actualHandlingFee$ = porschMainPage.handlingFee$.getText();
        System.out.printf("actual handling fee is: %s%n", actualHandlingFee$);
        String expectedHandlingPrice ="$1,250";
        Assert.assertEquals(expectedHandlingPrice,actualHandlingFee$);

        String actualEquipment$ = porschMainPage.equipmentPrice.getText();
        System.out.printf("actual equipment price is %s%n", actualEquipment$);
        String expectedEquipmentPrice = "$0";
        Assert.assertEquals(expectedEquipmentPrice,actualEquipment$);


    }

    @Then("^selects Miami Blue color$")
    public void selects_Miami_Blue_color() throws Throwable {
        porschMainPage.miamiBlue.click();

    }

    @Then("^Selects 20 Carrera Sport Wheels$")
    public void selects_Carrera_Sport_Wheels() throws Throwable {
        porschMainPage.carrera20Wheel.click();




    }

    @Then("^Selects seats ‘Power Sport Seats \\(14-way\\) with Memory Package$")
    public void selects_seats_Power_Sport_Seats_way_with_Memory_Package() throws Throwable {
        Thread.sleep(2000);
        jsEx.executeScript("window.scrollBy(0,1500)");
      porschMainPage.choseSeat.click();
        Thread.sleep(4000);


    }


    @Then("^Clicks on Interior Carbon Fiber and Selects Interior Trim in Carbon Fiber i\\.c\\.w\\. Standard Interior$")
    public void clicks_on_Interior_Carbon_Fiber_and_Selects_Interior_Trim_in_Carbon_Fiber_i_c_w_Standard_Interior() throws Throwable {

        jsEx.executeScript("scroll(0,2800)");
        Thread.sleep(2000);
        porschMainPage.interiorFiber.click();
        Thread.sleep(2000);
        porschMainPage.interiorStandart.click();
        Thread.sleep(2000);


    }
    @Then("^Clicks on Performance and Selects 7-speed Porsche Doppelkupplung \\(PDK\\) and Select Porsche Ceramic Composite Brakes \\(PCCB\\)$")
    public void clicks_on_Performance_and_Selects_speed_Porsche_Doppelkupplung_PDK_and_Select_Porsche_Ceramic_Composite_Brakes_PCCB() throws Throwable {
        jsEx.executeScript("scroll(0,2400)");
        Thread.sleep(2000);
        porschMainPage.performance.click();
        Thread.sleep(2000);
        porschMainPage.speed7.click();
        Thread.sleep(2000);
        jsEx.executeScript("scroll(0,3000)");
        Thread.sleep(2000);
        porschMainPage.ceramicComposit.click();
        Thread.sleep(10000);

    }



    @Then("^Verify that total price is the sum of base price added Price for Equipment added Delivery, Processing and Handling Fee$")
    public void verify_that_total_price_is_the_sum_of_base_price_added_Price_for_Equipment_added_Delivery_Processing_and_Handling_Fee() throws Throwable {
     String expectedGrandTotal ="$78,970";
     String expectedGrandBasePrice ="$56,900";
     String expectedGrandHandlingFee="$1,250";
     String expectedGrandEquipment ="$20,820";

     String actualGrandTotal = porschMainPage.total$.getText();
     String actualGrandBasePrice =porschMainPage.basePrice.getText();
     String actualGrandHandlingFee$ =porschMainPage.handlingFee$.getText();
     String actualGrandEquipment$ = porschMainPage.equipmentPrice.getText();
     Assert.assertEquals(expectedGrandTotal,actualGrandTotal);
     Assert.assertEquals(expectedGrandBasePrice,actualGrandBasePrice);
     Assert.assertEquals(expectedGrandHandlingFee,actualGrandHandlingFee$);
     Assert.assertEquals(expectedGrandEquipment,actualGrandEquipment$);
        System.out.printf("actual total grand is: %s%n",actualGrandTotal );


    }





}
