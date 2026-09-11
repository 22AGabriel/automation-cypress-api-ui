describe("Marcar como completado",  () => {
     beforeEach(() => {
        cy.env(['uiBaseUrl']).then(({uiBaseUrl}) => {
            cy.visit(uiBaseUrl)
        })
    })

    it('CP-03 - Marcar una tarea como completada', () => {
        const task = "Comprar tomates"
  
        cy.addTodo(task)
        
        cy.get(".toggle")
        .check()
        
        cy.contains('a', "All").click()

        cy.contains(".todo-list li", task)
        .should("have.class", "completed")
    })
})