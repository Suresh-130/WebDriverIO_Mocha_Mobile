const LoginPage = require("./login.page");
const { assert } = require("chai");
const { expect } = require("chai");
const { platform } = require("../utils/tools");
const allureReporter = require("@wdio/allure-reporter").default;

class dashboardPage {
  locators = {
    android: {
        useWithoutAccount : "//android.widget.Button[@resource-id='com.android.chrome:id/signin_fre_dismiss_button']",
        clickOnNoThanks : "//android.widget.Button[@resource-id='com.android.chrome:id/negative_button']",
        clickOnSearchBar : "//android.widget.EditText[@resource-id='com.android.chrome:id/search_box_text']",
        searchValue : "//android.widget.EditText[@resource-id='com.android.chrome:id/url_bar']",
        clickOnMoreOptions : "//android.widget.Button[@text='Toggle navigation']",
        clickOnMyReceipes : "//android.view.View[@resource-id='MainVideo']/android.view.View/android.widget.TextView[1]",
        
        clickOnSignIn : "//android.view.View[@content-desc='Sign in.']",


        clickOnAddReceipe : "//android.view.View[@content-desc='Add Recipe']",
        clickOnImportButton : "//android.widget.Button[@resource-id='importButton']",
        clickOnLink : "//android.widget.TextView[@text='https://www.bigoven.com/recipe/these-copycat-ronto-wraps-bring-disneyland-home-to-you/3043465']",

    },
    ios: {
      notificationAlert: "",
      oldAppAlert: "~No",
      titleDesc: "~The future of travel.",
      menuBar: "",
      signOutButton: "~Sign out",
    
    },
  };
 
  get clickOnUseWithoutAccount() {
    return $(this.locators[platform()].useWithoutAccount);
  }

  get clickOnNoThanks() {
    return $(this.locators[platform()].clickOnNoThanks);
  }

  get clickOnSearchBar(){
    return $(this.locators[platform()].clickOnSearchBar);
  }

  get searchValue(){
    return $(this.locators[platform()].searchValue);
  }

  get clickOnMoreOptions(){
    return $(this.locators[platform()].clickOnMoreOptions);
  }

  get clickOnMyReceipes(){
    return $(this.locators[platform()].clickOnMyReceipes);
  }

  get clickOnSignIn(){
    return $(this.locators[platform()].clickOnSignIn);
  }


  get clickOnAddReceipe(){
    return $(this.locators[platform()].clickOnAddReceipe);
  }

  get clickOnImportButton(){
    return $(this.locators[platform()].clickOnImportButton);
  }

  get clickOnLink(){
    return $(this.locators[platform()].clickOnLink);
  }
 
  async enterIntoWebApplication(url) {
    await this.clickOnUseWithoutAccount.click();
    await this.clickOnNoThanks.click();
    await this.clickOnSearchBar.click();
    await this.searchValue.setValue(url);
    await browser.keys('Enter')
    await browser.pause(10000);
    await this.clickOnMoreOptions.click();
    await browser.pause(10000);
    await this.clickOnMyReceipes.click();
    await browser.pause(10000);
    await this.clickOnSignIn.click();
    
    await this.clickOnAddReceipe.click();
    await this.clickOnImportButton.click();
    await this.clickOnLink.click();
  }

}
module.exports = new dashboardPage();
