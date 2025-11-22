// App.jsx
import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import AddTaskButton from "./components/AddTaskButton";
import TaskForm from "./components/TaskForm";
import SearchBar from "./components/SearchBar";
import TaskList from "./components/TaskList";
import CompletedList from "./components/CompletedList";

export default function App() {
  // Load tasks and theme from localStorage
  const [todos, setTodos] = useState(() => JSON.parse(localStorage.getItem("tasks")) || []);
  const [showForm, setShowForm] = useState(false);
  const [dark, setDark] = useState(() => localStorage.getItem("theme") === "dark");
  const [search, setSearch] = useState("");

  // Sync dark mode class to <html> and save theme
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  // Save todos to localStorage whenever changed
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(todos));
  }, [todos]);

  // Add a new todo with validation
  const addTodo = (header, body, category) => {
    if (!header.trim() || !body.trim()) return; // prevent empty tasks
    setTodos((prev) => [
      ...prev,
      {
        id: Date.now(),
        header,
        body,
        category: category || "General",
        completed: false,
        expanded: false,
        completedAt: null,
      },
    ]);
    setShowForm(false);
  };

  // Toggle expanded/collapsed
  const toggleExpanded = (id) =>
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, expanded: !t.expanded } : t))
    );

  // Toggle completed
  const toggleCompleted = (id) =>
    setTodos((prev) =>
      prev.map((t) =>
        t.id === id
          ? {
              ...t,
              completed: !t.completed,
              completedAt: !t.completed ? new Date().toLocaleString() : null,
            }
          : t
      )
    );

  // Delete a todo
  const deleteTodo = (id) => setTodos((prev) => prev.filter((t) => t.id !== id));

  // Filter by search
  const filtered = todos.filter((t) =>
    t.header.toLowerCase().includes(search.toLowerCase())
  );

  const active = filtered.filter((t) => !t.completed);
  const completed = filtered.filter((t) => t.completed);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <div className="max-w-3xl mx-auto p-6">
        {/* Header */}
        <Header dark={dark} setDark={setDark} />

        {/* Search */}
        <SearchBar search={search} setSearch={setSearch} />

        {/* Add Task Button */}
        <AddTaskButton showForm={showForm} setShowForm={setShowForm} />

        {/* Task Form */}
        {showForm && <TaskForm addTodo={addTodo} cancel={() => setShowForm(false)} />}

        {/* Active Tasks */}
        <TaskList
          todos={active}
          toggleExpanded={toggleExpanded}
          toggleCompleted={toggleCompleted}
          deleteTodo={deleteTodo}
        />

        {/* Completed Tasks */}
        {completed.length > 0 && (
          <CompletedList
            todos={completed}
            toggleExpanded={toggleExpanded}
            toggleCompleted={toggleCompleted}
            deleteTodo={deleteTodo}
          />
        )}
      </div>
    </div>
  );
}
