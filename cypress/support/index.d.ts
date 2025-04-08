
/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    /**
     * Custom command to check tooltip visibility on hover
     * @example cy.checkTooltip('.badge', 'Approved')
     */
    checkTooltip(trigger: string, tooltipText: string): Chainable<Element>
    
    /**
     * Custom command to test table column headers
     * @example cy.checkTableHeaders('.ag-theme-alpine', ['Shift', 'Volume'])
     */
    checkTableHeaders(tableSelector: string, expectedHeaders: string[]): Chainable<Element>
    
    /**
     * Custom command to test section collapse/expand
     * @example cy.toggleSection('Capacity')
     */
    toggleSection(sectionTitle: string): Chainable<Element>
    
    /**
     * Custom command to test tab navigation
     * @example cy.switchTab('Total P2PDL')
     */
    switchTab(tabName: string, parentSelector?: string): Chainable<Element>
  }
}
