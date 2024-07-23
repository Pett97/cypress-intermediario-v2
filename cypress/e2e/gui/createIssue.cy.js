/// <reference types="cypress"/>

import { faker } from "@faker-js/faker";

describe("Create Issue", () => {
  let issue = {
    title: `issue-${faker.datatype.uuid()}`,
    description: faker.random.words(2),
    project: {
      name: `project-${faker.datatype.uuid()}`,
      description: faker.random.words(2),
    },
  };

  beforeEach(() => {
    cy.login();
    cy.gui_createProject(issue.project);
  });

  it("sucess", () => {
    cy.gui_createIssue(issue);

    cy.get(".issue-details")
      .should("contain", issue.title)
      .and("contain", issue.description);
  });
});
