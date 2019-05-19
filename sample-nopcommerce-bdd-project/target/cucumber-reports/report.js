$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/resources/featurefiles/login.feature");
formatter.feature({
  "line": 1,
  "name": "Login feature",
  "description": "As a user I want to login into nopecommerce website",
  "id": "login-feature",
  "keyword": "Feature"
});
formatter.before({
  "duration": 9613568020,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User should navigate to login page successfully",
  "description": "",
  "id": "login-feature;user-should-navigate-to-login-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@LoginPageNavigation"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I should navigate to login page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 214496844,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnLoginLink()"
});
formatter.result({
  "duration": 1329888872,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iShouldNavigateToLoginPageSuccessfully()"
});
formatter.result({
  "duration": 67548736,
  "status": "passed"
});
formatter.after({
  "duration": 774959944,
  "status": "passed"
});
formatter.before({
  "duration": 12045954854,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "User should login successfully with valid credentials",
  "description": "",
  "id": "login-feature;user-should-login-successfully-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@ValidLogin"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I enter email address \"unknown@india.com\" into email field",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter password \"unknown\" into password field",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should successfully login to my account",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 66711,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnLoginLink()"
});
formatter.result({
  "duration": 1516270106,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "unknown@india.com",
      "offset": 23
    }
  ],
  "location": "MyStepdefs.iEnterEmailAddressIntoEmailField(String)"
});
formatter.result({
  "duration": 330145453,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "unknown",
      "offset": 18
    }
  ],
  "location": "MyStepdefs.iEnterPasswordIntoPasswordField(String)"
});
formatter.result({
  "duration": 162890930,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnLoginButton()"
});
formatter.result({
  "duration": 2143194038,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iShouldSuccessfullyLoginToMyAccount()"
});
formatter.result({
  "duration": 88911125,
  "status": "passed"
});
formatter.after({
  "duration": 955707794,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 20,
  "name": "User should not login successfully with invalid credentials",
  "description": "",
  "id": "login-feature;user-should-not-login-successfully-with-invalid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@InvalidLogin"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I enter email address \"\u003cemail\u003e\" into email field",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I enter password \"\u003cpassword\u003e\" into password field",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I should not successfully login to my account",
  "keyword": "Then "
});
formatter.examples({
  "line": 28,
  "name": "",
  "description": "",
  "id": "login-feature;user-should-not-login-successfully-with-invalid-credentials;",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ],
      "line": 29,
      "id": "login-feature;user-should-not-login-successfully-with-invalid-credentials;;1"
    },
    {
      "cells": [
        "unknown@india.com",
        "Prime123"
      ],
      "line": 30,
      "id": "login-feature;user-should-not-login-successfully-with-invalid-credentials;;2"
    },
    {
      "cells": [
        "abc153@yahoo.com",
        "unknown"
      ],
      "line": 31,
      "id": "login-feature;user-should-not-login-successfully-with-invalid-credentials;;3"
    },
    {
      "cells": [
        "xyz123@yahoo.com",
        "abcxyz10"
      ],
      "line": 32,
      "id": "login-feature;user-should-not-login-successfully-with-invalid-credentials;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 11406998398,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "User should not login successfully with invalid credentials",
  "description": "",
  "id": "login-feature;user-should-not-login-successfully-with-invalid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@InvalidLogin"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I enter email address \"unknown@india.com\" into email field",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I enter password \"Prime123\" into password field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I should not successfully login to my account",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 65001,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnLoginLink()"
});
formatter.result({
  "duration": 1302787043,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "unknown@india.com",
      "offset": 23
    }
  ],
  "location": "MyStepdefs.iEnterEmailAddressIntoEmailField(String)"
});
formatter.result({
  "duration": 162955361,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Prime123",
      "offset": 18
    }
  ],
  "location": "MyStepdefs.iEnterPasswordIntoPasswordField(String)"
});
formatter.result({
  "duration": 144082950,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnLoginButton()"
});
formatter.result({
  "duration": 676371713,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iShouldNotSuccessfullyLoginToMyAccount()"
});
formatter.result({
  "duration": 65259461,
  "status": "passed"
});
formatter.after({
  "duration": 847515437,
  "status": "passed"
});
formatter.before({
  "duration": 7064074055,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "User should not login successfully with invalid credentials",
  "description": "",
  "id": "login-feature;user-should-not-login-successfully-with-invalid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@InvalidLogin"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I enter email address \"abc153@yahoo.com\" into email field",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I enter password \"unknown\" into password field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I should not successfully login to my account",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 55308,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnLoginLink()"
});
formatter.result({
  "duration": 1425582867,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc153@yahoo.com",
      "offset": 23
    }
  ],
  "location": "MyStepdefs.iEnterEmailAddressIntoEmailField(String)"
});
formatter.result({
  "duration": 236850208,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "unknown",
      "offset": 18
    }
  ],
  "location": "MyStepdefs.iEnterPasswordIntoPasswordField(String)"
});
formatter.result({
  "duration": 146792449,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnLoginButton()"
});
formatter.result({
  "duration": 1175125297,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iShouldNotSuccessfullyLoginToMyAccount()"
});
formatter.result({
  "duration": 76739479,
  "status": "passed"
});
formatter.after({
  "duration": 768442209,
  "status": "passed"
});
formatter.before({
  "duration": 7337320607,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "User should not login successfully with invalid credentials",
  "description": "",
  "id": "login-feature;user-should-not-login-successfully-with-invalid-credentials;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@InvalidLogin"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I enter email address \"xyz123@yahoo.com\" into email field",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I enter password \"abcxyz10\" into password field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I should not successfully login to my account",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 38772,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnLoginLink()"
});
formatter.result({
  "duration": 1295304562,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "xyz123@yahoo.com",
      "offset": 23
    }
  ],
  "location": "MyStepdefs.iEnterEmailAddressIntoEmailField(String)"
});
formatter.result({
  "duration": 176986937,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcxyz10",
      "offset": 18
    }
  ],
  "location": "MyStepdefs.iEnterPasswordIntoPasswordField(String)"
});
formatter.result({
  "duration": 144334399,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnLoginButton()"
});
formatter.result({
  "duration": 1158123650,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iShouldNotSuccessfullyLoginToMyAccount()"
});
formatter.result({
  "duration": 70998899,
  "status": "passed"
});
formatter.after({
  "duration": 766930660,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 35,
  "name": "User should navigate to different pages successfully",
  "description": "",
  "id": "login-feature;user-should-navigate-to-different-pages-successfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 34,
      "name": "@PageNavigation"
    }
  ]
});
formatter.step({
  "line": 36,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 37,
  "name": "I click on \"\u003cOptions\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "I should navigate to \"\u003cOptions\u003e\" page successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 40,
  "name": "",
  "description": "",
  "id": "login-feature;user-should-navigate-to-different-pages-successfully;",
  "rows": [
    {
      "cells": [
        "Options"
      ],
      "line": 41,
      "id": "login-feature;user-should-navigate-to-different-pages-successfully;;1"
    },
    {
      "cells": [
        "Registration"
      ],
      "line": 42,
      "id": "login-feature;user-should-navigate-to-different-pages-successfully;;2"
    },
    {
      "cells": [
        "Computers"
      ],
      "line": 43,
      "id": "login-feature;user-should-navigate-to-different-pages-successfully;;3"
    },
    {
      "cells": [
        "Electronics"
      ],
      "line": 44,
      "id": "login-feature;user-should-navigate-to-different-pages-successfully;;4"
    },
    {
      "cells": [
        "Apparel"
      ],
      "line": 45,
      "id": "login-feature;user-should-navigate-to-different-pages-successfully;;5"
    },
    {
      "cells": [
        "Digital downloads"
      ],
      "line": 46,
      "id": "login-feature;user-should-navigate-to-different-pages-successfully;;6"
    },
    {
      "cells": [
        "Books"
      ],
      "line": 47,
      "id": "login-feature;user-should-navigate-to-different-pages-successfully;;7"
    },
    {
      "cells": [
        "Jewellery"
      ],
      "line": 48,
      "id": "login-feature;user-should-navigate-to-different-pages-successfully;;8"
    },
    {
      "cells": [
        "Gift Cards"
      ],
      "line": 49,
      "id": "login-feature;user-should-navigate-to-different-pages-successfully;;9"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 7378154668,
  "status": "passed"
});
formatter.scenario({
  "line": 42,
  "name": "User should navigate to different pages successfully",
  "description": "",
  "id": "login-feature;user-should-navigate-to-different-pages-successfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 34,
      "name": "@PageNavigation"
    }
  ]
});
formatter.step({
  "line": 36,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 37,
  "name": "I click on \"Registration\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "I should navigate to \"Registration\" page successfully",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 34781,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Registration",
      "offset": 12
    }
  ],
  "location": "MyStepdefs.iClickOn(String)"
});
formatter.result({
  "duration": 180177,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Registration",
      "offset": 22
    }
  ],
  "location": "MyStepdefs.iShouldNavigateToPageSuccessfully(String)"
});
formatter.result({
  "duration": 125439,
  "status": "passed"
});
formatter.after({
  "duration": 795485309,
  "status": "passed"
});
formatter.before({
  "duration": 6303201564,
  "status": "passed"
});
formatter.scenario({
  "line": 43,
  "name": "User should navigate to different pages successfully",
  "description": "",
  "id": "login-feature;user-should-navigate-to-different-pages-successfully;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 34,
      "name": "@PageNavigation"
    }
  ]
});
formatter.step({
  "line": 36,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 37,
  "name": "I click on \"Computers\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "I should navigate to \"Computers\" page successfully",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 38202,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Computers",
      "offset": 12
    }
  ],
  "location": "MyStepdefs.iClickOn(String)"
});
formatter.result({
  "duration": 1869779853,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Computers",
      "offset": 22
    }
  ],
  "location": "MyStepdefs.iShouldNavigateToPageSuccessfully(String)"
});
formatter.result({
  "duration": 101883877,
  "status": "passed"
});
formatter.after({
  "duration": 784670122,
  "status": "passed"
});
formatter.before({
  "duration": 7439603611,
  "status": "passed"
});
formatter.scenario({
  "line": 44,
  "name": "User should navigate to different pages successfully",
  "description": "",
  "id": "login-feature;user-should-navigate-to-different-pages-successfully;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 34,
      "name": "@PageNavigation"
    }
  ]
});
formatter.step({
  "line": 36,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 37,
  "name": "I click on \"Electronics\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "I should navigate to \"Electronics\" page successfully",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 97501,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Electronics",
      "offset": 12
    }
  ],
  "location": "MyStepdefs.iClickOn(String)"
});
formatter.result({
  "duration": 919899306,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Electronics",
      "offset": 22
    }
  ],
  "location": "MyStepdefs.iShouldNavigateToPageSuccessfully(String)"
});
formatter.result({
  "duration": 74636082,
  "status": "passed"
});
formatter.after({
  "duration": 778224229,
  "status": "passed"
});
formatter.before({
  "duration": 7265015423,
  "status": "passed"
});
formatter.scenario({
  "line": 45,
  "name": "User should navigate to different pages successfully",
  "description": "",
  "id": "login-feature;user-should-navigate-to-different-pages-successfully;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 34,
      "name": "@PageNavigation"
    }
  ]
});
formatter.step({
  "line": 36,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 37,
  "name": "I click on \"Apparel\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "I should navigate to \"Apparel\" page successfully",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 53026,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Apparel",
      "offset": 12
    }
  ],
  "location": "MyStepdefs.iClickOn(String)"
});
formatter.result({
  "duration": 97501,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Apparel",
      "offset": 22
    }
  ],
  "location": "MyStepdefs.iShouldNavigateToPageSuccessfully(String)"
});
formatter.result({
  "duration": 94650,
  "status": "passed"
});
formatter.after({
  "duration": 760033755,
  "status": "passed"
});
formatter.before({
  "duration": 6481326012,
  "status": "passed"
});
formatter.scenario({
  "line": 46,
  "name": "User should navigate to different pages successfully",
  "description": "",
  "id": "login-feature;user-should-navigate-to-different-pages-successfully;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 34,
      "name": "@PageNavigation"
    }
  ]
});
formatter.step({
  "line": 36,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 37,
  "name": "I click on \"Digital downloads\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "I should navigate to \"Digital downloads\" page successfully",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 57588,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Digital downloads",
      "offset": 12
    }
  ],
  "location": "MyStepdefs.iClickOn(String)"
});
formatter.result({
  "duration": 1452245657,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Digital downloads",
      "offset": 22
    }
  ],
  "location": "MyStepdefs.iShouldNavigateToPageSuccessfully(String)"
});
formatter.result({
  "duration": 199445214,
  "status": "passed"
});
formatter.after({
  "duration": 789793765,
  "status": "passed"
});
formatter.before({
  "duration": 7133677723,
  "status": "passed"
});
formatter.scenario({
  "line": 47,
  "name": "User should navigate to different pages successfully",
  "description": "",
  "id": "login-feature;user-should-navigate-to-different-pages-successfully;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 34,
      "name": "@PageNavigation"
    }
  ]
});
formatter.step({
  "line": 36,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 37,
  "name": "I click on \"Books\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "I should navigate to \"Books\" page successfully",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 62149,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Books",
      "offset": 12
    }
  ],
  "location": "MyStepdefs.iClickOn(String)"
});
formatter.result({
  "duration": 1478957482,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Books",
      "offset": 22
    }
  ],
  "location": "MyStepdefs.iShouldNavigateToPageSuccessfully(String)"
});
formatter.result({
  "duration": 123612893,
  "status": "passed"
});
formatter.after({
  "duration": 762352109,
  "status": "passed"
});
formatter.before({
  "duration": 7608313234,
  "status": "passed"
});
formatter.scenario({
  "line": 48,
  "name": "User should navigate to different pages successfully",
  "description": "",
  "id": "login-feature;user-should-navigate-to-different-pages-successfully;;8",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 34,
      "name": "@PageNavigation"
    }
  ]
});
formatter.step({
  "line": 36,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 37,
  "name": "I click on \"Jewellery\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "I should navigate to \"Jewellery\" page successfully",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 53027,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jewellery",
      "offset": 12
    }
  ],
  "location": "MyStepdefs.iClickOn(String)"
});
formatter.result({
  "duration": 138554,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jewellery",
      "offset": 22
    }
  ],
  "location": "MyStepdefs.iShouldNavigateToPageSuccessfully(String)"
});
formatter.result({
  "duration": 92940,
  "status": "passed"
});
formatter.after({
  "duration": 848056539,
  "status": "passed"
});
formatter.before({
  "duration": 8253116893,
  "status": "passed"
});
formatter.scenario({
  "line": 49,
  "name": "User should navigate to different pages successfully",
  "description": "",
  "id": "login-feature;user-should-navigate-to-different-pages-successfully;;9",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 34,
      "name": "@PageNavigation"
    }
  ]
});
formatter.step({
  "line": 36,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 37,
  "name": "I click on \"Gift Cards\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "I should navigate to \"Gift Cards\" page successfully",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 53027,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Gift Cards",
      "offset": 12
    }
  ],
  "location": "MyStepdefs.iClickOn(String)"
});
formatter.result({
  "duration": 91229,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Gift Cards",
      "offset": 22
    }
  ],
  "location": "MyStepdefs.iShouldNavigateToPageSuccessfully(String)"
});
formatter.result({
  "duration": 95220,
  "status": "passed"
});
formatter.after({
  "duration": 840856868,
  "status": "passed"
});
});