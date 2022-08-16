/* Class for creating a new project from user supplied inputs */

class CreateNewProject {
    static newProject(name) {
        return { id: Date.now().toString(), name: name, tasks: [] }
    }
}

export { CreateNewProject }