
describe('Plan Deep Dive Section', () => {
  beforeEach(() => {
    cy.visit('/');
    // Make sure to wait for page to load completely
    cy.get('h1').should('exist');
    
    // If plan deep dive section is collapsed, expand it
    cy.contains('Plan Deep Dive').closest('.section-header').then($header => {
      if ($header.find('.chevron-right').length > 0) {
        cy.wrap($header).click();
      }
    });
  });

  it('should display the section with tabs', () => {
    cy.contains('Plan Deep Dive').should('be.visible');
    cy.contains('Shift Visualization').should('be.visible');
    cy.contains('CPT Risk Profile').should('be.visible');
    cy.contains('Plan Details').should('be.visible');
  });

  it('should show Shift Visualization tab by default with chart', () => {
    cy.get('[data-state="active"]').contains('Shift Visualization').should('exist');
    
    // Check for chart elements - updated for more specific targeting
    cy.get('.recharts-responsive-container').should('exist');
    cy.get('.recharts-yAxis .recharts-cartesian-axis-tick').should('have.length.at.least', 1);
  });

  it('should navigate to CPT Risk Profile tab and show AG Grid', () => {
    cy.contains('CPT Risk Profile').click();
    cy.get('[data-state="active"]').contains('CPT Risk Profile').should('exist');
    
    // Check for AG Grid elements
    cy.get('.ag-center-cols-container').should('exist');
    cy.get('.ag-header-cell').contains('Production Type').should('be.visible');
    cy.get('.ag-header-cell').contains('Lane').should('be.visible');
  });

  it('should navigate to Plan Details tab and show AG Grid', () => {
    cy.contains('Plan Details').click();
    cy.get('[data-state="active"]').contains('Plan Details').should('exist');
    
    // Check for AG Grid elements
    cy.get('.ag-center-cols-container').should('exist');
    cy.get('.ag-header-cell').contains('Shift').should('be.visible');
    cy.get('.ag-header-cell').contains('Box Aggregation').should('be.visible');
    cy.get('.ag-header-cell').contains('Scheduled Volume').should('be.visible');
  });

  it('should maintain state when switching between tabs', () => {
    // Navigate to CPT Risk Profile tab
    cy.contains('CPT Risk Profile').click();
    cy.get('[data-state="active"]').contains('CPT Risk Profile').should('exist');
    
    // Navigate to Plan Details tab
    cy.contains('Plan Details').click();
    cy.get('[data-state="active"]').contains('Plan Details').should('exist');
    
    // Navigate back to Shift Visualization tab
    cy.contains('Shift Visualization').click();
    cy.get('[data-state="active"]').contains('Shift Visualization').should('exist');
    cy.get('.recharts-responsive-container').should('exist');
  });
});
