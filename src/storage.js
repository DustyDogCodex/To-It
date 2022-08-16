/* for accessing and setting stuff in local storage */
function saveToLocalStorage(){
    localStorage.setItem(LOCAL_STORAGE_PROJECT_KEY, JSON.stringify(projects))
}

export { saveToLocalStorage }