import { useRef, useState } from 'react'

function App() {
    const [todos, setTodos] = useState([
        { id: 1, content: '밥먹기', completed: false },
        { id: 2, content: '공부하기', completed: false },
        { id: 3, content: '씻기', completed: false },
    ])
    const lastId = useRef(4)

    const doSubmit = (e) => {
        e.preventDefault()
        const todo = e.target.todo.value
        if (!todo) {
            alert('할일을 입력해주세요')
            return
        }
        setTodos([...todos, { id: lastId.current++, content: todo, completed: false }])
        e.target.todo.value = ''
    }

    const deleteTodo = (id) => {
        const newTodos = todos.filter((todo) => todo.id !== id)
        setTodos(newTodos)
    }

    const toggleTodo = (e, id) => {
        if (e.target.name === 'del_btn') return
        const newTodos = todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo))
        setTodos(newTodos)
    }
    const removeCompleted = () => {
        setTodos(todos.filter((todo) => !todo.completed))
    }

    return (
        <div className="top-[10%] m-auto transform  bg-white p-[30px_0_50px_0] text-center shadow-[0_-6px_20px_rgba(0,0,0,0.15),0_6px_20px_rgba(0,0,0,0.15)] rounded-lg w-[500px] m-auto mt-10">
            <div className="font-bold text-[4rem] bg-gradient-to-b from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Just Do It
            </div>
            <form className="mt-5 w-full" onSubmit={doSubmit}>
                <input
                    type="text"
                    name="todo"
                    className="p-2 rounded-[8px] w-[70%] text-center text-black rounded border-2 border-gray-300 "
                    placeholder="할일을 입력하세요"
                    autoComplete="off"
                />
                <button
                    type="submit"
                    className="ml-3 bg-gradient-to-b from-blue-500 to-purple-500 text-white px-4 py-2 rounded hover:from-blue-600 hover:to-purple-600 transition cursor-pointer"
                >
                    추가
                </button>
                <button
                    type="button"
                    className="mt-2 w-[85%] font-bold bg-gradient-to-b from-orange-600 to-red-600 text-white px-4 py-2 rounded hover:from-orange-700 hover:to-red-700 transition cursor-pointer"
                    onClick={removeCompleted}
                >
                    완료항목 제거
                </button>
            </form>
            <ul className="mt-5">
                {todos.map((todo) => (
                    <li
                        onClick={(e) => toggleTodo(e, todo.id)}
                        key={todo.id}
                        className="mt-3 border-2 border-gray-300 w-[85%] rounded flex items-center justify-between p-2 m-auto cursor-pointer"
                    >
                        <input type="checkbox" className="w-5 h-5" checked={todo.completed}></input>
                        <div className="inline-block">
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
                ))}
            </ul>
        </div>
    )
}

export default App
