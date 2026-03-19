import TodoItem from './TodoItem'

function TodoList({ todos, deleteTodo, toggleTodo }) {
    return (
        <ul>
            {todos.map((item) => (
                <TodoItem key={item.id} item={item} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
            ))}
        </ul>
    )
}

export default TodoList
