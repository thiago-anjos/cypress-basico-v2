describe("usando invokes", () => {
  beforeEach(() => {
    cy.visitFilled();
  });

  it("exibe e esconde as mensagens de sucesso e erro usando o .invoke", () => {
    cy.visitFilled();

    cy.get(".success")
      .should("not.be.visible")
      .invoke("show")
      .should("be.visible")
      .and("contain", "Mensagem enviada com sucesso.")
      .invoke("hide")
      .should("not.be.visible");
    cy.get(".error")
      .should("not.be.visible")
      .invoke("show")
      .should("be.visible")
      .and("contain", "Valide os campos obrigatórios!")
      .invoke("hide")
      .should("not.be.visible");
  });

  it("Preenche a area de texto usando o invoke", () => {
    const longText = Cypress._.repeat("0123456789", 20);

    cy.get("#open-text-area")
      .invoke("val", longText)
      .should("have.value", longText);
  });

  it("Ache o gato", () => {
    cy.get("#cat")
      .should("not.be", "visible")
      .invoke("show")
      .should("be.visible");
  });
});
