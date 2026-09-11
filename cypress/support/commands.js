// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import { ENDPOINTS } from "./constants"


// Custom command to add a new todo via the UI
Cypress.Commands.add('addTodo', (task) => {
    cy.get(".new-todo")
    .type(task)
    .type("{enter}")
})

// Custom commands for API testing
Cypress.Commands.add('getTodos', () => {
    return cy.request({
        method: 'GET',
        url: ENDPOINTS.TODOS
    })
})

Cypress.Commands.add('getTodoById', (id, failOnStatusCode = true) => {
  return cy.request({
    method: 'GET',
    url: `${ENDPOINTS.TODOS}/${id}`,
    failOnStatusCode
  })
})

Cypress.Commands.add('createTodos', (body) => {
    return cy.request({
        method: 'POST',
        url: ENDPOINTS.TODOS,
        body
    })
})

Cypress.Commands.add('validateTodoSchema', (body) => {
    expect(body).to.have.property('userId')
    expect(body).to.have.property('id')
    expect(body).to.have.property('title')
    expect(body).to.have.property('completed')

    expect(body.userId).to.be.a('number')
    expect(body.id).to.be.a('number')
    expect(body.title).to.be.a('string')
    expect(body.completed).to.be.a('boolean')
})