import './Todo.css'
import { useState } from 'react'
import TodoList from '../todo-list/TodoList'
import TodoCreate from '../todo-create/TodoCreate'

let Todo = () => {
  let [getTodos, setTodos] = useState([
      {id : 1, title: "Eat",},
      {id : 2, title : 'Sleep'},
      {id : 3, title : 'Ngoding'}
    ])
  
  let todosReal = (todo) => {
    setTodos(getTodos.concat(todo))

  }
  return(
    <div>
      <h3 className='heading__todo'>Todo Apps Simple</h3>
      <TodoCreate onCreateTodo = {todosReal}></TodoCreate>
      <TodoList dataTodos = {getTodos}></TodoList>
    </div>
  )
}

export default Todo;