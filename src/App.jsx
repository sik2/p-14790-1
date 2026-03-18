import { useState } from 'react'

function App() {
    const [todos, setTodos] = useState([
        { todo: '할일1', completed: true },
        { todo: '할일2', completed: false },
        { todo: '할일2', completed: false },
    ])

    const handleOnSubmit = (e) => {
        e.preventDefault()
        const form = e.target

        if (form.todo.value.length == 0) {
            alert('할일을 입력해주세요.')
            return
        }

        setTodos([...todos, { todo: form.todo.value, completed: false }])
    }

    const deleteTodo = (selectedIndex) => {
        const nextState = todos.filter((item, i) => i !== selectedIndex)
        setTodos(nextState)
    }

    const toggleTodo = (selectedIndex) => {
        const nextState = todos.map((item, i) => (selectedIndex == i ? { ...item, completed: !item.completed } : item))
        setTodos(nextState)
    }

    return (
        <>
            <form onSubmit={handleOnSubmit}>
                <input type="text" name="todo" />
                <button>등록</button>
            </form>
            <ul>
                {todos.map((item, i) => (
                    <li key={i}>
                        {JSON.stringify(item.completed)}
                        <input type="checkbox" onChange={() => toggleTodo(i)} checked={item.completed} />
                        <span>{item.todo}</span>
                        <button onClick={() => deleteTodo(i)}>X</button>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default App
