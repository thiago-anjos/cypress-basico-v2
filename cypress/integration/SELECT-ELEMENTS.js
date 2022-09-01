// type definitions for Cypress object "cy"
// <reference types="cypress" />

describe("Central de Atedimento ao Cliente TAT - 3", () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:5500/src/");
  });

  it("Selecione mentoria no select do formulário", function () {
    cy.get("#product").select("Mentoria").should("have.value", "mentoria");
  });

  it("Selecione um produto na lista suspensa por seu value 'youtube'", function () {
    cy.get("#product").select("youtube").should("have.value", "youtube");
  });
  it("Selecione um produto na lista suspensa por seu indice 'blog - 1'", function () {
    cy.get("#product").select(1).should("have.value", "blog");
  });
});
