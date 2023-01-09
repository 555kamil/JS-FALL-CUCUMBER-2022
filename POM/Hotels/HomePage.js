const Commands = require('../Commands');
const moment = require("moment/moment");

class HomePage {

    commands = new Commands();
    now = moment();

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

    // Sprint #1 Locators
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

async totalTravelersSum() {
    const totalDisplayedTravelers = await this.commands.getTextOfWebElement(this.travelersLocator);
    const numberOfDisplayedTravelers = await Number(totalDisplayedTravelers.split(' ')[0]);
    return numberOfDisplayedTravelers === numberAdults + numberChildren
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
        case '1 star':
            await this.commands.clickElement(this.starRate_1);
            break;

        case '2 stars':
            await this.commands.clickElement(this.starRate_2);
            break;

        case '3 stars':
            await this.commands.clickElement(this.starRate_3);
            break;

        case '4 stars':
            await this.commands.clickElement(this.starRate_4);
            break;

        case '5 stars':
            await this.commands.clickElement(this.starRate_5);
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



//*******************************************************************/
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