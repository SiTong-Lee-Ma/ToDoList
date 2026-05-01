import React from "react";
import { useEffect, useMemo, useState } from "react";
import TodoInput from "./components/TodoInput.jsx";
import TodoList from "./components/TodoList.jsx";
import Filter from "./components/Filter.jsx";

const STORAGE_KEY = "todos";

function readSavedTodos() {
  try {
    const savedTodos = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return Array.isArray(savedTodos) ? savedTodos : [];
  } catch {
    return [];
  }
}

function App() {
  const [todos, setTodos] = useState(readSavedTodos);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  const filteredTodos = useMemo(() => {
    if (filter === "active") {
      return todos.filter((todo) => !todo.completed);
    }

    if (filter === "completed") {
      return todos.filter((todo) => todo.completed);
    }

    return todos;
  }, [filter, todos]);

  const remainingCount = todos.filter((todo) => !todo.completed).length;

  function addTodo(text) {
    const trimmedText = text.trim();

    if (!trimmedText) {
      return;
    }

    setTodos((currentTodos) => [
      {
        id: Date.now(),
        text: trimmedText,
        completed: false
      },
      ...currentTodos
    ]);
  }

  function deleteTodo(id) {
    setTodos((currentTodos) => currentTodos.filter((todo) => todo.id !== id));
  }

  function toggleTodo(id) {
    setTodos((currentTodos) =>
      currentTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  return (
    <main className="app">
      <section className="todo-shell" aria-labelledby="app-title">
        <header className="app-header">
          <h1 id="app-title">TodoList</h1>
          <p className="summary">
            {remainingCount === 0
              ? "所有任务都已完成"
              : `还有 ${remainingCount} 个任务待完成`}
          </p>
        </header>

        <TodoInput onAddTodo={addTodo} />

        <Filter currentFilter={filter} onFilterChange={setFilter} />

        <TodoList
          todos={filteredTodos}
          onDeleteTodo={deleteTodo}
          onToggleTodo={toggleTodo}
        />
      </section>
    </main>
  );
}

export default App;
