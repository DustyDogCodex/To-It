import { Home } from './Home.js'

const homeButton = document.querySelector('#home')

homeButton.addEventListener('click', () => {
    Home.HomeDisplay()
})