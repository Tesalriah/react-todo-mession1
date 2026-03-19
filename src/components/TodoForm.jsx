import { useTodos } from '../hooks/useTodos'

function TodoForm() {
    const { removeCompleted, addTodo, selectedDate, setSelectedDate } = useTodos()
    const doSubmit = (e) => {
        e.preventDefault()
        const todo = e.target.todo.value
        if (!todo) {
            alert('할일을 입력해주세요')
            e.target.todo.focus()
            return
        }
        addTodo(todo, selectedDate)
        e.target.todo.value = ''
    }

    return (
        <>
            <div className="font-bold text-[4rem] bg-gradient-to-b from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Just Do It
            </div>
            <form className="mt-5 w-full" onSubmit={doSubmit}>
                <div className="flex w-[85%] justify-between m-auto mb-3">
                    <input
                        type="date"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        className="w-[48%] p-2 rounded-[8px] text-center text-black rounded border-2 border-gray-300 "
                    ></input>
                    <button
                        type="button"
                        className="w-[48%] font-bold bg-gradient-to-b from-orange-600 to-red-600 text-white px-4 py-2 rounded hover:from-orange-700 hover:to-red-700 transition cursor-pointer"
                        onClick={() => removeCompleted()}
                    >
                        완료항목 제거
                    </button>
                </div>
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
            </form>
        </>
    )
}

export default TodoForm
