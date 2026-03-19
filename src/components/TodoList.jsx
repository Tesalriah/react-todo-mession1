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
        </>
    )
}

export default TodoList
