/// <reference types="cypress"/>

describe("Create a new Project", () => {
  it("successfully", () => {
    let randomNumber = Math.floor(Math.random() * 50);
    cy.login();
    cy.visit("http://localhost:7171/dashboard/projects");
    cy.get('a[class="btn btn-success"][href="/projects/new"]').click();
    cy.get("#blank-project-name > .project-name > #project_name").type(
      `TESTE_GUI${randomNumber}`
    );
    cy.get("#project_path").should("have.value", `teste_gui${randomNumber}`);
    cy.get("#project_visibility_level_20").check().and("be.checked");
    cy.get("#blank-project-pane > #new_project > .btn-success").click();
    cy.get(".flash-notice > span").should(
      "contain",`${randomNumber}` 
    );
  });
});
