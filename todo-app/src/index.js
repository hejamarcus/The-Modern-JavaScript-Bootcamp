import { createTodo, loadTodos } from './todos'
import { renderTodos } from './views'
import { setFilters } from './filters'

renderTodos()

document.querySelector('#search-text').addEventListener('input', (e) => {
    setFilters({
        searchText: e.target.value
    })
    renderTodos()
})

document.querySelector('#add-todo-form').addEventListener('submit', (e) => {
    const text = e.target.elements.todoText.value.trim()
    e.preventDefault()

    if (text.length > 0) {
        createTodo(text)
        renderTodos()
        e.target.elements.todoText.value = ''
    }
})

document.querySelector('#hide-completed').addEventListener('change', (e) => {
    setFilters({
        hideCompleted: e.target.checked
    })
    renderTodos()
})

window.addEventListener('storage', () => {
    if (e.key === 'todos') {
        loadTodos()
        renderTodos()
    }
})