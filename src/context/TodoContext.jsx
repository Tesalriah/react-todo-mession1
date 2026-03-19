import { createContext, useEffect, useState } from 'react'
import { getStorage } from '../utils/storage'

export const TodoContext = createContext()

export function TodoProvider({ children }) {
    const [todos, setTodos] = useState(getStorage())

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const addTodo = (content) => {
        const newId = todos.length > 0 ? Math.max(...todos.map((todo) => todo.id)) + 1 : 1
        setTodos([...todos, { id: newId, content: content, completed: false }])
    }

    const deleteTodo = (id) => {
        if (!confirm('정말 삭제하시겠습니까?')) {
            return
        }
        const newTodos = todos.filter((todo) => todo.id !== id)
        setTodos(newTodos)
    }

    const toggleTodo = (e, id) => {
        if (e.target.name === 'del_btn') return
        const newTodos = todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo))
        setTodos(newTodos)
    }
    const removeCompleted = () => {
        const newTodos = todos.filter((todo) => !todo.completed)
        if (newTodos.length === todos.length) {
            alert('완료된 일이 없습니다.')
            return
        }
        if (!confirm('정말 완료된 항목들을 삭제하시겠습니까?')) {
            return
        }
        setTodos(newTodos)
    }

    const value = { todos, addTodo, deleteTodo, toggleTodo, removeCompleted }

    return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>
}
