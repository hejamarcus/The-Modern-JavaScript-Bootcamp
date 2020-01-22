'use strict'

const getSavedTodos = () => {
    const todosJson = localStorage.getItem('todos')

    try {
        return todosJson ? JSON.parse(todosJson) : []
    } catch (e) {
        return []
    }
}

const saveTodos = (todolist) =>{
    localStorage.setItem('todos', JSON.stringify(todolist))
}

const removeTodo = (id) => {
    const todoIndex = todolist.findIndex((todo) => todo.id === id)
    todolist.splice(todoIndex, 1)
}

const toggleTodo = function (id) {
    const todo = todolist.find((todo) => todo.id === id )

    if (todo){
        todo.completed = !todo.completed
    }
}

const renderTodos = (todolist, filters) => {
    const todoEl = document.querySelector('#todos')
    const filteredTodos = todolist.filter((todo) => {
        if (filters.hideCompleted) {
            return todo.text.toLowerCase().includes(filters.searchText.toLowerCase()) && todo.completed === false
        } else {
            return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
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
        saveTodos(todolist)
        renderTodos(todolist, filters)
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
        saveTodos(todolist)
        renderTodos(todolist, filters)
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