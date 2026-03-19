import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import { useTodos } from './hooks/useTodos'

function App() {
    const { todos, addTodo, deleteTodo, toggleTodo, removeCompleted } = useTodos()

    return (
        <div className="top-[10%] m-auto transform  bg-white p-[30px_0_50px_0] text-center shadow-[0_-6px_20px_rgba(0,0,0,0.15),0_6px_20px_rgba(0,0,0,0.15)] rounded-lg w-[500px] m-auto mt-10">
            <div className="font-bold text-[4rem] bg-gradient-to-b from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Just Do It
            </div>
            <TodoForm removeCompleted={removeCompleted} addTodo={addTodo} />
            <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
        </div>
    )
}

export default App
