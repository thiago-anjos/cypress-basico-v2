describe("Central de Atedimento ao Cliente TAT", () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:5500/src/");
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
