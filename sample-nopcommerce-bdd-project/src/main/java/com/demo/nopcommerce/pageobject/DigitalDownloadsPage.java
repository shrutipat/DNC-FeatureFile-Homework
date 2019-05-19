package com.demo.nopcommerce.pageobject;

import com.demo.nopcommerce.utility.Util;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class DigitalDownloadsPage extends Util {

    @FindBy (xpath = "//h1[contains(text(), 'Digital downloads')]")
    WebElement _digitalDownloadsText;

    private static final Logger log = LogManager.getLogger(HomePage.class.getName());

    public String getDigitalDownloadsPageText(){
        log.info("Get digital downloads page text");
        return getTextFromElement(_digitalDownloadsText);
    }

    public boolean verifyThatUserIsOnDigitalDownloadsPage(){
        log.info("Verify that user is on digital download page");
        if(getDigitalDownloadsPageText().equals("Digital downloads")){
            return true;
        }
        else{
            return false;
        }
    }
}
