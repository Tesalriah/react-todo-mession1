import { useRef, useState } from 'react'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

function App() {
    const [todos, setTodos] = useState([
        { id: 1, content: '밥먹기', completed: false },
        { id: 2, content: '공부하기', completed: false },
        { id: 3, content: '씻기', completed: false },
    ])
    const lastId = useRef(4)

    const addTodo = (content) => {
        setTodos([...todos, { id: lastId.current++, content: content, completed: false }])
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
            <TodoForm removeCompleted={removeCompleted} addTodo={addTodo} />
            <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
        </div>
    )
}

export default App
