/* class for rendering a list of projects in the My Projects section. */
class Render {
    static projectList() {
        const projectList = document.querySelector('[data-projects]')

        let projects = JSON.parse(localStorage.getItem(LOCAL_STORAGE_PROJECT_KEY)) || []

        /* method for clearing and rendering new project list */
        this.clearElement(projectList)
        projects.forEach(project => {
            const projectElement = document.createElement('li')
            projectElement.dataset.projectId = project.id
            projectElement.classList.add('project-name')
            projectElement.innerText = project.name
            projectList.appendChild(projectElement)
        });
    }

    /* method clears previous elements from project list before rendering a fresh list. */
    static clearElement(element){
        while (element.firstChild) {
            element.removeChild(element.firstChild)
        }
    }
}

export { Render }