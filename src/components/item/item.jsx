import React from "react"

export const Item = ({ todo,  deleteItem }) => {

  const deleteTodo = (e, id) => {
    e.preventDefault() 
    deleteItem(id)
  }

  return (
      <li>
        {todo.title}
        <button onClick={(e)=>{deleteTodo(e, todo.id)}}>Удалить</button>
      </li>
  )
}