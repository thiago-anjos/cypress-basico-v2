// type definitions for Cypress object "cy"
// <reference types="cypress" />

describe("Central de Atedimento ao Cliente TAT", () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:5500/src/");
  });

  it("verifica link dentro do href", () => {
    const link = cy.get("#privacy a");
    link.should("have.attr", "href").and("include", "privacy.html");
  });

  it("verifica se o href tem targe blank nova janela", () => {
    const link = cy.get("#privacy a");
    link.should("have.attr", "target", "_blank");
  });

  it("acessa pagina privacidade ao clicar no link: politica de privacidade e verifica o título", function () {
    cy.get("#privacy a").invoke("removeAttr", "target").click();
    cy.get("#title").contains("CAC TAT - Política de privacidade");
  });
});
