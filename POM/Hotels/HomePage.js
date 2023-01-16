const Commands = require('../Commands');
const Dates = require('../Dates');
const moment = require("moment/moment");

class HomePage {

    commands = new Commands();
    now = moment();
    dates = new Dates();

    // Locators for web-Elements on the HomePage (variables)
    // Destination
    goingToLocator = '//button[@aria-label="Going to"]';
    goingToTypeLocator = '#destination_form_field';
    autoSuggestionsLocator = '//div[@class="truncate"]//strong';

    // Calendar
    calendarOpenLocator = '#date_form_field-btn';
    
    allDatesLocator_starts = '//button[starts-with(@aria-label, "'
    allDatesLocator_ends = '")]'

    calendarDoneButtonLocator = '//button[text()="Done" and @data-stid]';
    nextCalendarButtonLocator = '(//button[@data-stid="date-picker-paging"])[2]';
    prevCalendarButtonLocator = '(//button[@data-stid="date-picker-paging"])[1]';
    leftSideCalendarHeaderLocator = '(//div[@class="uitk-date-picker-month"])[1]//h2';

    // Sprint #1 and #2 Locators
    englishLanguageLocator = '//div[text()="English"]';
    spanishLanguageLocator = '//div[text()="Español"]';
    languageDropdown = '//select[@id="language-selector"]';
    saveButtonLocator = '//button[text()="Save"]';
    guardarButtonLocator = '//button[text()="Guardar"]';
    travelersLocator = '//button[@data-stid="open-room-picker"]';

    getTheAppButtonLocator = '//button[@id="submitBtn"]';
    phoneNumberBoxLocator = '//input[@id="phoneNumber"]';
    errorMessageValidNumber = '//div[contains(text() , "Please enter")]';
    
    adultsIncreaseButtonLocator = '//*[@aria-label="Increase the number of adults in room 1"]/..';
    childrenIncreaseButtonLocator = '//*[@aria-label="Increase the number of children in room 1"]/..';
    firstChildLocator = '//*[@id="age-traveler_selector_children_age_selector-0-0"]';
    secondChildLocator = '//*[@id="age-traveler_selector_children_age_selector-0-1"]';
    thirdChildLocator = '//*[@id="age-traveler_selector_children_age_selector-0-2"]';
    doneButton = '//button[text() = "Done"]';
    adultNumber = '//input[@id="traveler_selector_adult_step_input-0"]';
    childrenNumber = '//input[@id="traveler_selector_children_step_input-0"]';

    signIn = '//button[text()="Sign in"]';
    feedbackLink = '//a[text()="Feedback"]'; 
    submitButton = '//*[@id="submit-button"]';
    feedbackError = '//p[text()="Please fill in the required information highlighted below."]';
    errorRedDots = '//fieldset[contains(@style, "padding")]';
    signUp = '//a[contains(@data-stid, "account-signup")]'
    termsAndConditionsLink ='//a[text()="Terms and Conditions"]'
    lastRevisedLocator = '//div[contains(@class, "blockstart-three")]//span[contains(text() , "Last revised")]'
    lastUpdated = '//p[contains(text() , "Last Updated")]'

    starRate_1 = '//label[@for="page-rating-1"]';
    starRate_2 = '//label[@for="page-rating-2"]';
    starRate_3 = '//label[@for="page-rating-3"]';
    starRate_4 = '//label[@for="page-rating-4"]';
    starRate_5 = '//label[@for="page-rating-5"]';

    commentBox = '//*[@id="verbatim"]';
    willYouReturn = '//*[@id="will-you-return"]';
    everBooked = '//label[@for="booked-here-before-yes"]/..';
    didYouAccomplish = '//label[@for="were-you-successful-yes"]/..';
    successfulFeedback = '//h5[text()="THANK YOU FOR YOUR FEEDBACK."]';

    disabledDatesLocator = '//button[contains(@aria-label, "disabled")]';
    currentMonth = '//div[@class="uitk-date-picker-month"]//h2[text()="' + this.now.format('MMMM YYYY') + '"]';
    currentDisplayedMonthLocator = '//div[@class="uitk-date-picker-month"][1]//h2';
    previousPage = '//*[@id="prevMonth-title"]';

