const {Given, Then, When} = require("@wdio/cucumber-framework");
const {expect} = require("chai");
const HomePage = require('../../POM/Hotels/HomePage');

const homePage = new HomePage();

When(/^I click on dates$/, async function() {
    await homePage.openCalendar();
    await browser.pause(2000);
});


When(/^I go to current month if not displayed$/, async function() {
    await homePage.checkCurrentMonthDisplayed();
    await browser.pause(2000);
});


Then(/^I verify past dates and back button are disabled$/, async function() {
    expect(await homePage.arePastDatesEnabled(), 'Past dates are NOT disabled').to.be.false;
    await browser.pause(2000);

    expect(await homePage.isBackButtonEnabled(), 'Back button is NOT disabled').to.be.false;
    await browser.pause(2000);
});