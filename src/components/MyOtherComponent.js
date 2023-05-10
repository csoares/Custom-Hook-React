import React, { useState } from "react";
import TodoList from "./TodoList";

function MyOtherComponent() {
  const [todos, setTodos] = useState([
    { id: 1, title: "Buy groceries" },
    { id: 2, title: "Do laundry" },
    { id: 3, title: "Clean the house" },
  ]);

  function handleDelete(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <div>
      <h1>Todo List</h1>
      <TodoList todos={todos} onDelete={handleDelete} />
    </div>
  );
}

export default MyOtherComponent;
