import { createContext, useEffect, useState } from 'react'
import { getStorage, setStorage } from '../utils/storage'

export const TodoContext = createContext()

export function TodoProvider({ children }) {
    const [todos, setTodos] = useState(getStorage())
    const today = new Date().toISOString().split('T')[0]
    const [selectedDate, setSelectedDate] = useState(today)

    useEffect(() => {
        setStorage(todos)
    }, [todos])

    const addTodo = (content, date) => {
        const newId = todos.length > 0 ? Math.max(...todos.map((todo) => todo.id)) + 1 : 1
        setTodos([...todos, { id: newId, content: content, date: date, completed: false }])
    }

    const selecteDayTodo = (date) => {
        return todos.filter((todo) => todo.date === date)
    }

    const deleteTodo = (id) => {
        if (!confirm('정말 삭제하시겠습니까?')) {
            return
        }
        const newTodos = todos.filter((todo) => todo.id !== id)
        setTodos(newTodos)
    }

    const toggleTodo = (id) => {
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

    const updateTodo = (id, content) => {
        const newTodos = todos.map((todo) => (todo.id === id ? { ...todo, content: content } : todo))
        setTodos(newTodos)
    }

    const value = {
        todos,
        addTodo,
        deleteTodo,
        toggleTodo,
        removeCompleted,
        selecteDayTodo,
        selectedDate,
        setSelectedDate,
        updateTodo,
    }

    return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>
}
