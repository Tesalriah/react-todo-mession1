import { useRef } from 'react'

function TodoDetailForm({ todo, editContent, onContentChange, onSubmit, onCancel }) {
    const inputRef = useRef(null)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!editContent.trim()) {
            alert('할일을 입력해주세요')
            inputRef.current?.focus()
            return
        }
        onSubmit()
    }

    return (
        <form onSubmit={handleSubmit} className="w-[85%] m-auto">
            <h1 className="text-2xl font-bold mb-4">할일 변경</h1>
            <div className="mb-4">
                <p className="text-lg font-bold mb-2">작성일: {todo.date}</p>
                <p className="text-lg font-bold mb-2">내용:</p>
                <input
                    ref={inputRef}
                    type="text"
                    value={editContent}
                    onChange={onContentChange}
                    className="w-full p-2 rounded-[8px] text-black border-2 border-gray-300 mb-4"
                />
                <p className="text-lg font-bold mb-2">
                    완료상태:{' '}
                    <span className={todo.completed ? 'text-green-500' : 'text-red-500'}>
                        {todo.completed ? '완료' : '미완료'}
                    </span>
                </p>
            </div>
            <div className="flex gap-2">
                <button
                    type="submit"
                    className="flex-1 bg-gradient-to-b from-blue-500 to-purple-500 text-white px-4 py-2 rounded hover:from-blue-600 hover:to-purple-600 transition cursor-pointer font-bold"
                >
                    저장
                </button>
                <button
                    type="button"
                    onClick={onCancel}
                    className="flex-1 bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition cursor-pointer font-bold"
                >
                    취소
                </button>
            </div>
        </form>
    )
}

export default TodoDetailForm
