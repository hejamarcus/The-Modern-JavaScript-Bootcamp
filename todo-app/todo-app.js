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
    e.preventDefault()
    todolist.push({
        id: uuidv4(),
        text: e.target.elements.todoText.value,
        completed: false
    })
    saveTodos(todolist)
    e.target.elements.todoText.value = ''
    renderTodos(todolist, filters)
})

document.querySelector('#hide-completed').addEventListener('change', (e) => {
    filters.hideCompleted = e.target.checked
    renderTodos(todolist, filters)
})
