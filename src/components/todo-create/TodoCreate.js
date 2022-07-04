import './TodoCreate.css'
import {useState} from 'react'



let TodoCreate = (props) => {
  let [getInputTodo,setInputTodo] = useState('')
  let handleInputTodo = (event) => {
    setInputTodo(event.target.value)
  }
  let handleSubmit = (e) => {
    e.preventDefault()
    
    if(getInputTodo === ""){
      window.alert('tulis form dengan benar')
    }else{
      let newTodo  = {
        id:Math.floor(Math.random() * 100)  + 1,
        title : getInputTodo
      }
     props.onCreateTodo(newTodo)
  
     setInputTodo("")
    }
  }
  return(
    <>
    <div className='inputTodos'>
      <input className='inputText' value={getInputTodo} type={"text"} placeholder = "Write Something" onChange={handleInputTodo}></input>
      <button type='submit' onClick={handleSubmit}>Submit</button>
    </div>
    </>
  )
}

export default TodoCreate