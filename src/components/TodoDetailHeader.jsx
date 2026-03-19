function TodoDetailHeader({ onBack }) {
    return (
        <div className="w-full text-left ml-5">
            <button
                onClick={onBack}
                className="mb-4 text-xl inline-block font-bold bg-gradient-to-b from-blue-500 to-purple-500 bg-clip-text text-transparent hover:from-blue-600 hover:to-purple-600 transition cursor-pointer border-none bg-transparent"
            >
                &larr; Back
            </button>
        </div>
    )
}

export default TodoDetailHeader
