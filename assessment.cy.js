describe('orange test', () => 
    it('passes', () => {

it('Test Scripts for Client Side Delay')

//Ensure user can launch the application url
cy.visit('https://www.uitestingplayground.com/')
cy.wait(10000)
//Ensure user can access Client Side Delay feature
cy.get(':nth-child(2) > :nth-child(2) > h3 > a').click()
cy.wait(10000)
cy.get('#ajaxButton').click()

it('Test Scripts for Dynamic Table')
//Ensure user can launch the application url
cy.visit('https://www.uitestingplayground.com/')
cy.wait(10000)
//Ensure user can access the Dynamic Table feature successfully
cy.get(':nth-child(3) > :nth-child(2) > h3 > a').click()

it('Test Scripts SAMPLE APP')
cy.visit('https://www.uitestingplayground.com/')
cy.wait(10000)
//Ensure user can access the sample App feature successfully
cy.get(':nth-child(4) > :nth-child(2) > h3 > a').click()
//Ensure user can inputs username (unable to automate the commentted test scripts below because the elements in those fields comes with a forward slash, which is throwing an error)
//cy.get('#34 f3135a5-145f-c09e-4463-7f237921f3d4').type('emmanuelene4@gmail.com')
//Ensure user can inputs password
//cy.get('#30 fe7b82e-d973-8702-e39e-cf16ee0d6f85').type('pwd')
//Ensure user can Login by clicking on Login button
cy.get('#login').click()

//Ensure user can access the Shadow Dom Feature successfully
//Launch URL
cy.visit('https://www.uitestingplayground.com/')
//Ensure user can access the Shadow Dom option
cy.get(':nth-child(5) > :nth-child(2) > h3 > a').click()

//Ensure user can access Home Button
cy.get(':nth-child(1) > .nav-link').click()

//Ensure user can access the Alert option
cy.get(':nth-child(5) > :nth-child(3) > h3 > a').click()

//Ensure user can access Home Button
cy.get(':nth-child(1) > .nav-link').click()
//Ensure user can access the File Upload option
cy.get(':nth-child(5) > :nth-child(4) > h3 > a').click()
cy.get('iframe').click()









/*it('Ensure user can launch the application url')
cy.visit('https://www.uitestingplayground.com/')
it('Ensure user can access the Sample App feature successfully')
cy.get(':nth-child(4) > :nth-child(2) > h3 > a').click()*/

/*cy.get('#\35 f67bc51-d432-f763-6f72-128b05ba9f7a').type('myuser')
cy.get('#\35 30c3fb6-adcf-b489-1a01-e5d1db825d33').type(pwd)
cy.get('#login').click*/



/*cy.get(':nth-child(2) > :nth-child(2) > h3 > a').click()
cy.wait(10000)
cy.get(':nth-child(2) > :nth-child(2) > h3 > a').click()
cy.wait(10000)
cy.get(':nth-child(2) > :nth-child(2) > h3 > a').click()
cy.wait(10000)*/
    

/*it('Test Scripts for Dynamic Table')
cy.visit('https://www.uitestingplayground.com/')
cy.get(':nth-child(2) > :nth-child(2) > h3 > a').click()
cy.get(':nth-child(2) > :nth-child(2) > h3 > a').click()
cy.get(':nth-child(2) > :nth-child(2) > h3 > a').click()
cy.get(':nth-child(2) > :nth-child(2) > h3 > a').click()
cy.get(':nth-child(2) > :nth-child(2) > h3 > a').click()
cy.get(':nth-child(2) > :nth-child(2) > h3 > a').click()*/

//it('Ensure user can access Sample App')
//cy.visit('https://www.uitestingplayground.com/')

    })



)

