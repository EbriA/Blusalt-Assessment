# Blusalt-Assessment - Test Automation using Cypress
The following are steps taken to perform the test automation.
**Under Client Side Delay Module**
- I wrote a line of code to launch this URL: https://www.uitestingplayground.com
- I added wait time of 10000: cy.wait(10000)
- // I Ensure user can access Client Side Delay feature
- cy.get(':nth-child(2) > :nth-child(2) > h3 > a').click()
- Again I added wait time of 10000 : cy.wait(10000)
- I click a button by writing this line; cy.get('#ajaxButton').click()

- **Under Dynamic Table module**
- I launch the application url; cy.visit('https://www.uitestingplayground.com/')
- I added wait time of 10000: cy.wait(10000)
- //Ensure user can access the Dynamic Table module successfully
- Using this command: cy.get(':nth-child(3) > :nth-child(2) > h3 > a').click()

- **Under Sample App**
- I launch the application url: cy.visit('https://www.uitestingplayground.com/')
- I added wait: cy.wait(10000)
- //Ensure user can access the sample App module successfully using this;
- cy.get(':nth-child(4) > :nth-child(2) > h3 > a').click()
- //Ensure user can click on the button using yhis command;
- cy.get('#login').click()

**Under Shadow Dom module**
I launched the url: cy.visit('https://www.uitestingplayground.com/')
//Ensure user can access the Shadow Dom module using this command;
cy.get(':nth-child(5) > :nth-child(2) > h3 > a').click()

//Ensure user can access Home Button
cy.get(':nth-child(1) > .nav-link').click()

//Ensure user can access the Alert option
cy.get(':nth-child(5) > :nth-child(3) > h3 > a').click()

//Ensure user can access Home Button using this command;
cy.get(':nth-child(1) > .nav-link').click()

**Under File Upload module**
I launched the url: cy.visit('https://www.uitestingplayground.com/')
//Ensure user can access the File Upload option usinf the command below;
cy.get(':nth-child(5) > :nth-child(4) > h3 > a').click()
cy.get('iframe').click()
