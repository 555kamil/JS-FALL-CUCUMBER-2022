const {Given, Then, When,} = require("@wdio/cucumber-framework");
const {expect} = require("chai");
const HomePage = require('../../POM/Hotels/HomePage');

const homePage = new HomePage();

Given (/^I am on hotels$/, async function (){
    await browser.url('/');
});

//TC-20

When(/^I click Sign In button on homepage$/,async function(){
    await homePage.clickSignIn();
});

When(/^I click Sign Up link$/,async function(){
    await homePage.clickOnSignUp();
});

When(/^I click “Terms and Conditions” link$/,async function(){
  await homePage.clickOnTermsLink();
  await browser.pause(2000);
});

Then(/^I verify “Terms and Conditions” page opens in new tab$/,async function(){
     const allHandles = await homePage.getAllWindowHandles()
     expect(allHandles.length,'Our page is not opened in a new tab').to.equal(2);
     await browser.pause(2000);
});

Then(/^I verify (.+) format$/,async function(){
    await homePage.switchToNewWindowHandle();
    expect(await homePage.verifyTosDateFormat(), 'Format is not as expected').to.be.true;
});

When(/^I click “Privacy Statement” link$/,async function(){
    await homePage.clickOnPrivacyStateLink();
})

Then(/^I verify “Privacy Statement” page opens in new tab$/,async function(){
    const allHandles = await homePage.getAllWindowHandles();
    expect(allHandles.length,'Our page is not opened in a new tab').to.equal(2);
    await browser.pause(2000);
})
Then(/^I verify (.+) date format$/,async function(){
    await homePage.switchToNewWindowHandle();
    expect(await homePage.verifyPrivacyDateFormat(),'Format is not as expected').to.be.true;
})

//TC-21

When(/^I click on Sign In$/,async function(){
    await homePage.clickSignIn();
});

When(/^I click on Sign In button$/, async function () {
    await homePage.clickSignInButton1();
})

When(/^I enter '(.+)' as invalid email address$/, async function (email) {
    await homePage.enterSignInEmail(email);
})

When(/^I enter '(.+)' as invalid password$/, async function (pwd) {
    await homePage.enterSignInPassword(pwd);
})

When(/^I click on Sign in button$/, async function () {
    await homePage.clickSignInButton2();
    await browser.pause(2000);
})

Then(/^I verify 'Email and password don't match. Please try again.' is displayed$/, async function () {
    expect(await homePage.isSignInErrorMsgDisplayed(), 'Error message is not displayed').to.be.true;
})

//TC-22

When(/^I enter '(.+)' as invalid email address$/, async function (email) {
    await homePage.enterSignupEmail(email);
    await browser.pause(2000);
})

When(/^I enter '(.+)' as invalid first name$/, async function (firstName) {
    await homePage.enterSignUpFirstName(firstName);
    await browser.pause(2000);
})

When(/^I enter '(.+)' as invalid last name$/, async function (lastName) {
    await homePage.enterSignUpLastName(lastName);
    await browser.pause(2000);
})

When(/^I enter '(.+)' in Password$/, async function (pwd) {
    await homePage.enterSignUpPwd(pwd);
    await browser.pause(2000);
})

Then(/^I verify "(.+)" is (.+)$/, async function(webElement, outcome) {
    switch (outcome) {
        case 'displayed':
             const elementIsDisplayed = await homePage.verifyErrorDisplayed(webElement);
             expect(elementIsDisplayed, 'element is NOT displayed').to.be.true;
             break;
        case 'enabled':
             const elementIsEnabled = await homePage.verifyElementEnabled(webElement);
             expect(elementIsEnabled, 'element is not enabled').to.be.true;
             break;
        case 'NOT enabled':
             const elementIsDisabled = await homePage.continueNotEnabled();
             expect(elementIsDisabled, 'element is enabled').to.be.true;
             break;
        
        default:
            break;
    }}
)


//TC-23

