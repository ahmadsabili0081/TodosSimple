import './TodoList.css'

let TodoList = (props) => {
  console.log(props.dataTodos)
  return(
    <ul>
      {
      props.dataTodos.map((todo,index) => {
        return <li key={todo.id}>{todo.title}</li>
      })
      }
    </ul>
  )
}

export default TodoList