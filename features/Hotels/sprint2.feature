Feature: Sprint #2
Background: 
Given I am on hotels



@TC-20A
Scenario: Verify 'Terms And Conditions' page opens on new tab
When I click Sign In button on homepage
And  I click Sign Up link 
And  I click “Terms and Conditions” link
Then I verify “Terms and Conditions” page opens in new tab
And  I verify "Last revised" format 


@TC-20B
Scenario: Verify 'Privacy Statements' page opens on new tab
When I click Sign In button on homepage
And  I click Sign Up link 
And  I click “Privacy Statement” link
Then I verify “Privacy Statement” page opens in new tab
And  I verify 'Last updated' date format

@TC-21
Scenario: Verify Verification message for invalid sign in credentials
When I click on Sign In
And  I click on Sign In button
And  I enter 'abcd@#$%.com' as invalid email address
And  I enter '1234567' as invalid password
And  I click on Sign in button
Then I verify 'Email and password don't match. Please try again.' is displayed

@TC-22
Scenario: Verify error message for invalid data in SignUp form
When I click on Sign In
And  I click Sign Up link
And  I enter 'qwerty' as invalid email address
Then I verify "Enter a valid email" is 'displayed'
When I enter '@@##$$' as invalid first name
Then I verify "First name cannot contain special characters" is 'displayed'
When I enter '^&*%' as invalid last name
Then I verify "Last name cannot contain special characters" is 'displayed'
When I enter 'Test' in Password
Then I verify "Keep me signed in" is 'enabled'
And  I verify "Continue button" is 'NOT enabled'

@TC-23
Scenario: Verify Child-age dropdowns are same as number of Children selected
When I search Manhattan, NY
And  I enter Check-in date as 'Feb-10-2023'
And  I enter Check-out date as 'Feb-16-2023'
And  I click on Search button
And  I click on 5 from star-rating filter
And  I select 'Price' from sort-by dropdown
Then I verify all hotels in search results are *-rated as selected in above step
Then I verify all hotels are listed in increasing order by price

@TC-28
Scenario: Verify Child-age dropdowns are same as number of Children selected
When I click on Travelers
And  I select Children as '2'
Then I verify Children-age dropdown are '2'
And  I verify Plus-button is enabled
And  I verify minus-button is enabled
When I select Children as '6'
Then I verify Children-age dropdown are '6'
And  I verify Plus button is disabled
And  I verify minus-button is enabled
When I select Children as '5'
Then I verify Children-age dropdown are '5'
And  I verify Plus button is enabled
And  I verify minus-button is enabled

@TC-32
Scenario Outline: Verify password strength bar and messages
When I click on Sign In
And  I click Sign Up link
And  I enter 'qwerty' as invalid email address
And  I enter '@@##$$' as invalid first name
And  I enter '^&*%' as invalid last name
And  I enter '<password>' in Password
Then I verify Password strength bar is <strengthBar>
And  I verify Password strength message is <strengthMsg>
 Examples:
            | password        | strengthBar | strengthMsg |
            | abcd            | not         | Weak        |
            | abcd@123        | half        | Weak        |
            | abcd@12324      | almost      | Strong      |
            | abcd@12@pl@2    | completely  | Very Strong |

@TC-33
Scenario: Verify weak password messages
When I click Sign in button
And  I click Sign up button  
And  I enter 'user@test.com' in Email address
And  I enter 'fUser' in First name
And  I enter 'lUser' in Last name
And  I enter '<passw>' in Password
Then I verify '<msg1>' is displayed
And  I verify '<msg2>' message two is displayed
Examples:
            | passw    | msg1                                |  msg2                           |
            | abcd     | Includes 8-64 characters            | Combines letters and numbers    |
            | abcd@123 | Add more words that are less common | Avoid common character sequences|