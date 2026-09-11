describe("Alta de varias tareas", ()  => {
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

    it('CP-02 - Agregar varias tareas', () => {
        //Validar cantidad de tareas
        cy.get(".todo-list li")
        .should("have.length", tasks.length)

        //Validar que cada tarea existe
        tasks.forEach((task) => {
            cy.contains(".todo-list li", task)
            .should("be.visible")
        })

        //Validar contador
        cy.get(".todo-count")
        .should("contain", `${tasks.length} items`)
    })
})