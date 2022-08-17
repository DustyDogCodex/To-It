import { loadProjectList } from './render.js'
import { createNewProject } from './createProject.js'
import { saveToLocalStorage } from './storage.js'

const myProjects = document.querySelector('[data-projects]')
const newProjectForm = document.querySelector('[data-new-project-form]')
const newProjectInput = document.querySelector('[data-new-project-input]')

const LOCAL_STORAGE_PROJECT_KEY = 'toit.projects'
let projects = JSON.parse(localStorage.getItem(LOCAL_STORAGE_PROJECT_KEY)) || []

newProjectForm.addEventListener('submit', e => {
    e.preventDefault()
    const projectName = newProjectInput.value
    if (projectName == null || projectName === '') { 
        return
    }
    const project = createNewProject(projectName)
    newProjectInput.value = null
    projects.push(project)
    saveAndLoad()
})

function saveAndLoad() {
    saveToLocalStorage(LOCAL_STORAGE_PROJECT_KEY, projects)
    loadProjectList(myProjects, projects)
}

loadProjectList(myProjects, projects)