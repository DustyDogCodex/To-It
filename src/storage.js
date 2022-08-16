/* for accessing and setting stuff in local storage */
class Storage {
    static save(){
        localStorage.setItem(LOCAL_STORAGE_PROJECT_KEY, JSON.stringify(projects))
    }
}

export { Storage }