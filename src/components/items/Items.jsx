import React from "react"
import { Item } from "../item/item"

export const Items = ({ todoList,  deleteItem }) => {
  return (
    <>
      <h1>Список задач</h1>
      <ul>
        {todoList.map((todo) => {
          return (
            <Item key={todo.id} todo={todo} deleteItem={deleteItem} />
          )
        })}

      </ul>
    </>
  )
}

