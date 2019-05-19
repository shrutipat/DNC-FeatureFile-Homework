package com.demo.nopcommerce.pageobject;

import com.demo.nopcommerce.utility.Util;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class ComputersPage extends Util {
    @FindBy(xpath = "//h1[contains(text(), 'Computers')]")
    WebElement _computersText;

    private static final Logger log = LogManager.getLogger(HomePage.class.getName());

    public String getComputersPageText(){
        log.info("Get computers page text");
        return getTextFromElement(_computersText);
    }

    public boolean verifyThatUserIsOnComputers(){
        log.info("Verify that user is on computers page");
        if(getComputersPageText().equals("Computers")){
            return true;
        }
        else{
            return false;
        }
    }
}
