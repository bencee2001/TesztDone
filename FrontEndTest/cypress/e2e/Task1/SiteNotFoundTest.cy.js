describe('Site Not Found Tests', () => {
    
  var url = 'https://openource-demo.orangehrmlive.com/web/index.php/auth/login'

  it('Fail with 404', () => {
    cy.request({
      method: 'GET',
      url: url,
      failOnStatusCode: false
    }).as('response')

    cy.get('@response').then(
      (res)=>{
        expect(res.status).to.eq(404)
      }
    )
  })
})