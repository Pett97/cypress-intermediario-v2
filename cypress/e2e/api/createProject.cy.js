/// <reference types="cypress"/>
import { faker } from "@faker-js/faker";
const accessToken = `Bearer ${Cypress.env("gitlab_access_token")}`;
describe("Create Project API", () => {
  it("Sucessfull", () => {
    let project = {
      name: `projectoAPI-${faker.datatype.uuid()+1}`,
      descripition: faker.random.word(2),
    };

    cy.api_createProject(project).then((response) => {
      expect(response.status).to.be.equal(201);
      expect(response.body.name).to.be.equal(project.name);
      //expect(response.body.description).to.equal(project.description);
    });
  });
  it("Clear Tests", () => {
    cy.api_getAllProjects().then((res) => {
      res.body.forEach((project) => {
        console.log(project.id);
        cy.request({
          method: "DELETE",
          url: `/api/v4/projects/${project.id}`,
          headers: { Authorization: accessToken },
        });
      });
    });
  });
});
