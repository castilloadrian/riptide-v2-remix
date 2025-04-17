
describe('Plan Header', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should display the Plan Header with correct components', () => {
    // Check for Plan header text
    cy.contains('🔍 Plan').should('be.visible');
    
    // Check for status badge
    cy.get('.badge').within(() => {
      cy.contains('Approved').should('be.visible');
      cy.get('svg').should('exist'); // CheckCircle icon
    });
  });

  it('should display tooltip with detailed information when hovering over status badge', () => {
    // Hover over the badge to show tooltip
    cy.contains('Approved').trigger('mouseenter');
    
    // Verify tooltip content appears
    cy.contains('Approved at 4/1/25 12:00 PM EST By Frodo Baggins').should('be.visible');
    cy.contains('Updated at 4/1/25 1:00 EST').should('be.visible');
    cy.contains('Scan Data').should('be.visible');
    cy.contains('ODL/PDL Data').should('be.visible');
    cy.contains('SHN Data').should('be.visible');
    
    // Move mouse away and verify tooltip disappears
    cy.contains('Approved').trigger('mouseleave');
    cy.contains('Approved at 4/1/25 12:00 PM EST By Frodo Baggins').should('not.exist');
  });

  it('should display select dropdowns for DC, Week and Version', () => {
    // Check all three selects exist
    cy.get('button[role="combobox"]').should('have.length', 3);
    
    // Check default values
    cy.get('button[role="combobox"]').eq(0).should('contain', 'NYC');
    cy.get('button[role="combobox"]').eq(1).should('contain', 'Week 23');
    cy.get('button[role="combobox"]').eq(2).should('contain', 'Version 1.0');
  });

  it('should be able to change dropdown values', () => {
    // Change DC dropdown
    cy.get('button[role="combobox"]').eq(0).click();
    cy.get('[role="option"]').contains('LAX').click();
    cy.get('button[role="combobox"]').eq(0).should('contain', 'LAX');
    
    // Change Week dropdown
    cy.get('button[role="combobox"]').eq(1).click();
    cy.get('[role="option"]').contains('Week 24').click();
    cy.get('button[role="combobox"]').eq(1).should('contain', 'Week 24');
    
    // Change Version dropdown
    cy.get('button[role="combobox"]').eq(2).click();
    cy.get('[role="option"]').contains('Version 2.0').click();
    cy.get('button[role="combobox"]').eq(2).should('contain', 'Version 2.0');
  });

  it('should have plan name input and update button without edit icon', () => {
    // Check for plan name input
    cy.contains('Plan Name').should('be.visible');
    cy.get('input[type="text"]').should('have.value', 'Weekly Production Plan');
    
    // Check that edit icon is not present
    cy.get('svg.w-4.h-4.text-blue-600').should('not.exist');
    
    // Check for update button
    cy.contains('button', 'Update').should('be.visible');
  });

  it('should have action buttons with tooltips', () => {
    // Check buttons exist
    cy.get('button svg').should('have.length.at.least', 4);
    
    // Check Filter button and popover
    cy.get('button svg').eq(0).parent().click();
    cy.contains('Planning Levers').should('be.visible');
    cy.contains('Enter Constraints').should('be.visible');
    cy.contains('TI Autostore').should('be.visible');
    cy.contains('Print to PDL').should('be.visible');
    cy.get('body').click();
    
    // Check Copy button tooltip
    cy.get('button svg').eq(1).parent().trigger('mouseenter');
    cy.contains('Copy Plan').should('be.visible');
    cy.get('button svg').eq(1).parent().trigger('mouseleave');
    
    // Check File button tooltip
    cy.get('button svg').eq(2).parent().trigger('mouseenter');
    cy.contains('Create New Plan').should('be.visible');
    cy.get('button svg').eq(2).parent().trigger('mouseleave');
    
    // Check Save button tooltip
    cy.get('button svg').eq(3).parent().trigger('mouseenter');
    cy.contains('Save Plan').should('be.visible');
    cy.get('button svg').eq(3).parent().trigger('mouseleave');
  });

  it('should have an Approve button', () => {
    cy.contains('button', 'Approve').should('be.visible');
  });

  it('should show toast notifications when action buttons are clicked', () => {
    // Test copy button toast
    cy.get('button svg').eq(1).parent().click();
    cy.contains('Copy action triggered').should('be.visible');
    
    // Test file button toast
    cy.get('button svg').eq(2).parent().click();
    cy.contains('File action triggered').should('be.visible');
    
    // Test save button toast
    cy.get('button svg').eq(3).parent().click();
    cy.contains('Save action triggered').should('be.visible');
  });

  it('should have a fixed bottom section that stays visible when scrolling', () => {
    // Force the page to be taller so we can scroll
    cy.window().then((win) => {
      win.document.body.style.height = '200vh';
    });
    
    // Initial check that fixed part contains the Plan Name
    cy.contains('Plan Name').should('be.visible');
    
    // Scroll down
    cy.scrollTo(0, 500);
    
    // Check that Plan Name is still visible (should be fixed to viewport)
    cy.contains('Plan Name').should('be.visible');
    
    // Check that the action buttons are still visible
    cy.get('button svg').eq(1).should('be.visible'); // Copy button
    cy.get('button svg').eq(2).should('be.visible'); // File button
    cy.get('button svg').eq(3).should('be.visible'); // Save button
    cy.contains('button', 'Approve').should('be.visible');
  });
});
