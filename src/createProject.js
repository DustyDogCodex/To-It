/* Class for creating a new project from user supplied inputs */
function createNewProject(name) {
    return { id: Date.now().toString(), name: name, tasks: [] }
}

export { createNewProject }