class Render {
    static projects() {
        const projectList = document.querySelector('[data-projects]')

        let projects = [{
            id: 1,
            name: 'name'
        }, {
            id: 2,
            name: 'todo'
        }]

        this.clearElement(projectList)
        projects.forEach(project => {
            const projectElement = document.createElement('li')
            projectElement.classList.add('project-name')
            projectElement.innerText = project.name
            projectList.appendChild(projectElement)
        });
    }

    static clearElement(element){
        while (element.firstChild) {
            element.removeChild(element.firstChild)
        }
    }
}

export { Render }