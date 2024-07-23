/// <reference types="cypress"/>

import { faker } from "@faker-js/faker";

const options = { env: { snapshotOnly: true } };
const accessToken = `Bearer ${Cypress.env("gitlab_access_token")}`;
describe("Set a Milestone on a Issues", options, () => {
  let issue = {
    title: `issue-${faker.datatype.uuid()}`,
    description: faker.random.words(),
    project: {
      name: `project${faker.datatype.uuid()}`,
      description: faker.random.words(2),
    },
  };

  let milestone = {
    title: `milestone${faker.random.words()}`,
  };

  beforeEach(() => {
    cy.api_deleteProjects();
    cy.login();
    cy.api_createIssue(issue).then((response) => {
      cy.api_createMilestone(response.body.project_id, milestone);
      cy.visit(
        `${Cypress.env("user_name")}/${issue.project.name}/issues/${
          response.body.iid
        }`
      );
    });
  });

  it("Sucess", () => {
    cy.gui_setMilestoneOnIssue(milestone);

    cy.get(".block.milestone").should("contain", milestone.title);
  });
});
