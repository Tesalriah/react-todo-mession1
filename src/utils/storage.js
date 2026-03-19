export function setStorage(todos) {
    localStorage.setItem('todos', JSON.stringify(todos))
}

export function getStorage() {
    const stored = localStorage.getItem('todos')
    return stored ? JSON.parse(stored) : []
}
