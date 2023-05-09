import React, { useState, useCallback } from "react";

export default function MyUseCallback() {
  const [todos, setTodos] = useState([{ id: 1, title: "Buy milk" },{ id: 2, title: "Pay bills" },{ id: 3, title: "Water plants" },]);

  const onDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleDelete = useCallback(
    (id) => {
      onDelete(id);
    },
    [onDelete]
  );

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.title}
          <button onClick={() => handleDelete(todo.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}
