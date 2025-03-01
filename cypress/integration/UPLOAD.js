// type definitions for Cypress object "cy"
// <reference types="cypress" />

describe("Central de Atedimento ao Cliente TAT", () => {
  beforeEach(() => {
    cy.visitFilled();
  });

  it("Selecione um arquivo da pasta fixtures", function () {
    cy.get("#file-upload")
      .should("not.have.value")
      .selectFile("./cypress/fixtures/example.json")
      .should(function (input) {
        console.log(input);
        expect(input[0].files[0].name).to.equal("example.json");
      });
  });
});
