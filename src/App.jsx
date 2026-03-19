import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

function App() {
    return (
        <div className="top-[10%] m-auto transform  bg-white p-[30px_0_50px_0] text-center shadow-[0_-6px_20px_rgba(0,0,0,0.15),0_6px_20px_rgba(0,0,0,0.15)] rounded-lg w-[500px] m-auto mt-10">
            <TodoForm />
            <TodoList />
        </div>
    )
}

export default App
