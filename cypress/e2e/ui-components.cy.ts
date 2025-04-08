
describe('UI Components', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  describe('Tooltip Component', () => {
    it('should display basic tooltips on hover', () => {
      // Find a button with tooltip (e.g., the Copy button)
      cy.get('button svg').eq(1).parent().as('copyButton');
      
      // Check tooltip appears on hover
      cy.get('@copyButton').trigger('mouseenter');
      cy.contains('Copy Plan').should('be.visible');
      
      // Check tooltip disappears on mouse leave
      cy.get('@copyButton').trigger('mouseleave');
      cy.contains('Copy Plan').should('not.exist');
    });
    
    it('should display enhanced tooltips with rich content', () => {
      // Get the status badge with rich tooltip
      cy.contains('Approved').parent().as('statusBadge');
      
      // Check enhanced tooltip appears with all expected content
      cy.get('@statusBadge').trigger('mouseenter');
      cy.contains('Approved at 4/1/25').should('be.visible');
      cy.contains('Updated at 4/1/25').should('be.visible');
      cy.contains('Scan Data').should('be.visible');
      cy.contains('Last received').should('be.visible');
      
      // Check tooltip disappears
      cy.get('@statusBadge').trigger('mouseleave');
      cy.contains('Approved at 4/1/25').should('not.exist');
    });
    
    it('should display tooltips with proper positioning', () => {
      // Get the status badge with rich tooltip
      cy.contains('Approved').parent().as('statusBadge');
      
      // Trigger tooltip and check it appears below the badge (as specified in the side prop)
      cy.get('@statusBadge').trigger('mouseenter');
      
      // The tooltip should be in the document and positioned correctly
      cy.contains('Approved at 4/1/25')
        .should('be.visible')
        .parent()
        .should('have.attr', 'data-side', 'bottom');
    });
  });

  describe('Badge Component', () => {
    it('should render badges with correct styling', () => {
      // Check the approved status badge exists with correct styling
      cy.contains('Approved')
        .parent()
        .should('have.class', 'badge')
        .and('have.css', 'border-radius', '9999px'); // Checking the rounded-full class effect
      
      // Check icon exists inside badge
      cy.contains('Approved')
        .parent()
        .find('svg')
        .should('exist');
    });
  });
});
