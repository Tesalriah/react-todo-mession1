import { useTodos } from '../hooks/useTodos'
import TodoItem from './TodoItem'

function TodoList() {
    const { todos } = useTodos()
    return (
        <>
            <ul className="mt-5">
                {todos.map((todo) => (
                    <TodoItem key={todo.id} todo={todo} />
                ))}
            </ul>
            <div className="font-bold text-lg bg-gradient-to-b from-blue-500 to-purple-500 bg-clip-text text-transparent pt-5">
                {!todos.length
                    ? '일단 그냥 합시다!!!'
                    : todos.length === todos.filter((todo) => todo.completed).length
                      ? '수고하셨습니다!!!'
                      : `목표까지 ${todos.filter((todo) => todo.completed).length}/${todos.length}`}
            </div>
        </>
    )
}

export default TodoList
