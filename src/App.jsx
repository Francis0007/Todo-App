import "./style.css"
import { useState } from "react"


export default function App() {
  const [newItem, setNewItem] = useState("")
  const [todos, setTodos] = useState([])

function handlesubmit(e) {
  e.preventDefault()

  setTodos((currentTodos) => {
    return [
      ...currentTodos,
      {id: crypto.randomUUID(), title: newItem, completed: 
      false},
    ]
    })

    setNewItem("")
} 

function toggleTodo(id, completed) {
  setTodos(currentTodos => {
    return  currentTodos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed}
      }


      return todo
  })
  })
}

function deleteTodo(id) {
  setTodos(currentTodos => {
return currentTodos.filter(todo => todo.id !== id)
   })
}

  return (
    <>
    <form onSubmit={handlesubmit} className="new-item-form">
    <div className="form-row">
      <label htmlfor="item" className="heading">New Item 
      </label>
      <input 
      value={newItem} 
      onChange={e => setNewItem(e.target.value)}
       type="text"
        id="item" 
         />
  <button className="btn">Add</button>
  </div>
  </form>
 <h1 className="header">Todo List</h1>
  <ul className="list">
    {todos.length === 0 && "No Todos"}
    {todos.map(todo => {
      return (
    <li key={todo.id}>
      <label>
        <input type="checkbox" checked={todo.completed} 
        onChange={e => toggleTodo(todo.id, e.target.checked)}   />
        {todo.title}
      </label>
      <button  
      onClick={() => deleteTodo(todo.id)} 
      className="btn btn-danger">Delete</button>
    </li> )
    })}

  </ul>
  </>
)
}