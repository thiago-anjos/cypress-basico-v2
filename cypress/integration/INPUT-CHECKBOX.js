describe("Central de Atedimento ao Cliente TAT", () => {
  beforeEach(() => {
    cy.visitFilled();
    //access fixture data
    cy.fixture("example").as("user");
  });

  it("Marcar todos os checkbox e desmarca o último", function () {
    cy.get("input[type='checkbox']")
      .check()
      .last()
      .uncheck()
      .should("not.be.checked");
  });
});
