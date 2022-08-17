/* functions for rendering a list of projects in the My Projects section. */
function loadProjectList(myProjects, projects) {
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

export { loadProjectList }