    signInButton1Locator = '//a[@data-stid="link-header-account-signin"]'
    signInEmailAddressLocator = '//input[@id="loginFormEmailInput"]'
    signInPasswordLocator = '//input[@type="password"]'
    signInButton2Locator = '//button[@id="loginFormSubmitButton"]'
    signInErrMsgLocator = '//h3[@class="uitk-error-summary-heading"]'
    
    signupEmailAddressLocator = '//input[@id="signupFormEmailInput"]'
    signupFirstNameLocator = '//input[@id="signupFormFirstNameInput"]'
    signUpLastNameLocator = '//input[@id="signupFormLastNameInput"]'
    signUpPwdLocator = '//input[@id="signupFormPasswordInput"]'

    emailAddressError = '//div[@id="signupFormEmailInput-error"]';
    firstNameError = '//div[@id="signupFormFirstNameInput-error"]';
    lastNameError = '//div[@id="signupFormLastNameInput-error"]';
    keepMeSignedIn = '//span[contains(text(),"Keep me signed in")]';
    continueButton = '//button[@id="signupFormSubmitButton"]';
    continueButtonDisabled = '//button[@disabled]';

    calendarOpenLocator = '#date_form_field-btn'
    searchButtonLocator = '//button[@id="search_button"]'
    oneStarLocator = '//label[@aria-label="1 star"]'
    twoStarLocator= '//label[@aria-label="2 star"]'
    threeStarLocator='//label[@aria-label="3 star"]'
    fourStarLocator= '//label[@aria-label="4 star"]'
    fiveStarLocator= '//label[@aria-label="5 star"]'

    starRatingField = '//div[@class="uitk-rating"]'
    allPricesForManhattan = '//div[contains(@class , "padding-block-half")]'
    childrenDropDown = '//select[contains(@id, "children_age_selector")]'
    increaseChildCountLocator = '//*[@aria-label="Increase the number of children in room 1"]'
    decreaseChildCountLocator= '//*[@aria-label="Decrease the number of children in room 1"]'

    errorPassMsgIncludes ='//ul[contains(@class, "uitk-typelist")]//li[contains(@class, "typelist-item")][1]'
    errorPassCombines = '//ul[contains(@class, "uitk-typelist")]//li[contains(@class, "typelist-item")][2]'
    errorPassAddMore = '//ul[contains(@class, "uitk-typelist")]//li[contains(@class, "typelist-item")][1]'
    errorPassAvoid = '//ul[contains(@class, "uitk-typelist")]//li[contains(@class, "typelist-item")][2]'
    passwordStrength = '//div[contains(@class, "progress-bar-description")]'
    passwordBarStrength ='//div[contains(@class, "bar-current")]'

    strength_zero = '//div[@style="width: 0%;"]';
    strength_half = '//div[@style="width: 50%;"]';
    strength_75 = '//div[@style="width: 75%;"]';
    strength_full = '//div[@style="width: 100%;"]';
    strengthMsg_Weak = '//div[contains(text(),"Weak")]';
    strengthMsg_Strong = '//div[contains(text(),"Strong")]';
    strengthMsg_VeryStrong = '//div[contains(text(),"Very Strong")]';

    msg11Locator = '//ul[contains(@class, "uitk-typelist")]//li[contains(@class, "typelist-item")][1]'
    msg12Locator = '//li[contains(text() , "Add more words")]'
    msg21Locator = '//ul[contains(@class, "uitk-typelist")]//li[contains(@class, "typelist-item")][2]'
    msg22Locator = '//li[contains(text() , "Avoid common")]'


// TC-20

async clickOnSignUp() {
    await this.commands.clickWebElement(this.signUp);
 } 

 async clickOnTermsLink() {
    await this.commands.clickWebElement(this.termsAndConditionsLink)
 }

