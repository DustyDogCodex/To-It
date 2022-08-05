class NewToDo {
    static NewToDoModal() {
        const content = document.querySelector('.content')
        const newToDo = document.createElement('form')
        
        newToDo.classList.add('newToDoModal')
        /* newToDo.innerHTML = '<label>To-Do: <input type=\'text\' name=\'toDo\'></label> <label>Due Date: <input type=\'date\' name=\'dueDate\'></label> <label>Priority: <input type=\'radio\' name=\'low\'><input type=\'radio\' name=\'medium\'><input type=\'radio\' name=\'high\'></label> <input type=\'submit\'>' */

        content.appendChild(newToDo)
    }
}

export { NewToDo }