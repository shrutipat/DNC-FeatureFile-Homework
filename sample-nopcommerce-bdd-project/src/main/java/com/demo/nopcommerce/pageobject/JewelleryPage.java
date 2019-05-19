package com.demo.nopcommerce.pageobject;

import com.demo.nopcommerce.utility.Util;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class JewelleryPage extends Util {

    @FindBy(xpath = "//h1[contains(text(), 'Jewelry')]")
    WebElement _jewelleryText;

    private static final Logger log = LogManager.getLogger(HomePage.class.getName());

    public String getJewelleryPageText(){
        log.info("Get jewellery page text");
        return getTextFromElement(_jewelleryText);
    }

    public boolean verifyThatUserIsOnJewelleryPage(){
        log.info("Verify that user is on Jewellery Page");
        if(getJewelleryPageText().equals("Jewelry")){
            return true;
        }
        else{
            return false;
        }
    }


}
