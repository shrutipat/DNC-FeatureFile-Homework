package com.demo.nopcommerce.webpages;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = ".",
        plugin = {"pretty", "html:target/cucumber-reports"},
        tags = "@LoginPageNavigation, @InvalidLogin, @ValidLogin, @PageNavigation",
        monochrome = true
)

public class CukeTest {
}
