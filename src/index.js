import { loadProjectList,clear } from './render.js'
import { createNewProject } from './createProject.js'
import { saveToLocalStorage } from './storage.js'

const myProjects = document.querySelector('[data-projects]')
const newProjectForm = document.querySelector('[data-new-project-form]')
const newProjectInput = document.querySelector('[data-new-project-input]') 
const deleteProjectButton = document.querySelector('[data-delete-project-button]')
const projectDisplay = document.querySelector('[data-project-display]')
const projectTitle = document.querySelector('[data-project-title]')
const taskCount = document.querySelector('[data-task-count]')
const todos = document.querySelector('[data-todos]')

const LOCAL_STORAGE_PROJECT_KEY = 'toit.projects'
const LOCAL_STORAGE_ACTIVE_PROJECT_KEY = 'toit.activeProjectId'
let projects = JSON.parse(localStorage.getItem(LOCAL_STORAGE_PROJECT_KEY)) || []
let activeProjectId = localStorage.getItem(LOCAL_STORAGE_ACTIVE_PROJECT_KEY)

myProjects.addEventListener('click', e => {
    if(e.target.tagName.toLowerCase() === 'li') {
        activeProjectId = e.target.dataset.projectId 
        saveAndLoad()
    }
})

deleteProjectButton.addEventListener('click', e => {
    projects = projects.filter(project => project.id !== activeProjectId)
    activeProjectId = null
    saveAndLoad()
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

function load() {
    clear(myProjects)
    loadProjectList(myProjects, projects, activeProjectId)

    const activeProject = projects.find(project => project.id === activeProjectId)
    if(activeProjectId == null) {
        projectDisplay.style.display = 'none'
    } else {
        projectDisplay.style.display = ''
        projectTitle.innerText = activeProject.name 
        loadTaskCount(activeProject)
    }
}

function loadTasks() {
    activeProject.tasks.forEach(task => {
        const taskDiv = document.importNode(taskTemplate.content, true)

        const checkbox = taskDiv.querySelector('input')
        checkbox.id = task.id
        checkbox.checked = task.complete

        const label = taskDiv.querySelector('label')
        label.htmlFor = task.id
        label.append(task.name)

        todos.appendChild(taskDiv)
    })
}

function loadTaskCount(activeProject) {
    const incompleteTasks = activeProject.tasks.filter(task => !task.complete).length
    const taskString = incompleteTasks === 1 ? "task" : "tasks"
    taskCount.innerText = `${incompleteTasks} ${taskString} remaining`
}

function saveAndLoad() {
    saveToLocalStorage(LOCAL_STORAGE_PROJECT_KEY, projects)
    saveToLocalStorage(LOCAL_STORAGE_ACTIVE_PROJECT_KEY, activeProjectId)
    loadProjectList(myProjects, projects, activeProjectId)
}

/* loadProjectList(myProjects, projects, activeProjectId) */
load()