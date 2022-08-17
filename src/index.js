import { loadProjectList } from './render.js'
import { createNewProject } from './createProject.js'
import { saveToLocalStorage } from './storage.js'

const myProjects = document.querySelector('[data-projects]')
const newProjectForm = document.querySelector('[data-new-project-form]')
const newProjectInput = document.querySelector('[data-new-project-input]') 

const LOCAL_STORAGE_PROJECT_KEY = 'toit.projects'
const LOCAL_STORAGE_ACTIVE_PROJECT_KEY = 'toit.activeProjectId'
let projects = JSON.parse(localStorage.getItem(LOCAL_STORAGE_PROJECT_KEY)) || []
let activeProjectId = localStorage.getItem(LOCAL_STORAGE_ACTIVE_PROJECT_KEY)

myProjects.addEventListener('click', e => {
    if(e.target.tagName.toLowerCase() === 'li') {
        activeProjectId = e.target.dataset.projectId 
        console.log(activeProjectId)
        saveAndLoad()
    }
})

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
    saveToLocalStorage(LOCAL_STORAGE_ACTIVE_PROJECT_KEY, activeProjectId)
    loadProjectList(myProjects, projects, activeProjectId)
}

loadProjectList(myProjects, projects, activeProjectId)