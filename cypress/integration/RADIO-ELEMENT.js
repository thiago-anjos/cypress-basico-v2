// type definitions for Cypress object "cy"
// <reference types="cypress" />

describe("Central de Atedimento ao Cliente TAT - 3", () => {
  beforeEach(() => {
    cy.visitFilled();
  });

  it("Marca um tipo de atendimento feeback", function () {
    cy.get('input[type="radio"][value="feedback"]')
      .check()
      .should("have.value", "feedback");
  });

  it("Marca cada tipo de atendimento", function () {
    cy.get('input[type="radio"][name="atendimento-tat"]')
      .should("have.length", 3)
      .each(function ($radio) {
        cy.wrap($radio).check();
        cy.wrap($radio).should("be.checked");
      });
  });
});
