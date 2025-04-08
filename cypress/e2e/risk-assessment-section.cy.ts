
describe('Risk Assessment Section', () => {
  beforeEach(() => {
    cy.visit('/');
    // Make sure to wait for page to load completely
    cy.get('h1').should('exist');
    
    // If risk assessment section is collapsed, expand it
    cy.contains('Risk Assessment').closest('.section-header').then($header => {
      if ($header.find('.chevron-right').length > 0) {
        cy.wrap($header).click();
      }
    });
  });

  it('should display Risk Assessment section with tabs', () => {
    cy.contains('Risk Assessment').should('be.visible');
    cy.contains('Plan Visualization').should('be.visible');
    cy.contains('Total P2PDL').should('be.visible');
    cy.contains('RoW Volume').should('be.visible');
    cy.contains('Grocery (Complexity)').should('be.visible');
    cy.contains('Time to CPT Range').should('be.visible');
    cy.contains('Same Day Ship').should('be.visible');
  });

  it('should show Plan Visualization tab by default with AG Grid', () => {
    cy.get('[data-state="active"]').contains('Plan Visualization').should('exist');
    cy.get('.ag-center-cols-container').should('exist');
    cy.get('.ag-header-cell').contains('Date').should('be.visible');
    cy.get('.ag-header-cell').contains('Item').should('be.visible');
  });

  it('should navigate to Total P2PDL tab and show correctly', () => {
    cy.contains('Total P2PDL').click();
    cy.get('[data-state="active"]').contains('Total P2PDL').should('exist');
    cy.get('.ag-header-cell').contains('Shift').should('be.visible');
    cy.get('.ag-header-cell').contains('Volume').should('be.visible');
  });

  it('should navigate to RoW Volume tab and show correctly', () => {
    cy.contains('RoW Volume').click();
    cy.get('[data-state="active"]').contains('RoW Volume').should('exist');
    cy.get('.ag-header-cell').contains('Shift').should('be.visible');
    cy.get('.ag-header-cell').contains('Volume').should('be.visible');
  });

  it('should navigate to Grocery (Complexity) tab and show correct columns', () => {
    cy.contains('Grocery (Complexity)').click();
    cy.get('[data-state="active"]').contains('Grocery (Complexity)').should('exist');
    cy.get('.ag-header-cell').contains('Shift').should('be.visible');
    cy.get('.ag-header-cell').contains('% (Grocery / Total Volume)').should('be.visible');
    cy.get('.ag-header-cell').contains('% (Grocery / Auto Volume)').should('be.visible');
  });

  it('should navigate to Time to CPT Range tab and show correct columns', () => {
    cy.contains('Time to CPT Range').click();
    cy.get('[data-state="active"]').contains('Time to CPT Range').should('exist');
    cy.get('.ag-header-cell').contains('Shift').should('be.visible');
    cy.get('.ag-header-cell').contains('3-6').should('be.visible');
    cy.get('.ag-header-cell').contains('6-12').should('be.visible');
    cy.get('.ag-header-cell').contains('12-24').should('be.visible');
    cy.get('.ag-header-cell').contains('24-30').should('be.visible');
    cy.get('.ag-header-cell').contains('>30').should('be.visible');
  });

  it('should navigate to Same Day Ship tab and show correct columns', () => {
    cy.contains('Same Day Ship').click();
    cy.get('[data-state="active"]').contains('Same Day Ship').should('exist');
    cy.get('.ag-header-cell').contains('Shift').should('be.visible');
    cy.get('.ag-header-cell').contains('Total').should('be.visible');
    cy.get('.ag-header-cell').contains('First CPT').should('be.visible');
    cy.get('.ag-header-cell').contains('Second CPT').should('be.visible');
    cy.get('.ag-header-cell').contains('Third CPT').should('be.visible');
  });

  it('should maintain state when switching between tabs', () => {
    cy.contains('Grocery (Complexity)').click();
    cy.get('[data-state="active"]').contains('Grocery (Complexity)').should('exist');
    
    cy.contains('Same Day Ship').click();
    cy.get('[data-state="active"]').contains('Same Day Ship').should('exist');
    
    cy.contains('Plan Visualization').click();
    cy.get('[data-state="active"]').contains('Plan Visualization').should('exist');
  });
});
