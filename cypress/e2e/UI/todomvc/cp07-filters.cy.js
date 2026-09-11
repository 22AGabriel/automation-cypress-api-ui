describe('TodoMVC filters', () => { 
    let tasks

    beforeEach(() => {
        cy.env(['uiBaseUrl']).then(({uiBaseUrl}) => {
            cy.visit(uiBaseUrl)
        })

        cy.fixture("todos").then((data) => {
            tasks = data.tasks

            tasks.forEach((task) => {
                cy.addTodo(task)
            })
        })
    })

    it('CP-07-01 - Filter active tasks', () => {
        // Mark the second task as completed
        cy.get(".todo-list li")
        .eq(1)
        .find(".toggle")
        .check()

        // Click on the "Active" filter
        cy.get(".filters").contains("Active").click()

        // Verify that only active tasks are displayed
        cy.get(".todo-list li")
        .should("have.length", 2)
        .and("not.have.class", "completed")
    })

    it('CP-07-02 - Filter completed tasks', () => {
        // Mark the second task as completed
        cy.get(".todo-list li")
        .eq(1)
        .find(".toggle")
        .check()

        // Click on the "Completed" filter
        cy.get(".filters").contains("Completed").click()

        // Verify that only completed tasks are displayed
        cy.get(".todo-list li")
        .should("have.length", 1)
        .and("have.class", "completed")

        // Verify that the displayed task is the one marked as completed
        cy.contains(".todo-list li", tasks[1])
        .should("be.visible")
    })


    it('CP-07-03 - Filter all tasks', () => {
        // Mark the second task as completed
        cy.get(".todo-list li")
        .eq(1)
        .find(".toggle")
        .check()

        // Click on the "All" filter
        cy.get(".filters").contains("All").click()

        // Verify that all tasks are displayed
        cy.get(".todo-list li")
        .should("have.length", tasks.length)
    })
})