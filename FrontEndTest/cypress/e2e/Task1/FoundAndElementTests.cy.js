describe('Site_And_Elements_Tests', () => {

  var url

  beforeEach(()=>{
    url = 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
    cy.request(url).as('response')
    //cy.visit(url)
  })

  it('Pass with 200', () => {
    cy.get('@response').then(
      (res)=>{

        expect(res.status).to.eq(200)
      }
    )
  });

  it('Element Found', ()=>{
    cy.get('@response').then(
      (res)=>{
        const parser = new DOMParser()
        const dom = parser.parseFromString(res.body, 'text/html')
        
        expect(dom.getElementById('app')).to.not.null
      }
    )
  })

  it('Element Not Found', ()=>{
    cy.get('@response').then(
      (res)=>{
        const parser = new DOMParser()
        const dom = parser.parseFromString(res.body, 'text/html')
        
        expect(dom.getElementById('test')).to.null
      }
    )
  })
      
})