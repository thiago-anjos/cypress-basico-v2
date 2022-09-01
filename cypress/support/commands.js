Cypress.Commands.add(
  "fillMandatoryFieldsSubmit",
  function ({ user, longText, emailError }) {
    cy.get("#firstName").type(user.name);
    cy.get("#lastName").type(user.lastName);
    emailError
      ? cy.get("#email").type(user.emailError)
      : cy.get("#email").type(user.email);
    longText === ""
      ? cy.get("#open-text-area").type("texto comum")
      : cy.get("#open-text-area").type(longText, { delay: 0 });
    // cy.get('button[type="submit"]').click();
    //using contains to match element with text
    cy.contains("button", "Enviar").click();
  }
);
