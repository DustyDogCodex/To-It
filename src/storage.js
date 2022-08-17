/* for accessing and setting stuff in local storage */
function saveToLocalStorage(projectKey, projects){
    localStorage.setItem(projectKey, JSON.stringify(projects))
}

export { saveToLocalStorage }