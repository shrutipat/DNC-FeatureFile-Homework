package com.demo.nopcommerce.pageobject;

import com.demo.nopcommerce.utility.Util;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class RegistrationPage extends Util {

    @FindBy (xpath = "//strong[text()='Your Personal Details']")
    WebElement _registrationText;

    public String getRegistrationPageText(){
        return getTextFromElement(_registrationText);
    }

   public boolean verifyThatUserIsOnRegistrationPage(){
       if(getRegistrationPageText().equals("Your Personal Details")){
           return true;
       }
       else{
           return false;
       }
   }
}
