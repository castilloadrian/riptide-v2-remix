
describe('Capacity Section', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should display the Capacity section with collapsible header', () => {
    cy.contains('Capacity').should('be.visible');
  });

  it('should display Box Capacity table with correct columns', () => {
    cy.contains('Box Capacity').should('be.visible');
    
    // Check for each column header in the Box Capacity table
    cy.contains('Shift').should('be.visible');
    cy.contains('Available').should('be.visible');
    cy.contains('Planned').should('be.visible');
    cy.contains('Excess').should('be.visible');
  });

  it('should display Kit Overview table with correct columns', () => {
    cy.contains('Kit Overview').should('be.visible');
    
    // Check for each column header in the Kit Overview table
    cy.contains('Shift').should('be.visible');
    cy.contains('Need').should('be.visible');
    cy.contains('SoS On-Hand').should('be.visible');
    cy.contains('Live Needs').should('be.visible');
    cy.contains('Buffer').should('be.visible');
    cy.contains('Plan Create').should('be.visible');
  });

  it('should display data in both tables', () => {
    // Check if Box Capacity table has data rows
    cy.get('.ag-theme-alpine')
      .eq(0)
      .find('.ag-row')
      .should('have.length.greaterThan', 0);
    
    // Check if Kit Overview table has data rows
    cy.get('.ag-theme-alpine')
      .eq(1)
      .find('.ag-row')
      .should('have.length.greaterThan', 0);
  });

  it('should be able to collapse and expand the Capacity section', () => {
    // Click on the Capacity header to collapse
    cy.contains('Capacity').click();
    
    // Check if content is not visible
    cy.get('.section-content.collapsed').should('exist');
    
    // Click again to expand
    cy.contains('Capacity').click();
    
    // Check if content is visible
    cy.get('.section-content.expanded').should('exist');
  });
});
