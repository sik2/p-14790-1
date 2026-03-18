import { useState } from 'react'

function App() {
    const [todos, setTodos] = useState(['할일1', '할일2', '할일3'])

    const handleOnSubmit = (e) => {
        e.preventDefault()
        const form = e.target

        if (form.todo.value.length == 0) {
            alert('할일을 입력해주세요.')
            return
        }

        setTodos([...todos, form.todo.value])
    }

    const deleteTodo = (selectedIndex) => {
        const nextState = todos.filter((item, i) => i !== selectedIndex)
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
                        <span>{item}</span>
                        <button onClick={() => deleteTodo(i)}>X</button>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default App
