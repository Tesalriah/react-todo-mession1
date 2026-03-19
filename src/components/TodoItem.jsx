import { Link } from 'react-router-dom'
import { useTodos } from '../hooks/useTodos'

function TodoItem({ todo }) {
    const { toggleTodo, deleteTodo } = useTodos()

    return (
        <>
            <li
                onClick={(e) => toggleTodo(todo.id)}
                key={todo.id}
                className="mt-3 border-2 border-gray-300 w-[85%] rounded flex items-center justify-between p-2 m-auto cursor-pointer"
            >
                <input type="checkbox" className="w-5 h-5" checked={todo.completed} onChange={() => {}}></input>
                <div
                    className="inline-block text-lg"
                    style={todo.completed ? { textDecoration: 'line-through', color: 'gray' } : {}}
                >
                    {todo.content}
                </div>
                <div
                    className="flex items-center"
                    name="btns"
                    onClick={(e) => {
                        e.stopPropagation()
                    }}
                >
                    <Link to={`/todo/${todo.id}`} className="text-xl">
                        ✏️
                    </Link>
                    <button
                        type="button"
                        className="ml-2 text-2xl font-bold rounded cursor-pointer text-red-500 hover:text-red-700"
                        onClick={() => deleteTodo(todo.id)}
                    >
                        ✕
                    </button>
                </div>
            </li>
        </>
    )
}

export default TodoItem
