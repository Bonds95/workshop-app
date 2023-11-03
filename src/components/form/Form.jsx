import React from "react"
import { useState } from "react";


export const Form = ({onSubmit}) => {

  const [newTodoText, setNewTodoText] = useState("");

  const handleAddTodoClick = (e) => {
    e.preventDefault() 
    onSubmit(newTodoText)
    
  }


  return (
    <form>
      <input
        onChange={(event) => {
          setNewTodoText(event.target.value);
        }}
      />
      <button onClick={handleAddTodoClick}> Добавить</button>
    </form>
  )
}
