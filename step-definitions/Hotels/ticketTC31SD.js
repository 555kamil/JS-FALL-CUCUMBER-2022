const {Given, Then, When} = require("@wdio/cucumber-framework");
const {expect} = require("chai");
const HomePage = require('../../POM/Hotels/HomePage');

const homePage = new HomePage();

When(/^I click on "English" language$/, async function() {
    await homePage.clickEnglishLanguageButton();
    await browser.pause(2000);
});

When(/^I select "Español" in Language dropdown$/, async function() {
    await homePage.clickLanguageOption();
    await browser.pause(2000);
});

When(/^I click on "Save" button$/, async function() {
    await homePage.clickSaveLanguageButton();
    await browser.pause(2000);
});

Then(/^I verify "Español" is displayed$/, async function() {
    expect(await homePage.isSpanishLanguageDisplayed(), '“Español” language is NOT displayed').to.be.true;
    await browser.pause(2000);
});

When(/^I click on "Español" language$/, async function() {
    await homePage.clickSpanishLanguageButton();
    await browser.pause(2000);
});

When(/^I select "English" in Language dropdown$/, async function() {
    await homePage.clickLanguageOptionEnglish();
    await browser.pause(2000);
});

When(/^I click on "Guardar" button$/, async function() {
    await homePage.clickSaveInSpanish();
    await browser.pause(2000);
});

Then(/^I verify "English" is displayed$/, async function() {
    expect(await homePage.isEnglishLanguageDisplayed(), '"English" language is NOT displayed').to.be.true;
    await browser.pause(2000);
});