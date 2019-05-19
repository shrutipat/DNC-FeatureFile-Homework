package com.demo.nopcommerce.pageobject;

import com.demo.nopcommerce.utility.Util;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class GiftCardsPage extends Util {
    @FindBy(xpath = "//h1[contains(text(), 'Gift Cards')]")
    WebElement _giftCardsText;

    private static final Logger log = LogManager.getLogger(HomePage.class.getName());

    public String getGiftCardsPageText(){
        log.info("Get gift cards page text");
        return getTextFromElement(_giftCardsText);
    }

    public boolean verifyThatUserIsOnGiftCardsPage(){
        log.info("Verify that user is on gifts cards page");
        if(getGiftCardsPageText().equals("Gift Cards")){
            return true;
        }
        else{
            return false;
        }
    }
}
