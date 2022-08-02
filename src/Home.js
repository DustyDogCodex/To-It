/* class for changing display when user selects the home tab */
class Home {
    static HomeDisplay(){
        const display = document.querySelector('.display')

        /* create button for adding new to-do */
        /* newDivForButtons will contain 2 separate divs. Each of these divs contains a button and a span element. */
        const newDivForButtons = document.createElement('div')
        const newToDoDiv = document.createElement('div')
        const newProjectDiv = document.createElement('div')
        const newToDoSpan = document.createElement('span')
        const newProjectSpan = document.createElement('span')
        const newToDoButton = document.createElement('button')
        const newProjectButton = document.createElement('button')

        newToDoButton.innerText = '+'
        newToDoButton.classList.add('addNewToDo')
        newToDoSpan.innerText = 'Add a new to-do item!'

        newProjectButton.innerText = '+'
        newProjectButton.classList.add('addNewProject')
        newProjectSpan.innerText = 'Start a new project!'

        newToDoDiv.appendChild(newToDoButton)
        newToDoDiv.appendChild(newToDoSpan)
        newToDoDiv.classList.add('newToDoDiv')
        newProjectDiv.appendChild(newProjectButton)
        newProjectDiv.appendChild(newProjectSpan)
        newProjectDiv.classList.add('newProjectDiv')

        newDivForButtons.appendChild(newToDoDiv)
        newDivForButtons.appendChild(newProjectDiv)
        newDivForButtons.classList.add('addNew')

        display.appendChild(newDivForButtons)
    }
}

export { Home }
