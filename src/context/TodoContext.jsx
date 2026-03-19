import { createContext, useRef, useState } from 'react'

export const TodoContext = createContext()

export function TodoProvider({ children }) {
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

    const value = { todos, addTodo, deleteTodo, toggleTodo, removeCompleted }

    return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>
}
