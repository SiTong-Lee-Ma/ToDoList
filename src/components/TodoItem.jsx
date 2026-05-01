import React from "react";

function TodoItem({ todo, onDeleteTodo, onToggleTodo }) {
  return (
    <li className={`todo-item${todo.completed ? " completed" : ""}`}>
      <button
        className="toggle-button"
        type="button"
        aria-label={todo.completed ? "标记为未完成" : "标记为已完成"}
        onClick={() => onToggleTodo(todo.id)}
      >
        <span aria-hidden="true">{todo.completed ? "✓" : ""}</span>
      </button>

      <span className="todo-text" onClick={() => onToggleTodo(todo.id)}>
        {todo.text}
      </span>

      <button
        className="delete-button"
        type="button"
        onClick={() => onDeleteTodo(todo.id)}
      >
        删除
      </button>
    </li>
  );
}

export default TodoItem;
