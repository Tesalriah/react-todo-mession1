import { useContext } from 'react'
import { TodoContext } from '../context/TodoContext'

export function useTodos() {
    const context = useContext(TodoContext)
    return context
}
