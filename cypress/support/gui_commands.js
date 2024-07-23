Cypress.Commands.add(
  "login",
  (
    user = Cypress.env("user_name"),
    password = Cypress.env("user_password")
  ) => {
    const login = () => {
      cy.visit("/users/sign_in");

      cy.get("[data-qa-selector='login_field']").type(user);
      cy.get("[data-qa-selector='password_field']").type(password, {
        log: false,
      });
      cy.get("[data-qa-selector='sign_in_button']").click();
    };

    login();
  }
);

Cypress.Commands.add("logout", () => {
  cy.login();
  cy.get('a[data-toggle="dropdown"][href="/root"]').click();

  cy.get('a[data-qa-selector="sign_out_link"]').click();
  cy.get("#login-pane").should("be.visible");
});
