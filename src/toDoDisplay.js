class ToDo {
    static Display() {
        /* HARDCOded a todo array to work with for now. This represents the stored todos in a database or local storage */
        const toDos = ['TODO1', 'TODO2', 'TODO3']

        const display = document.querySelector('.display')

        toDos.forEach((toDo) => {
            const newDiv = document.createElement('div')

            newDiv.classList.add('toDoDiv')
            newDiv.innerText = `${toDo}`

            display.appendChild(newDiv)
        })

    }
}

export { ToDo }