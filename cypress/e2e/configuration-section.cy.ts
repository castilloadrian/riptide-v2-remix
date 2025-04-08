
describe('Configuration Section', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should display the Configuration section with collapsible header', () => {
    cy.contains('Configuration').should('be.visible');
  });

  it('should be able to collapse and expand the Configuration section', () => {
    cy.toggleSection('Configuration');
  });

  it('should display Box Configuration table with correct columns', () => {
    const expectedHeaders = [
      'Shift', 'Start Time', 'End Time', 'Down Time', 'Hours', 
      'Lines', 'BPH', 'Grocery %', 'Core %', '2P %', '4P %'
    ];
    
    cy.contains('Box Configuration').should('be.visible');
    cy.checkTableHeaders('.ag-theme-alpine', expectedHeaders);
  });

  it('should display Kit Configuration table with correct columns', () => {
    const expectedHeaders = [
      'Shift', 'Start Time', 'End Time', 'Down Time', 'Hours', 'Lines', 'KPH'
    ];
    
    cy.contains('Kit Configuration').should('be.visible');
    cy.checkTableHeaders('.ag-theme-alpine', expectedHeaders);
  });

  it('should display data in both configuration tables', () => {
    // Box Configuration table should have data rows
    cy.contains('Box Configuration')
      .parent()
      .find('.ag-theme-alpine')
      .find('.ag-row')
      .should('have.length.greaterThan', 0);
    
    // Kit Configuration table should have data rows
    cy.contains('Kit Configuration')
      .parent()
      .find('.ag-theme-alpine')
      .find('.ag-row')
      .should('have.length.greaterThan', 0);
  });

  it('should display time values in the expected format', () => {
    // Check time format in Box Configuration table
    cy.contains('Box Configuration')
      .parent()
      .find('.ag-theme-alpine')
      .contains('06:00')
      .should('exist');
    
    // Check time format in Kit Configuration table
    cy.contains('Kit Configuration')
      .parent()
      .find('.ag-theme-alpine')
      .contains('06:00')
      .should('exist');
  });
  
  it('should display percentage values with % symbol', () => {
    // Find a cell with percentage in Box Configuration
    cy.contains('Box Configuration')
      .parent()
      .find('.ag-theme-alpine')
      .find('.ag-cell')
      .contains(/%/)
      .should('exist');
  });
});
