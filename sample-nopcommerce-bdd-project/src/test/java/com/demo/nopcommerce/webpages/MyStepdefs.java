package com.demo.nopcommerce.webpages;

import com.demo.nopcommerce.pageobject.*;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class MyStepdefs {
    @Given("^I am on home page$")
    public void iAmOnHomePage() {
    }

    @When("^I click on login link$")
    public void iClickOnLoginLink() {
        new HomePage().clickOnLoginLink();
    }

    @Then("^I should navigate to login page successfully$")
    public void iShouldNavigateToLoginPageSuccessfully() {
        Assert.assertTrue(new LoginPage().verifyWelcomeText());
    }

    @And("^I enter email address \"([^\"]*)\" into email field$")
    public void iEnterEmailAddressIntoEmailField(String email)  {
        new LoginPage().enterEmail(email);
    }

    @And("^I enter password \"([^\"]*)\" into password field$")
    public void iEnterPasswordIntoPasswordField(String password)  {
        new LoginPage().enterPassword(password);
    }

    @Then("^I should successfully login to my account$")
    public void iShouldSuccessfullyLoginToMyAccount() {
        Assert.assertTrue(new LoginPage().verifyThatUserIsLoggedInSuccessfully());
    }

    @And("^I click on login button$")
    public void iClickOnLoginButton() {
        new LoginPage().clickLoginBtn();
    }

    @Then("^I should not successfully login to my account$")
    public void iShouldNotSuccessfullyLoginToMyAccount() {
        Assert.assertTrue(new LoginPage().verifyThatUserIsNotLoggedInSuccessfully());
    }


    @When("^I click on \"([^\"]*)\"$")
    public void iClickOn(String option){

        if (option.compareTo("Registration")==1){
            new HomePage().clickOnRegisterLink();
        }
        else if (option.compareTo("Computers")==1){
            new HomePage().clickOnComputers();
        }
        else if (option.compareTo("Electronics")==1){
            new HomePage().clickOnElectronics();
        }
        else if (option.compareTo("Apparel")==1){
            new HomePage().clickOnApparel();
        }
        else if (option.compareTo("Digital downloads")==1){
            new HomePage().clickOnDigitalDownloads();
        }
        else if (option.compareTo("Gift Cards")==1){
            new HomePage().clickOnGiftCards();
        }
        else if (option.compareTo("Books")==1){
            new HomePage().clickOnBooks();
        }
        else if (option.compareTo("Jewellery")==1){
            new HomePage().clickOnJewellery();
        }
    }

    @Then("^I should navigate to \"([^\"]*)\" page successfully$")
    public void iShouldNavigateToPageSuccessfully(String pageName){
        if(pageName.compareTo("Registration")==1){
            Assert.assertTrue(new RegistrationPage().verifyThatUserIsOnRegistrationPage());
        }
        else if(pageName.compareTo("Computers")==1){
            Assert.assertTrue(new ComputersPage().verifyThatUserIsOnComputers());
        }
        else if(pageName.compareTo("Apparel")==1){
            Assert.assertTrue(new ApparelPage().verifyThatUserIsOnApparelPage());
        }
        else if(pageName.compareTo("Digital downloads")==1){
            Assert.assertTrue(new DigitalDownloadsPage().verifyThatUserIsOnDigitalDownloadsPage());
        }
        else if(pageName.compareTo("Books")==1){
            Assert.assertTrue(new BooksPage().verifyThatUserIsOnBooksPage());
        }
        else if(pageName.compareTo("Jewellery")==1){
            Assert.assertTrue(new JewelleryPage().verifyThatUserIsOnJewelleryPage());
        }
        else if(pageName.compareTo("Gift Cards")==1){
            Assert.assertTrue(new GiftCardsPage().verifyThatUserIsOnGiftCardsPage());
        }
    }
}