 async switchToNewWindowHandle() {
    const windowHandle = await this.commands.getHandle()
    const allWindowHandles = await this.commands.getHandles()
    for(const handle of allWindowHandles){
        if(handle!== windowHandle){
            await this.commands.switchToWindowHandle(handle)
            break;
        }};
}

async verifyTosDateFormat() { 
    const getDisplayedDate = await this.commands.getTextOfWebElement(this.lastRevisedLocator)
    const displayedDate = getDisplayedDate.substring(14);
    const expectedDate = await this.dates.getFormat_MM_DD_YY(displayedDate);
    return displayedDate.localeCompare(expectedDate)===0;
}

async verifyPrivacyDateFormat() { 
    const getDisplayedDate = await this.commands.getTextOfWebElement(this.lastUpdated);
    const displayedDate = getDisplayedDate.substring(14);
    const expectedDate = await this.dates.getFormat_DD_MMMM_YYYY(displayedDate);
    return displayedDate.localeCompare(expectedDate)===0;
}


//@TC-21

async clickSignInButton1() {
    await this.commands.clickWebElement(this.signInButton1Locator);
}

async enterSignInEmail(email) {
    await this.commands.typeInWebElement(this.signInEmailAddressLocator, email);
}

async enterSignInPassword(pwd) {
    await this.commands.typeInWebElement(this.signInPasswordLocator, pwd)
}

async clickSignInButton2() {
    await this.commands.clickWebElement(this.signInButton2Locator);
}

async isSignInErrorMsgDisplayed() {
    return await this.commands.isWebElementDisplayed(this.signInErrMsgLocator)
}

//@TC-22

async enterSignupEmail(email) {
    await this.commands.typeInWebElement(this.signupEmailAddressLocator, email)
}

async enterSignUpFirstName(firstName) {
    await this.commands.typeInWebElement(this.signupFirstNameLocator, firstName)
}

async enterSignUpLastName(lastName) {
    await this.commands.typeInWebElement(this.signUpLastNameLocator, lastName)
}

async enterSignUpPwd(pwd) {
    await this.commands.typeInWebElement(this.signUpPwdLocator, pwd)
}

async verifyErrorDisplayed(webElement){
    switch (webElement) {
        case "Enter a valid email":
        return await this.commands.isWebElementDisplayed(this.emailAddressError)
        break;
        case "First name cannot contain special characters":
        return await this.commands.isWebElementDisplayed(this.firstNameError)
        break;
        case "Last name cannot contain special characters":
        return await this.commands.isWebElementDisplayed(this.lastNameError)
        break;
        case "Keep me signed in":
        return await this.commands.isWebElementDisplayed(this.keepMeSignedIn)
        break;
        case "Continue button":
        return await this.commands.isWebElementDisplayed(this.continueButton)
        break;
        default:
            break;
    }
}

async verifyElementEnabled(webElement) {
    switch (webElement) {
        case "Keep me signed in":
        return await this.commands.isWebElementEnabled(this.keepMeSignedIn)
        break;
        case "Continue button":
        return await this.commands.isWebElementEnabled(this.continueButton)
        break;
        default:
        break;
    }
}

async continueNotEnabled(){
    return this.commands.isWebElementEnabled(this.continueButtonDisabled);
}

//TC-23

async openCalendar() {
    await this.commands.clickWebElement(this.calendarOpenLocator);
}

async clickSearchButton() {
    await this.commands.clickWebElement(this.searchButtonLocator);
}

async selectRating(star){
    switch (star) {
        case '1':
            await this.commands.clickWebElement(this.oneStarLocator);
            break;
        case '2':
            await this.commands.clickWebElement(this.twoStarLocator);
            break;
        case '3':
            await this.commands.clickWebElement(this.threeStarLocator);
            break;  
        case '4':
            await this.commands.clickWebElement(this.fourStarLocator);
            break;   
        case '5':
            await this.commands.clickWebElement(this.fiveStarLocator);
            break;            
        default:
            break;
 }
}

async getNumberFromStarRating(){
    const starElements =  await this.commands.findAllWebElement(this.starRatingField)
    await browser.pause(7000);
    const ratingNumber =[];
    for(const starElement of starElements){
        let temp = await this.commands.getTextOfWebElement(starElement);
        ratingNumber.push(Number(temp.charAt(0)));
    }
    return ratingNumber;
}

async isRatingSameStar() {
    const allRates = await this.getNumberFromStarRating();
    const firstNum = allRates[0];
    return firstNum;
}

async getAllSearchResultsPricesInNumbers(){
    const priceElements = await this.commands.findAllWebElement(this.allPricesForManhattan);
    await browser.pause(7000);
    const getNumberOfPrices = [];

    for(const priceElement of priceElements){
       let temp = await this.commands.getTextOfWebElement(priceElement);
       getNumberOfPrices.push(Number(temp.substring(19)))
    }
    return getNumberOfPrices;
   }


