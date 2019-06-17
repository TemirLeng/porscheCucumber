package myshyk.pages;

import myshyk.utilities.Driver;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class PorschMainPage {
    WebDriver driver;

    public PorschMainPage(){
        this.driver = Driver.getDriver();
        PageFactory.initElements(driver,this);
    }

    @FindBy (css = "img[title='Porsche - 718']")

    public WebElement choose718;


    @FindBy (css = "img[title='Porsche 718 Cayman']")

    public WebElement chooseCayman718;

    @FindBy (xpath = "//div[.='Total Price:*']/following-sibling::div")

    public WebElement total$;

    @FindBy (xpath = "//div[@class='row']/div/child::span")

    public WebElement expandButton;

    @FindBy (xpath = "//section[@id='s_iccCca']/div/div[2]/div[2]")

    public WebElement basePrice;

    @FindBy (xpath = "//section[@id='s_iccCca']//div[3]/div[2]")

    public WebElement handlingFee$;

    @FindBy (xpath = "//div[@class='row']/div[2]")
    public WebElement equipmentPrice;


    @FindBy (css = "li[id='s_exterieur_x_FJ5']")
    public WebElement miamiBlue;

    @FindBy(css = "li[id='s_exterieur_x_MXRD']")
    public WebElement carrera20Wheel;

    @FindBy (css = "span[id='s_interieur_x_PP06']")
    public WebElement choseSeat;

    @FindBy (css = "div[id='s_individual_x_IIC']")
    public WebElement interiorFiber;

    @FindBy (css = "span[id='vs_table_IIC_x_PEKH_x_c01_PEKH']")
    public WebElement interiorStandart;

    @FindBy (css = "div[id='s_individual_x_IMG']")
    public WebElement performance;

    @FindBy (css = "span[id='vs_table_IMG_x_M250_x_c11_M250']")
    public WebElement speed7;

    @FindBy (id = "vs_table_IMG_x_M450_x_c81_M450")
    public WebElement ceramicComposit;

}
