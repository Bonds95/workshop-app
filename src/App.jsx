import logo from './logo.svg';
import './App.css';
import { Items } from './components/items/Items';
import { Form } from './components/form/Form';
import { useState } from "react";

const todoList = [
  {
    id: 1,
    title: 'Создать проект React',
  },
  {
    id: 2,
    title: 'Подготовить данные нашего списка задач'
  },
]

function App() {

  const [todos, setTodos] = useState(todoList);

  const submitForm = (value) => {
    setTodos([...todos, {
      id: new Date(),
      title: value,
    }])
  }

  const deleteItem = (id) => {
    console.log(id)
    let arr = []
    for (let todo of todos) {
      if (todo.id !== id) {
        arr.push(todo)
      }
    }
    setTodos(arr)
  }


  return (
    <div className="App">
      <Items todoList={todos} deleteItem={deleteItem} />
      <Form onSubmit={submitForm} />
    </div>
  );
}

export default App;