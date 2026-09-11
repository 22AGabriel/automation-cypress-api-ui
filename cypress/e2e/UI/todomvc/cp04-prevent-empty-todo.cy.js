describe("Prevenir tareas vacías",() => {
    beforeEach(() => {
        cy.env(['uiBaseUrl']).then(({uiBaseUrl}) => {
            cy.visit(uiBaseUrl)
        })
    })

    it('CP-04 - No permitir agregar tareas vacías', () => {
        cy.get(".new-todo")
        .type("{enter}") 

        cy.get(".todo-list li")
        .should("have.length", 0)

        cy.get(".new-todo")
        .should("have.value", "")
    })
})