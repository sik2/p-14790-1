function TodoItem({ item, deleteTodo, toggleTodo }) {
    return (
        <li key={item.id} style={{ textDecoration: item.completed ? 'line-through' : 'none' }}>
            <input type="checkbox" onChange={() => toggleTodo(item.id)} checked={item.completed} />
            <span>
                {item.id} / {item.todo}
            </span>
            <button onClick={() => deleteTodo(item.id)}>X</button>
        </li>
    )
}

export default TodoItem
