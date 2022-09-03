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
