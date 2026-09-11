describe("Delete todo", () => {
    let tasks

    beforeEach(() => {
        cy.env(['uiBaseUrl']).then(({uiBaseUrl}) => {
            cy.visit(uiBaseUrl)
        })
        
        // Create a task
        cy.fixture("todos").then((data) => {
            tasks = data.tasks

            tasks.forEach((task) => {
                cy.addTodo(task)
            })
        })

        cy.get(".filters").contains("All").click()
    })

    it("CP-06-01 - Delete a todo item", () => {
        // Delete the task
        cy.get(".todo-list li")
        .first()
        .find(".destroy")
        .click({ force: true })

        cy.get(".todo-list li").should("have.length", 2)
    })

    it("CP-06-02 - Delete a specific todo item", () => {
        // Delete a specific task
        cy.contains(`${tasks[1]}`)
        .parents("li")
        .find(".destroy")
        .click({ force: true })
        
        // Verify the specific task is deleted
        cy.get(".todo-list li").should("have.length", 2)
        cy.get(".todo-list li").should("not.contain", `${tasks[1]}`)
    })

    it("CP-06-03 - Delete the last todo item", () => {
        // Delete the last task
        cy.get(".todo-list li")
        .last()
        .find(".destroy")
        .click({ force: true })
        
        // Verify the last task is deleted
        cy.get(".todo-list li").should("have.length", tasks.length - 1)
        cy.contains(`${tasks[tasks.length - 1]}`).should("not.exist")
    })
})