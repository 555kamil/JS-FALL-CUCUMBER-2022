Feature: Sprint #1
Background: 
Given I am on hotels


@TC-17
Scenario: Verify past dates and back button on Current month's calendar is disabled
When I click on dates
And  I go to current month if not displayed
Then I verify past dates and back button are disabled


@TC-18
Scenario: Verify user can update number of guests on Home page
When I click on "Travelers"
When I select "Adults" as <numberAdults>
And I select "Children" as <numberChildren>
And I select first child age: 4
And I select second child age: Under 1
And I select third child age: 7
When I click Done
Then I verify total number of guests in sum of adults and children as same as selected on step 3 and 4

Examples:
| numberAdults | numberChildren |          
|     6        |       3        |       
    

@TC-24
Scenario: Verify error is displayed when user submits the empty feedback form
When I click on Sign In
And  I click "Feedback"
And  I click on Submit button
Then I verify error is displayed when user submits the empty feedback form
And  I verify star boxes section is in a red dotted box


@TC-25
Scenario: Verify user can submit feedback after completing the feedback form
When I click on "Sign In"
And  I click Feedback
And  I select "5-star" rating
And  I enter "Test" comment
And  I select "Unsure" for "How likely are you to return to Hotels.com?"
And  I select "Yes" for "Prior to this visit, have you ever booked on Hotels.com?"
And  I select "Yes" for "Did you accomplish what you wanted to do on this page?"
And  I click Submit button
Then I verify "THANK YOU FOR YOUR FEEDBACK." is displayed


@TC-30
Scenario: Verify invalid phone number error
When I scroll to "Get the app" button
And  I enter <phoneNumber> in Phone number
When I click on "Get the app" button
Then I verify 'Please enter a valid phone number.' error is displayed
Examples:
| phoneNumber |
| 0000000000  |


@TC-31
Scenario: Verify language can be changed successfully
When I click on "English" language
And I select "Español" in Language dropdown
And I click on "Save" button
Then I verify "Español" is displayed
When I click on "Español" language
And I select "English" in Language dropdown
And I click on "Guardar" button
Then I verify "English" is displayed
