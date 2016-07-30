export const getTodos = () => {
  return new Promise((resolve, reject) => {
    fetch('http://localhost:8080/todos.json')
      .then(response => {
        return response.json()
      })
      .then(todos => {
        resolve(todos)
      })
      .catch(error => {
        reject(error)
      })
  })
}
