# Lab8_Starter

## Author(s)

Ryan Keegan

## Check your understanding q's (FILL OUT)
1. In your own words: Where would you fit your automated tests in your Bujo project development pipeline? (just write the letter)

1

2. Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.

No, because something like the "message feature" is too big to write a single unit test for. An attempt should be made to break up the feature into smaller components. Unit tests are intended to test smaller components of an overarching feature such as messaging. Not only would such a unit test be monolithic, but changing any part of the pipeline in messaging could potentially require rewriting the entire test making it unwieldy.

3. Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters

Yes, because it's a smaller component of an overarching feature which can be reasonably tested by a unit test. It is self contained and therefore the test won't require a rewrite whenever another part of the messaging feature pipeline is changed.

4. What do you expect to happen if we run our puppeteer tests with the field “headless” set to true?

Puppeteer will run the tests without the browser UI.

5. What would your beforeAll callback look like if you wanted to start from the settings page before every test case?

We'd call page.click('header img'); to have the software click on our settings button which would open the settings page. This would cause every test to start on our settings page.