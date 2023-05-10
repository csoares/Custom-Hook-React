import React, { useCallback } from "react";

function TodoList({ todos, onDelete }) {
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

export default TodoList;
