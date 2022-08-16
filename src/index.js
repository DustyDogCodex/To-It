import { Render } from './render.js'
import { CreateNewProject } from './createProject.js'

const newProjectForm = document.querySelector('[data-new-project-form]')
const newProjectInput = document.querySelector('[data-new-project-input]')

let projects = [{
    id: 1,
    name: 'name'
}, {
    id: 2,
    name: 'todo'
}]

newProjectForm.addEventListener('submit', e => {
    e.preventDefault()
    const projectName = newProjectInput.value
    if (projectName == null || projectName === '') { 
        return
    }
    const project = CreateNewProject.createProject(projectName)
    newProjectInput.value = null
    projects.push(project)
    Render.projectList()
})

Render.projectList()