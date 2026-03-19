function TodoForm({ addTodo }) {
    const handleOnSubmit = (e) => {
        e.preventDefault()
        const form = e.target

        if (form.todo.value.length == 0) {
            alert('할일을 입력해주세요.')
            return
        }

        addTodo(form.todo.value)

        // 입력 값 초기화
        form.todo.value = ''
    }

    return (
        <form onSubmit={handleOnSubmit}>
            <input type="text" name="todo" />
            <button>등록</button>
        </form>
    )
}

export default TodoForm
