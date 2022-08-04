import { Home } from './Home.js'
import { ToDo } from './toDoDisplay.js'
import { NewToDo } from './addToDoModal.js'

const homeButton = document.querySelector('#home')
const toDoButton = document.querySelector('#toDo')
const addToDo = document.querySelector('.addNewToDo')

homeButton.addEventListener('click', () => {
    Home.HomeDisplay()
})

toDoButton.addEventListener('click', () => {
    ToDo.Display()
})

addToDo.addEventListener('click', () => {
    NewToDo.NewToDoModal()
})