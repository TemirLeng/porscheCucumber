package ulan.Pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import ulan.utilities.Driver;

public class PorscheHomePage {
    WebDriver driver ;
    public PorscheHomePage(){
            driver=Driver.getDriver();
        PageFactory.initElements(driver,this);
    }

    @FindBy(xpath = "/html/body/div[1]/div[5]/div[@class='b-standard-module-wrapper']/div[@class='b-teaser-wrapper']/a[@href='/usa/modelstart/all/?modelrange=718']//img[@alt='Porsche - 718']")
    public WebElement selectcayman718;

    @FindBy(css = "[data-model-id='0'] nobr")
    public WebElement cayman718;

    @FindBy(xpath = "//li[@id='s_exterieur_x_FJ5']/span")
    public WebElement MiamiBlue;

    @FindBy(xpath = "//li[@id='s_exterieur_x_MXRD']//span[@class='img-element']")
    public WebElement carreraWheel;

    @FindBy(id = "s_interieur_x_73_x_PP06_x_shorttext")
    public WebElement Seat;

    @FindBy(css = "#IIC_subHdl")
    public WebElement carbonFiberclick;

    @FindBy(xpath = "//div[@id='vs_table_IIC_x_PEKH']/span[@class='checkbox']")
    public WebElement carbonFiber;

    @FindBy(xpath = "/html//div[@id='IMG_subHdl']")
    public WebElement performance;

    @FindBy(xpath = "//section[@id='vs_table_IMG']/div[2]/span[@class='radiobutton']")
    public WebElement PDK;

    @FindBy(xpath = "//section[@id='vs_table_IMG']/div[9]/span[@class='checkbox']")
    public WebElement PCCB;

    @FindBy(xpath = "/html//section[@id='s_iccCca']/div[@class='table']/div[1]/div[@class='cca-price']")
    public WebElement totalPrice;

    @FindBy(xpath = "/html//section[@id='s_iccCca']//div[@class='row']/div[@class='cca-label']/span[@class='expandButton']")
    public WebElement dropDown;

    @FindBy(xpath = "/html//section[@id='s_iccCca']/div[@class='table']/div[2]/div[@class='cca-price']")
    public WebElement basePrice;

    @FindBy(xpath = "/html//section[@id='s_iccCca']/div[@class='table']/div[3]/div[@class='cca-price']")
    public WebElement equpmentPrice;

    @FindBy(xpath = "/html//section[@id='s_iccCca']//div[@class='row']/div[@class='cca-price']")
    public WebElement deliverFee;


}



