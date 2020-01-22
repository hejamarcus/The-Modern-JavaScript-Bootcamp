'use strict'

let todolist = getSavedTodos()
const filters = {
    searchText: '',
    hideCompleted: false
}

renderTodos(todolist, filters)

document.querySelector('#search-text').addEventListener('input', (e) => {
    filters.searchText = e.target.value
    renderTodos(todolist, filters)
})

document.querySelector('#add-todo-form').addEventListener('submit', (e) => {
    const text = e.target.elements.todoText.value.trim()
    e.preventDefault()
    if (text.length > 0) {
        todolist.push({
            id: uuidv4(),
            text,
            completed: false
        })
        saveTodos(todolist)
        e.target.elements.todoText.value = ''
        renderTodos(todolist, filters)
    }
})

document.querySelector('#hide-completed').addEventListener('change', (e) => {
    filters.hideCompleted = e.target.checked
    renderTodos(todolist, filters)
})
