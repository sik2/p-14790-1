function TodoForm({ handleOnSubmit }) {
    return (
        <form onSubmit={handleOnSubmit}>
            <input type="text" name="todo" />
            <button>등록</button>
        </form>
    )
}

export default TodoForm