   async isPricesInIncreasingOrder(data) {
    let isArrayInExpectedOrder = true;
    for (let i=0 ; i < data.length ; i++) {
        if (pricesArray[i] > pricesArray[i+1]) {
            isArrayInExpectedOrder = false;
            break;
        }
    }
    return isArrayInExpectedOrder;
}

//TC-28

async numberOfKidsDropdown() {
    const elementsArray = await this.commands.findAllWebElement(this.childrenDropDown)
    return elementsArray.length.toString();
}

async isPlusButtonEnabledChild() {
    const enabledElement = await this.commands.isWebElementEnabled(this.increaseChildCountLocator)
    return enabledElement;
 }


async isMinusButtonEnabledChild() {
        const enabledElement= await this.commands.isWebElementEnabled(this.decreaseChildCountLocator)
        return enabledElement;
    }

//TC-32 TC-33

async isIncludesErrorMsgDisplayed(){
    return await this.commands.isWebElementDisplayed(this.errorPassMsgIncludes)
}

async isAddMoreErrorMsgDisplayed(){
    return await this.commands.isWebElementDisplayed(this.errorPassAddMore)
}

async isCombinesErrorMsgDisplayed(){
    return await this.commands.isWebElementDisplayed(this.errorPassCombines)
}

async isAvoidErrorMsgDisplayed(){
    return await this.commands.isWebElementDisplayed(this.errorPassAvoid)
}

async filledPasswordBar(attribute) {
    switch (attribute) {
        case 'empty':
        return await this.commands.isWebElementDisplayed(this.strength_zero);
        break;
        case 'half filled':
        return await this.commands.isWebElementDisplayed(this.strength_half);
        break;
        case 'three quarters filled':
        return await this.commands.isWebElementDisplayed(this.strength_75);
        break;
        case 'full':
        return await this.commands.isWebElementDisplayed(this.strength_full);
        break;
      default:
        break;
    }
  }

