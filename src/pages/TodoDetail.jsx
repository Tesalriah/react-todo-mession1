import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import TodoDetailForm from '../components/TodoDetailForm'
import TodoDetailHeader from '../components/TodoDetailHeader'
import { useTodos } from '../hooks/useTodos'

function TodoDetail() {
    const { todos, setSelectedDate, updateTodo } = useTodos()
    const { id } = useParams()
    const navigate = useNavigate()
    const currentTodo = todos.find((todo) => todo.id === parseInt(id))
    const [editContent, setEditContent] = useState(currentTodo?.content || '')

    const handleBack = () => {
        if (currentTodo) {
            setSelectedDate(currentTodo.date)
        }
        navigate('/')
    }

    const handleSave = () => {
        updateTodo(parseInt(id), editContent)
        handleBack()
    }

    return (
        <>
            <TodoDetailHeader onBack={handleBack} />
            {currentTodo && (
                <TodoDetailForm
                    todo={currentTodo}
                    editContent={editContent}
                    onContentChange={(e) => setEditContent(e.target.value)}
                    onSubmit={handleSave}
                    onCancel={handleBack}
                />
            )}
        </>
    )
}

export default TodoDetail
