import React from "react";
import { useState } from "react";

function TodoInput({ onAddTodo }) {
  const [text, setText] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    onAddTodo(text);
    setText("");
  }

  return (
    <form className="todo-input" onSubmit={handleSubmit}>
      <input
        id="todo-text"
        type="text"
        value={text}
        onChange={(event) => setText(event.target.value)}
        placeholder="输入一个新任务"
        autoComplete="off"
      />
      <button type="submit">添加</button>
    </form>
  );
}

export default TodoInput;
