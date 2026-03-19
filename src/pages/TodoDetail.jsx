import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function TodoDetail() {
    const { id } = useParams()
    const [todo, setTodo] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch(`https://dummyjson.com/todos/${id}`)
            .then((res) => res.json())
            .then((res) => setTodo(res))
            .finally(() => setIsLoading(false))
    }, [id])

    if (isLoading) return <>로딩중...</>

    return (
        <>
            <div>{todo.id} 번 할일</div>
            <h1>할일: {todo.todo}</h1>
            <div>할일여부: {todo.completed ? '✅' : '❌'}</div>
        </>
    )
}

export default TodoDetail
