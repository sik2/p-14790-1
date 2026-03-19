import { useEffect, useRef, useState } from 'react'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

function App() {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        fetch('https://dummyjson.com/todos')
            .then((res) => res.json())
            .then((res) => setTodos(res.todos))
    }, [])

    let lastId = useRef(4)

    const addTodo = (todo) => {
        const todoItem = { id: lastId.current, todo, completed: false }
        setTodos([...todos, todoItem])
        lastId.current++
    }

    const deleteTodo = (selectedId) => {
        const nextState = todos.filter((item) => item.id !== selectedId)
        setTodos(nextState)
    }

    const toggleTodo = (selectedId) => {
        const nextState = todos.map((item) => (item.id == selectedId ? { ...item, completed: !item.completed } : item))
        setTodos(nextState)
    }

    return (
        <>
            <TodoForm addTodo={addTodo} />
            <TodoList todos={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
        </>
    )
}

export default App
