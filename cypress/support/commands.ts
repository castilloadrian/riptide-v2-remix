// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }

/**
 * Custom command to check tooltip visibility on hover
 */
Cypress.Commands.add('checkTooltip', (trigger, tooltipText) => {
  cy.get(trigger).trigger('mouseenter');
  cy.contains(tooltipText).should('be.visible');
  cy.get(trigger).trigger('mouseleave');
  cy.contains(tooltipText).should('not.exist');
});

/**
 * Custom command to test table column headers
 */
Cypress.Commands.add('checkTableHeaders', (tableSelector, expectedHeaders) => {
  cy.get(tableSelector).within(() => {
    expectedHeaders.forEach(header => {
      cy.get('.ag-header-cell').contains(header).should('be.visible');
    });
  });
});

/**
 * Custom command to test section collapse/expand
 */
Cypress.Commands.add('toggleSection', (sectionTitle) => {
  // Click on section header to collapse
  cy.contains(sectionTitle).click();
  
  // Check if content is not visible (collapsed)
  cy.get('.section-content.collapsed').should('exist');
  
  // Click again to expand
  cy.contains(sectionTitle).click();
  
  // Check if content is visible (expanded)
  cy.get('.section-content.expanded').should('exist');
});

/**
 * Custom command to test tab navigation
 */
Cypress.Commands.add('switchTab', (tabName, parentSelector = '') => {
  if (parentSelector) {
    cy.get(parentSelector).contains(tabName).click();
  } else {
    cy.contains(tabName).click();
  }
  cy.get('[data-state="active"]').contains(tabName).should('exist');
});

// Declare global Cypress namespace for TypeScript
declare global {
  namespace Cypress {
    interface Chainable {
      checkTooltip(trigger: string, tooltipText: string): Chainable<Element>
      checkTableHeaders(tableSelector: string, expectedHeaders: string[]): Chainable<Element>
      toggleSection(sectionTitle: string): Chainable<Element>
      switchTab(tabName: string, parentSelector?: string): Chainable<Element>
    }
  }
}

// Export empty object to make TypeScript treat this as a module
export {};
