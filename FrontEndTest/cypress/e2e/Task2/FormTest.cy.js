describe('Login by Form on Test Site', () => {

  it('Login succes', () => {

    var url1 = 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'

    var url2 = 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index'

    cy.visit(url1)

    cy.intercept(url2).as('Login')

    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input')
          .type("Admin")

    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input')
          .type("admin123")

    cy.get('.oxd-button').click()

    cy.wait('@Login').then((interception)=>{
      //cy.log(interception.response)
      expect(interception.response.statusCode).to.eq(200)
    })



  })
})