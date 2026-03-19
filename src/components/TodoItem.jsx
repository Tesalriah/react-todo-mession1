function TodoItem({ todo, toggleTodo, deleteTodo }) {
    return (
        <>
            <li
                onClick={(e) => toggleTodo(e, todo.id)}
                key={todo.id}
                className="mt-3 border-2 border-gray-300 w-[85%] rounded flex items-center justify-between p-2 m-auto cursor-pointer"
            >
                <input type="checkbox" className="w-5 h-5" checked={todo.completed}></input>
                <div className="inline-block" style={todo.completed ? { 'text-decoration': 'line-through' } : {}}>
                    {todo.content}
                    {todo.id}
                </div>
                <button
                    type="button"
                    name="del_btn"
                    className="ml-2 text-2xl font-bold rounded cursor-pointer text-red-500 hover:text-red-700"
                    onClick={() => deleteTodo(todo.id)}
                >
                    X
                </button>
            </li>
        </>
    )
}

export default TodoItem