When(/^I search Manhattan, NY$/,async function(){
    await homePage.enterDestination('New');
    await browser.pause(1000);
    await homePage.selectFromSuggestedDestinations('Manhattan');
  })

When(/^I enter Check-in date as (.+)$/,async function(checkIn){ 
      await homePage.openCalendar();
      await homePage.selectCheckInDate('February 10 2023');
  })

When(/^I enter Check-out date as (.+)$/,async function(checkOut){
   await homePage.selectCheckOutDate('February 16 2023');
   await homePage.clickDoneOnCalendar();
   await browser.pause(1000);
  })

When(/^I click on Search button$/,async function(){
    await homePage.clickSearchButton();
  })

When(/^I click on (.+) from star-rating filter$/,async function(star){
      await homePage.selectRating(star);
      await browser.pause(2000);
       
  })

When(/^I select (.+) from sort-by dropdown$/,async function(selector){
  await homePage.selectSortByDropdown(selector);
  await browser.pause(2000);
  })

Then(/^I verify all hotels in search results are (.+)-rated as selected in above step$/,async function(star){
    const starRate = await homePage.selectRating(star);
    const rate = await homePage.isRatingSameStar();
    expect(starRate, 'Not working').to.deep.equal(rate);
  
})

Then(/^I verify all hotels are listed in increasing order by price$/,async function(){
    const allPrices =await homePage.getAllSearchResultsPricesInNumbers();
    expect(await homePage.isPricesInIncreasingOrder(allPrices), 'Prices are not in increasing order').to.be.true;
  })

//TC-28

When(/^I click on "Travelers"$/, async function() {
    await homePage.clickTravelersBox();
    await browser.pause(2000);
});

When(/^I select “Children” as (.+)$/,async function(data){ 
    await homePage.increaseChildrenTravelers(data);
    await browser.pause(2000);
  });

When(/^I verify Children-age dropdown are 2$/,async function(){
  expect(await homePage.numberOfKidsDropdown(), 'Not equal').to.equal(2);
 })

When(/^I verify Plus-button is enabled$/,async function(){
    expect(await homePage.isPlusButtonEnabledChild(), 'PLus button is NOT enabled').to.be.true;
})
When(/^I verify Minus-button is enabled$/,async function(){
    expect(await homePage.isMinusButtonEnabledChild(), 'Minus button is NOT enabled').to.be.true;
})
When(/^I verify Children-age dropdown are 6$/,async function(){
    expect(await homePage.numberOfKidsDropdown(), 'Not equal').to.be.equal('6')
   })
When(/^I verify Children-age dropdown are 5$/,async function(){
    expect(await homePage.numberOfKidsDropdown(), 'Not equal').to.be.equal('5')
 })

//TC-32 TC-33

When(/^I enter '(.+)' in Password$/, async function (password) {
    await homePage.enterSignUpPwd(password);
    await browser.pause(2000);
})
 
Then(/^I verify '(.+)' is displayed$/,async function() {
     expect(await homePage.isIncludesErrorMsgDisplayed(),'Not displayed').to.be.true;
     expect(await homePage.isAddMoreErrorMsgDisplayed(),'Not displayed ').to.be.true;
})

Then(/^I verify '(.+)' message two is displayed$/,async function() {
    expect(await homePage.isCombinesErrorMsgDisplayed(), 'Not displayed ').to.be.true;
    expect(await homePage.isAvoidErrorMsgDisplayed(), 'Not displayed ').to.be.true;
})

Then(/^I verify (.+) is (.+)$/,async function (webElement, attribute) {
    switch (webElement) {
      case 'Password strength bar.':
        expect(await homePage.filledPasswordBar(attribute), 'Fill Level is NOT as expected').to.be.true;
        break;
 
      case 'Password strength message':
        expect(await homePage.checkStrengthOfPassMsg(attribute),'Password Strength Message is NOT as expected').to.be.true;
        break;
 
      default:
        break;
    }}
);  