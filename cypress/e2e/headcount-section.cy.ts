
describe('Headcount Section', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should display the Headcount section with collapsible header', () => {
    cy.contains('Headcount').should('be.visible');
  });

  it('should display Needed Headcount table with correct columns', () => {
    cy.contains('Needed Headcount').should('be.visible');
    
    // Check for each column header in the Headcount table
    cy.contains('Shift').should('be.visible');
    cy.contains('AB').should('be.visible');
    cy.contains('AUTO').should('be.visible');
    cy.contains('CORE').should('be.visible');
    cy.contains('CP').should('be.visible');
    cy.contains('EP').should('be.visible');
    cy.contains('EXTRA').should('be.visible');
    cy.contains('GL').should('be.visible');
    cy.contains('KT').should('be.visible');
    cy.contains('TH').should('be.visible');
    cy.contains('Total').should('be.visible');
  });

  it('should display data in the Headcount table', () => {
    // Check if the table has data rows
    cy.get('.ag-theme-alpine')
      .find('.ag-row')
      .should('have.length.greaterThan', 0);
      
    // Verify some specific data from the table
    cy.contains('Weds-1-Day').should('be.visible');
    cy.contains('Sun-Day').should('be.visible');
  });

  it('should be able to collapse and expand the Headcount section', () => {
    // Click on the Headcount header to collapse
    cy.contains('Headcount').click();
    
    // Check if content is not visible
    cy.get('.section-content.collapsed').should('exist');
    
    // Click again to expand
    cy.contains('Headcount').click();
    
    // Check if content is visible
    cy.get('.section-content.expanded').should('exist');
  });

  it('should verify total column shows correct sums', () => {
    // Verify a few total values match the expected sums
    cy.contains('Weds-1-Day')
      .parent('.ag-row')
      .contains('55')
      .should('be.visible');

    cy.contains('Thurs-1-Day')
      .parent('.ag-row')
      .contains('97')
      .should('be.visible');
      
    cy.contains('Sun-Day')
      .parent('.ag-row')
      .contains('110')
      .should('be.visible');
  });
});
