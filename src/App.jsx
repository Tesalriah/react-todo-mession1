import { useState } from 'react'

function App() {
    const [todos, setTodos] = useState(['밥먹기', '공부하기', '씻기'])

    const doSubmit = (e) => {
        e.preventDefault()
        const todo = e.target.todo.value
        setTodos([...todos, todo])
    }

    return (
        <div className="absolute top-[30%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 bg-white p-[30px_0_50px_0] text-center shadow-[0_-6px_20px_rgba(0,0,0,0.15),0_6px_20px_rgba(0,0,0,0.15)] rounded-lg w-[500px] m-auto mt-10">
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
                >
                    완료항목 제거
                </button>
            </form>
            <ul className="mt-5">
                {todos.map((todo, index) => (
                    <li
                        key={index}
                        className="mt-3 border-2 border-gray-300 w-[85%] rounded flex items-center justify-between p-2 m-auto cursor-pointer"
                    >
                        <input type="checkbox" className="w-5 h-5"></input>
                        <div className="inline-block">{todo}</div>
                        <button
                            type="submit"
                            className="ml-2 text-2xl font-bold rounded cursor-pointer text-red-500 hover:text-red-700"
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
