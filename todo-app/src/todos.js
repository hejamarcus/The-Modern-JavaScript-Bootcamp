import uuidv4 from 'uuid/v4'

let todos = []

const loadTodos = () => {
    const todosJson = localStorage.getItem('todos')

    try {
        todos = todosJson ? JSON.parse(todosJson) : []
    } catch (e) {
        todos = []
    }
}

const saveTodos = () =>{
    localStorage.setItem('todos', JSON.stringify(todos))
}

const getTodos = () => todos

const createTodo = (text) => {
    todos.push({
        id: uuidv4(),
        text,
        completed: false
    })
    saveTodos()
}

const removeTodo = (id) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id)

    if (todoIndex > -1) {
        todos.splice(todoIndex, 1)
        saveTodos()
    }
}

const toggleTodo = function (id) {
    const todo = todos.find((todo) => todo.id === id )

    if (todo){
        todo.completed = !todo.completed
        saveTodos()
    }
}

export { getTodos, createTodo, removeTodo, toggleTodo, loadTodos }