  async checkStrengthOfPassMsg(attribute) {
    switch (attribute) {
        case 'Weak':
        return await this.commands.isWebElementDisplayed(this.strengthMsg_Weak);
        break;
        case 'Strong':
        return await this.commands.isWebElementDisplayed(this.strengthMsg_Strong);
        break;
        case 'Very Strong':
        return await this.commands.isWebElementDisplayed(this.strengthMsg_VeryStrong);
        break;
        default:
        break;
    }
  }

async isMsg1Displayed() {
    return await this.commands.isWebElementDisplayed(this.msg11Locator||this.msg12Locator)
}

async isMsg2Displayed() {
    return await this.commands.isWebElementDisplayed(this.msg21Locator||this.msg22Locator)
}









//************************* SPRINT-1 TICKETS********************************/

//TC-17
async checkCurrentMonthDisplayed() {
    const displayedMonth = await this.commands.getTextOfWebElement(this.currentDisplayedMonthLocator);
    const isCurrentMonth = displayedMonth === this.now.format('MMMM YYYY');
    const prevPageEnabled = await this.commands.isWebElementEnabled(this.previousPage);
    while(!isCurrentMonth && prevPageEnabled) {
        await this.commands.clickWebElement(this.prevCalendarButtonLocator);
    }
}

async arePastDatesEnabled() {
    const pastDays = await this.commands.findAllWebElement(this.disabledDatesLocator);
    for(let i = 0; i < pastDays.length; i++) {
        return await (await $(pastDays[i])).isEnabled();
    } 
}

async isBackButtonEnabled() {
    return await $(this.prevCalendarButtonLocator).isEnabled();
}


//TC-18
async clickTravelersBox() {
    await this.commands.clickWebElement(this.travelersLocator);
}

async increaseAdultsTravelers(numberAdults) {
   for(let i = 0; i < numberAdults-2; i++) {
        await this.commands.clickWebElement(this.adultsIncreaseButtonLocator);
    } 
}

async increaseChildrenTravelers(numberChildren) {
    for(let i = 0; i < numberChildren; i++) {
        await this.commands.clickWebElement(this.childrenIncreaseButtonLocator);
    } 
}

async setFirstChildAge() {
    await this.commands.clickWebElement(this.firstChildLocator)
    await this.commands.selectDataInDropdown(this.firstChildLocator, '4')
}

async setSecondChildAge() {
    await this.commands.clickWebElement(this.secondChildLocator)
    await this.commands.selectDataInDropdown(this.secondChildLocator, 'Under 1')
}

async setThirdChildAge() {
    await this.commands.clickWebElement(this.thirdChildLocator)
    await this.commands.selectDataInDropdown(this.thirdChildLocator, '7')
}

async clickDoneInTravelers() {
    await this.commands.clickWebElement(this.doneButton);
}

async totalTravelersSum(numberAdults, numberChildren) {
    const totalDisplayedTravelers = await this.commands.getTextOfWebElement(this.travelersLocator);

    const tempSplit = await totalDisplayedTravelers.split(' ')[0];
    const numberOfDisplayedTravelers = await Number(tempSplit.substring(10,12));

    return numberOfDisplayedTravelers === Number(numberAdults)+Number(numberChildren);
}


//TC-24
async clickSignIn() {
    await this.commands.clickWebElement(this.signIn);
}

async clickFeedbackLink() {
    await this.commands.clickWebElement(this.feedbackLink);
}

async switchToDirectWordHandle() {
    const directWord = await this.commands.getHandle();
    const allHandles = await this.commands.getHandles();
    for (const handle of allHandles) {
        if (handle !== directWord) {
            this.commands.switchToWindowHandle(handle);
            break;
        }
    }
}

async clickSubmitButton() {
    await this.commands.clickWebElement(this.submitButton);
}

async isEmptyFeedbackErrorDisplayed() {
    return await this.commands.isWebElementDisplayed(this.feedbackError);
}

async isRedDotsBoxDisplayed() {
    return await this.commands.isWebElementDisplayed(this.errorRedDots);
}

//TC-25
async chooseRating (stars) {
    switch (stars) {
        case '1-star':
            await this.commands.clickWebElement(this.starRate_1);
            break;

        case '2-star':
            await this.commands.clickWebElement(this.starRate_2);
            break;

        case '3-star':
            await this.commands.clickWebElement(this.starRate_3);
            break;

        case '4-star':
            await this.commands.clickWebElement(this.starRate_4);
            break;

        case '5-star':
            await this.commands.clickWebElement(this.starRate_5);
            break;

        default:
            break;
    }
}

async typeInComment(data) {
    await this.commands.typeInWebElement(this.commentBox, data);
}

async chooseReturnPossibility(data, fieldName) {
    switch (fieldName.toLowerCase()) {
        case 'how likely are you to return to hotels.com?':
            await this.commands.selectDataInDropdown(this.willYouReturn, data);
            break;
        case 'prior to this visit, have you ever booked on hotels.com?':
            await this.commands.clickWebElement(this.everBooked, data);
            break;    
        case 'did you accomplish what you wanted to do on this page?':
            await this.commands.clickWebElement(this.didYouAccomplish, data);
            break;    
        default:
            break
    }
}

async isFeedbackDisplayed() {
    return await this.commands.isWebElementDisplayed(this.successfulFeedback);
}

//TC-30
async scrollToGetTheApp(){
    await this.commands.scrollToWebElement(this.getTheAppButtonLocator)
}

async enterPhoneNumber(data) {
    await this.commands.typeInWebElement(this.phoneNumberBoxLocator, data);
}

async clickGetTheAppButton() {
    await this.commands.clickWebElement(this.getTheAppButtonLocator);
}

async isErrorWrongNumberDisplayed() {
    return await this.commands.isWebElementDisplayed(this.errorMessageValidNumber);
}

//TC-31
async clickEnglishLanguageButton() {
    await this.commands.clickWebElement(this.englishLanguageLocator);
}

async clickSpanishLanguageButton() {
    await this.commands.clickWebElement(this.spanishLanguageLocator);
}

async clickLanguageOption() {
    await this.commands.clickWebElement(this.languageDropdown);
    await this.commands.selectDataInDropdown(this.languageDropdown, "Español (Estados Unidos)");
}

async clickLanguageOptionEnglish() {
    await this.commands.clickWebElement(this.languageDropdown);
    await this.commands.selectDataInDropdown(this.languageDropdown, "English (United States)");
}

async changeLanguage(language) {
    switch (language) {
        case 'English':
            await this.commands.clickWebElement(this.englishLanguageLocator);
            await this.commands.clickWebElement(this.saveButtonLocator);
            break;
        case 'Español':
            await this.commands.clickWebElement(this.spanishLanguageLocator);
            await this.commands.clickWebElement(this.saveButtonLocator);
            break;    
        default:
            break;
    }
}

async selectLanguageFromDropDown() {
    await this.commands.selectDataInDropdown(this.languageDropdown);
}

async clickSaveInSpanish() {
    await this.commands.clickWebElement(this.guardarButtonLocator);
}

async clickSaveLanguageButton() {
    await this.commands.clickWebElement(this.saveButtonLocator);
}

async isSpanishLanguageDisplayed() {
    return await this.commands.isWebElementDisplayed(this.spanishLanguageLocator);
}

async isEnglishLanguageDisplayed() {
    return await this.commands.isWebElementDisplayed(this.englishLanguageLocator);
}



