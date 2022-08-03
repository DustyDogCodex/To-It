import { Home } from './Home.js'
import { ToDo } from './toDoDisplay.js'

const homeButton = document.querySelector('#home')
const toDoButton = document.querySelector('#toDo')

homeButton.addEventListener('click', () => {
    Home.HomeDisplay()
})

toDoButton.addEventListener('click', () => {
    ToDo.Display()
})