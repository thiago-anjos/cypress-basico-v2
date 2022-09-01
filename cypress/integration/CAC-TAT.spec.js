// type definitions for Cypress object "cy"
// <reference types="cypress" />

describe("Central de Atedimento ao Cliente TAT", () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:5500/src/");
    //access fixture data
    cy.fixture("example").as("user");
  });

  it("Verifica o titulo da sua aplicação", () => {
    cy.title().should("be.equal", "Central de Atendimento ao Cliente TAT");
  });

  it("preenche os campos obrigatórios e envia o formulário", function () {
    const longText =
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
    cy.fillMandatoryFieldsSubmit({
      user: this.user,
      longText,
      emailError: false,
    });

    cy.get(".success").should("be.visible");
  });

  it("exibe mensagem de erro ao submeter o formulário com um email com formatação inválida", function () {
    cy.fillMandatoryFieldsSubmit({
      user: this.user,
      longText: "",
      emailError: true,
    });

    cy.get(".error").should("be.visible");
  });

  it("Campo telefone continua vazio quando preenchido com valor não númerico", function () {
    cy.get("#phone").type("abcdefghij").should("have.value", "");
  });

  it("exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário", function () {
    cy.fillMandatoryFieldsSubmit({
      user: this.user,
      longText: "",
      emailError: false,
    });
    cy.get("#phone").type("11960764639");
    cy.get('button[type="submit"]').click();
  });

  it("preenche e limpa o campos nome", function () {
    cy.get("#firstName")
      .type(this.user.name)
      .should("have.value", this.user.name)
      .clear()
      .should("have.value", "");
  });

  it("exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios", () => {
    cy.get('button[type="submit"]').click();
    cy.get(".error").should("be.visible");
  });

  it("envia o formulário utilizando os comandos customizados", function () {
    cy.fillMandatoryFieldsSubmit({
      user: this.user,
      longText: "",
      emailError: false,
    });
  });
});
