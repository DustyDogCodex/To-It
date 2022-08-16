/* functions for rendering a list of projects in the My Projects section. */
const myProjects = document.querySelector('[data-projects]')

const LOCAL_STORAGE_PROJECT_KEY = 'toit.projects'
let projects = JSON.parse(localStorage.getItem(LOCAL_STORAGE_PROJECT_KEY)) || []

console.log(LOCAL_STORAGE_PROJECT_KEY)
function loadProjectList() {
    /* method for clearing and rendering new project list */
    clearProjectList(myProjects)
    
    projects.forEach(project => {
        const projectElement = document.createElement('li')

        projectElement.classList.add('project-name')
        projectElement.dataset.projectId = project.id
        projectElement.innerText = project.name
        
        myProjects.appendChild(projectElement)
    });
}

/* this function clears previous elements from project list before rendering a fresh list. */
function clearProjectList(element){
    while (element.firstChild) {
        element.removeChild(element.firstChild)
    }
}

function saveToLocalStorage(){
    localStorage.setItem(LOCAL_STORAGE_PROJECT_KEY, JSON.stringify(projects))
}
export { loadProjectList, clearProjectList }