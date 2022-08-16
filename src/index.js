import { Render } from './render.js'
import { CreateNewProject } from './createProject.js'
import { Storage } from './storage.js'

const newProjectForm = document.querySelector('[data-new-project-form]')
const newProjectInput = document.querySelector('[data-new-project-input]')

const LOCAL_STORAGE_PROJECT_KEY = 'task.projects'
let projects = JSON.parse(localStorage.getItem(LOCAL_STORAGE_PROJECT_KEY)) || [] 

function saveAndRender() {
    Storage.save()
    Render.projectList()
}

newProjectForm.addEventListener('submit', e => {
    e.preventDefault()
    const projectName = newProjectInput.value
    if (projectName == null || projectName === '') { 
        return
    }
    const project = CreateNewProject.createProject(projectName)
    newProjectInput.value = null
    projects.push(project)
    saveAndRender()
})

Render.projectList()