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
    const filteredTodos = todolist.filter((todo) => {
        if (filters.hideCompleted) {
            return todo.text.toLowerCase().includes(filters.searchText.toLowerCase()) && todo.completed === false
        } else {
            return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        }
    })

    const incompleteTodos = filteredTodos.filter((todo) => !todo.completed)

    document.querySelector('#todos').innerHTML = ''
    document.querySelector('#todos').appendChild(generateSummaryDOM(incompleteTodos))

    filteredTodos.forEach((todo) => {
        document.querySelector('#todos').appendChild(generateTodoDOM(todo))
     })
}

const generateTodoDOM = (todo) => {
    const todoEl = document.createElement('div')
    const checkbox = document.createElement('input')
    const todoText = document.createElement('span')
    const deleteButton = document.createElement('button')

    checkbox.setAttribute('type', 'checkbox')
    checkbox.checked = todo.completed
    todoEl.appendChild(checkbox)
    checkbox.addEventListener('change', () => {
        toggleTodo(todo.id)
        saveTodos(todolist)
        renderTodos(todolist, filters)
    })

    todoText.textContent = todo.text
    todoEl.appendChild(todoText)

    deleteButton.textContent = 'x'
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
    summary.textContent = `You have ${incompleteTodos.length} todos left`
    return summary
}