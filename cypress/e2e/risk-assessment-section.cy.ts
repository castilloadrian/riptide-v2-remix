
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
    cy.contains('Plan KPIs').should('be.visible');
  });

  it('should show Plan Visualization tab by default with AG Grid', () => {
    cy.get('[data-state="active"]').contains('Plan Visualization').should('exist');
    cy.get('.ag-center-cols-container').should('exist');
    cy.get('.ag-header-cell').contains('Shift').should('be.visible');
    cy.get('.ag-header-cell').contains('Kits').should('be.visible');
  });

  it('should navigate to Plan KPIs tab and show correctly', () => {
    cy.contains('Plan KPIs').click();
    cy.get('[data-state="active"]').contains('Plan KPIs').should('exist');
    
    // Check top row tables
    cy.contains('Total P2PDL').should('be.visible');
    cy.contains('RoW Volume').should('be.visible');
    cy.contains('Grocery (Complexity)').should('be.visible');
    
    // Check bottom row tables
    cy.contains('Time to CPT Range').should('be.visible');
    cy.contains('Same Day Ship').should('be.visible');
  });

  it('should show appropriate tables in Plan KPIs tab', () => {
    cy.contains('Plan KPIs').click();
    
    // Check Total P2PDL table
    cy.contains('Total P2PDL').parent().within(() => {
      cy.get('.ag-header-cell').contains('Shift').should('be.visible');
      cy.get('.ag-header-cell').contains('Volume').should('be.visible');
    });
    
    // Check RoW Volume table
    cy.contains('RoW Volume').parent().within(() => {
      cy.get('.ag-header-cell').contains('Shift').should('be.visible');
      cy.get('.ag-header-cell').contains('Volume').should('be.visible');
    });
    
    // Check Grocery table
    cy.contains('Grocery (Complexity)').parent().within(() => {
      cy.get('.ag-header-cell').contains('Shift').should('be.visible');
      cy.get('.ag-header-cell').contains('% (Grocery / Total Volume)').should('be.visible');
      cy.get('.ag-header-cell').contains('% (Grocery / Auto Volume)').should('be.visible');
    });
    
    // Check Time to CPT Range table
    cy.contains('Time to CPT Range').parent().within(() => {
      cy.get('.ag-header-cell').contains('3-6').should('be.visible');
      cy.get('.ag-header-cell').contains('6-12').should('be.visible');
    });
    
    // Check Same Day Ship table
    cy.contains('Same Day Ship').parent().within(() => {
      cy.get('.ag-header-cell').contains('Total').should('be.visible');
      cy.get('.ag-header-cell').contains('First CPT').should('be.visible');
    });
  });

  it('should maintain state when switching between tabs', () => {
    cy.contains('Plan KPIs').click();
    cy.get('[data-state="active"]').contains('Plan KPIs').should('exist');
    
    cy.contains('Plan Visualization').click();
    cy.get('[data-state="active"]').contains('Plan Visualization').should('exist');
  });

  it('should handle responsive design for tab navigation', () => {
    // Test on mobile viewport
    cy.viewport('iphone-6');
    cy.contains('Risk Assessment').should('be.visible');
    
    // Check that tabs are still accessible (may have different styling on mobile)
    cy.contains('Plan KPIs').click();
    cy.get('[data-state="active"]').contains('Plan KPIs').should('exist');
    
    // Reset viewport
    cy.viewport('macbook-15');
  });
});
