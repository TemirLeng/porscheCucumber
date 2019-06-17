package kyial.pages;

import kyial.utilities.Driver;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class HomepagePorsche {
    WebDriver driver;
    public HomepagePorsche() {
        this.driver = Driver.getDriver();
        PageFactory.initElements(driver, this);
    }
    @FindBy(xpath = "//img[@alt='Porsche - 718']")
    public WebElement porsche718;

    @FindBy(xpath = "//img[@alt='Porsche 718 Cayman']")
    public WebElement cayman718;

    @FindBy(xpath = "//li[@id='s_exterieur_x_FJ5']/span")
    public WebElement miamiBlue;

    @FindBy(xpath = "//li[@id='s_exterieur_x_MXRD']//span[@class='img-element']")
    public WebElement carreraWheel;

    @FindBy(id="s_interieur_x_PP06")
    public WebElement seat;

    @FindBy(id="IIC_subHdl")
    public WebElement carbon;

    @FindBy(id="IMG_subHdl")
    public WebElement performance;

    @FindBy(id="vs_table_IMG_x_M250_x_c11_M250")
    public WebElement pdd;

    @FindBy(id="vs_table_IIC_x_PEKH_x_c01_PEKH")
    public WebElement standardInterior;

    @FindBy(id="vs_table_IMG_x_M450_x_c81_M450")
    public WebElement pccb;

    @FindBy(xpath = "/html//section[@id='s_iccCca']/div[@class='table']/div[1]/div[@class='cca-price']")
    public WebElement totalPrice;

    @FindBy(xpath = "/html//section[@id='s_iccCca']//div[@class='row']/div[@class='cca-label']/span[@class='expandButton']")
    public WebElement dropDown;

    @FindBy(xpath = "//div[@class='row additional']//div[@class='cca-price']")
    public WebElement basePrice;

    @FindBy(xpath = "//div[@class='row']//div[@class='cca-price']")
    public WebElement equpmentPrice;

    @FindBy(xpath = "//section[@id='s_iccCca']//div[1]//div[3]//div[@class='cca-price']")
    public WebElement deliverFee;


}



