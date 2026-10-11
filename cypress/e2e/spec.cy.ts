describe('CVs Test', () => {
  it('Test Header component', () => {
    cy.visit('/')
    cy.contains('Julio Cesar')
  })

  it('Test work-experience component', () => {
    cy.visit('/')
    cy.contains('Backend Developer')
    cy.contains('Frontend Developer')
  })

  it('Test education component', () => {
    cy.visit('/')
    cy.contains('education works!')
  })

  it('Test languages component', () => {
    cy.visit('/')
    cy.contains('languages works!')
  })

  it('Test skills component', () => {
    cy.visit('/')
    cy.contains('skills works!')
  })

  it('Test certificates component', () => {
    cy.visit('/')
    cy.contains('certificates works!')
  })

  it('Test interests component', () => {
    cy.visit('/')
    cy.contains('interests works!')
  })
})
