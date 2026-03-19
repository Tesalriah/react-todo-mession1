import { useTodos } from '../hooks/useTodos'

function TodoForm() {
    const { removeCompleted, addTodo } = useTodos()
    const doSubmit = (e) => {
        e.preventDefault()
        const todo = e.target.todo.value
        if (!todo) {
            alert('할일을 입력해주세요')
            return
        }
        addTodo(todo)
        e.target.todo.value = ''
    }

    return (
        <>
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
                    onClick={() => removeCompleted()}
                >
                    완료항목 제거
                </button>
            </form>
        </>
    )
}

export default TodoForm
