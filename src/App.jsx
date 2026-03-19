import { useRef, useState } from 'react'
import TodoForm from './components/TodoForm'

function App() {
    const [todos, setTodos] = useState([
        { id: 1, todo: '할일1', completed: true },
        { id: 2, todo: '할일2', completed: false },
        { id: 3, todo: '할일3', completed: false },
    ])

    let lastId = useRef(4)

    const handleOnSubmit = (e) => {
        e.preventDefault()
        const form = e.target

        if (form.todo.value.length == 0) {
            alert('할일을 입력해주세요.')
            return
        }

        setTodos([...todos, { id: lastId.current, todo: form.todo.value, completed: false }])
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
            <TodoForm handleOnSubmit={handleOnSubmit} />
            <ul>
                {todos.map((item) => (
                    <li key={item.id} style={{ textDecoration: item.completed ? 'line-through' : 'none' }}>
                        <input type="checkbox" onChange={() => toggleTodo(item.id)} checked={item.completed} />
                        <span>
                            {item.id} / {item.todo}
                        </span>
                        <button onClick={() => deleteTodo(item.id)}>X</button>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default App
