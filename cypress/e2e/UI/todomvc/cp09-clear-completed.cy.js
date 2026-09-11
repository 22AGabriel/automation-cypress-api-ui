describe('TodoMVC Clear completed', () => { 
    let tasks = ["Comprar tomates", "Comprar cebollas", "Comprar pimientos"]

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

        cy.get(".filters").contains("All").click()
    })

    it('CP-09-01 - Mark a few tasks as completed and clear them', () => {
        // Mark the first and third tasks as completed
        cy.contains(".todo-list li", tasks[0])
        .find(".toggle")
        .check()
        cy.contains(".todo-list li", tasks[2])
        .find(".toggle")
        .check()

        // Clear completed tasks
        cy.contains("button", "Clear completed").click()

        // Verify that the completed tasks have been removed and the active task remains
        tasks.forEach((task, index) => {
            if(index === 0 || index === 2){
                cy.contains(".todo-list li", task).should("not.exist")
            } else {
                cy.contains(".todo-list li", task).should("exist")
            }
        })

    })

    it('CP-09-02 - Clear completed with no completed tasks', () => {
        // Attempt to clear completed tasks when none are completed
        cy.contains("button", "Clear completed").click({force: true})

        // Verify that all tasks remain unchanged
        tasks.forEach((task) => {
            cy.contains(".todo-list li", task).should("exist")
        })
    })

    it('CP-09-03 - Clear completed with all tasks completed', () => {
        // Mark all tasks as completed
        tasks.forEach((task) => {
            cy.contains(".todo-list li", task)
            .find(".toggle")
            .check()
        })

        // Clear completed tasks
        cy.contains("button", "Clear completed").click()   

        // Verify that all tasks have been removed
        tasks.forEach((task) => {
            cy.contains(".todo-list li", task).should("not.exist")
        })
    })
})