import { getTodos, toggleTodo, removeTodo } from './todos'
import { getFilters } from './filters'

const renderTodos = () => {
    const todoEl = document.querySelector('#todos')
    const { searchText, hideCompleted } = getFilters()
    const filteredTodos = getTodos().filter((todo) => {
        if (hideCompleted) {
            return todo.text.toLowerCase().includes(searchText.toLowerCase()) && todo.completed === false
        } else {
            return todo.text.toLowerCase().includes(searchText.toLowerCase())
        }
    })

    const incompleteTodos = filteredTodos.filter((todo) => !todo.completed)

    todoEl.innerHTML = ''
    todoEl.appendChild(generateSummaryDOM(incompleteTodos))

    if (filteredTodos.length > 0) {
        filteredTodos.forEach((todo) => {
            todoEl.appendChild(generateTodoDOM(todo))
        })
    } else {
        const messageEl = document.createElement('p')
        messageEl.classList.add('empty-message')
        messageEl.textContent = 'No to-dos to show'
        todoEl.appendChild(messageEl)
    }
}

const generateTodoDOM = (todo) => {
    const todoEl = document.createElement('label')
    const containerEl = document.createElement('div')
    const checkbox = document.createElement('input')
    const todoText = document.createElement('span')
    const deleteButton = document.createElement('button')

    checkbox.setAttribute('type', 'checkbox')
    checkbox.checked = todo.completed
    containerEl.appendChild(checkbox)
    checkbox.addEventListener('change', () => {
        toggleTodo(todo.id)
        renderTodos()
    })

    todoText.textContent = todo.text
    containerEl.appendChild(todoText)

    todoEl.classList.add('list-item')
    containerEl.classList.add('list-item__container')
    todoEl.appendChild(containerEl)

    deleteButton.textContent = 'remove'
    deleteButton.classList.add('button', 'button--text')
    todoEl.appendChild(deleteButton)
    deleteButton.addEventListener('click', () => {
        removeTodo(todo.id)
        renderTodos()
    })

    return todoEl
}

const generateSummaryDOM = (incompleteTodos) => {
    const summary = document.createElement('h2')
    const plural = incompleteTodos.length === 1 ? '' : 's'
    summary.classList.add('list-title')
    summary.textContent = `You have ${incompleteTodos.length} todo${plural} left`
    return summary
}

export { generateSummaryDOM, generateTodoDOM, renderTodos }