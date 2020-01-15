const todolist = [{
    text: 'first',
    completed: true
}, {
    text: 'second',
    completed: false
}, {
    text: 'third',
    completed: true
}, {
    text: 'fourth',
    completed: false
}, {
    text: 'fifth',
    completed: false
}]

const deleteTodo = function (todos, text) {
    const index = todos.findIndex(function (todo) {
        return todo.text.toLowerCase() === text.toLowerCase()
    })

    if (index > -1) {
        todos.splice(index, 1)
    }
}

const getThingsToDo = function (todolist) {
    return todolist.filter(function (todo) {
        return !todo.completed
    })
}

const sortTodos = function (todos) {
    todos.sort(function (a, b) {
        if (!a.completed && b.completed) {
            return -1
        } else if (a.completed && !b.completed) {
            return 1
        } else {
            return 0
        }
    })
}

sortTodos(todolist)
console.log(todolist)
//console.log(getThingsToDo(todolist))

// deleteTodo(todolist, 'thIrd')
// console.log(todolist)