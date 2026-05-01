import React from "react";
import TodoItem from "./TodoItem.jsx";

function TodoList({ todos, onDeleteTodo, onToggleTodo }) {
  if (todos.length === 0) {
    return <p className="empty-state">当前没有符合条件的任务</p>;
  }

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDeleteTodo={onDeleteTodo}
          onToggleTodo={onToggleTodo}
        />
      ))}
    </ul>
  );
}

export default TodoList;
