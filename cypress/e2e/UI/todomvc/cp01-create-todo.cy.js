describe("Alta de tareas", ()  => {
    beforeEach(() => {
        cy.env(['uiBaseUrl']).then(({uiBaseUrl}) => {
            cy.visit(uiBaseUrl)
        })
    })

    it('CP-01 - Agregar una tarea', () => {
        const task = "Comprar tomates"

        cy.get(".new-todo")
        .type(task)
        .type("{enter}")

        cy.contains(".todo-list li", task)
        .should("be.visible")

        cy.get(".new-todo")
        .should("have.value", "")

        cy.get(".todo-list li")
        .should("contain", task)
    })
})