    // functions to interact with the web-Elements on the HomePage

    async enterDestination(destination) {
        await this.commands.clickWebElement(this.goingToLocator);
        await this.commands.typeInWebElement(this.goingToTypeLocator, destination);
    }

    async selectFromSuggestedDestinations(userChoice) {
        await this.commands.selectFromAutoSuggestion(this.autoSuggestionsLocator, userChoice);
    }

    async openCalendar() {
        await this.commands.clickWebElement(this.calendarOpenLocator);
    }

    async selectCheckInDate(date) {
        // date = "December 5 2022"
        // 'December', '5', '2022'
        const dateArray = date.split(' ');
        await this.goToMonth(`${dateArray[0]} ${dateArray[2]}`);
        const allDatesLocator = this.allDatesLocator_starts + date.substring(0,3) + this.allDatesLocator_ends;
        await this.commands.selectDateInCalendar(allDatesLocator, dateArray[1]);
    }

    async selectCheckOutDate(date) {
        const dateArray = date.split(' ');
        await this.goToMonth(`${dateArray[0]} ${dateArray[2]}`);
        const allDatesLocator = this.allDatesLocator_starts + date.substring(0,3) + this.allDatesLocator_ends;
        await this.commands.selectDateInCalendar(allDatesLocator, dateArray[1]);
    }

    async clickDoneOnCalendar() {
        await this.commands.clickWebElement(this.calendarDoneButtonLocator);
    }

    async clickToGoToNextCalendar() {
        await this.commands.clickWebElement(this.nextCalendarButtonLocator);
    }

    async clickToGoToPrevCalendar() {
        await this.commands.clickWebElement(this.prevCalendarButtonLocator);
    }

    // 'May 2023'
    async goToMonth(monthYear) {
        /**
         * using leftSideCalendarHeaderLocator get headerElement
         * find text of webElement
         * if (text NOT equal to monthYear) 
         *      click >
         */
        let count = 1;
        while(count<=12) {
            const monthHeader = await this.commands.getTextOfWebElement(this.leftSideCalendarHeaderLocator);
            console.log(`\n monthHeader -> ${monthHeader} \n`);
            if (monthHeader.localeCompare(monthYear) === 0) {
                break;
            }
            await this.commands.clickWebElement(this.nextCalendarButtonLocator);
            await browser.pause(1000);
            count++;
        }
    }

}

module.exports = HomePage;