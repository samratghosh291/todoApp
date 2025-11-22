// components/CompletedList.jsx
import React from "react";
import TaskItem from "./TaskItem";

export default function CompletedList({ todos, toggleExpanded, toggleCompleted, deleteTodo }) {
  return (
    <div className="bg-white border border-slate-300 rounded-lg">
      <div className="p-4 border-b border-slate-200">
        <h2 className="text-lg font-medium">Completed</h2>
      </div>

      {todos.map((t) => (
        <TaskItem
          key={t.id}
          todo={t}
          toggleExpanded={toggleExpanded}
          toggleCompleted={toggleCompleted}
          deleteTodo={deleteTodo}
        />
      ))}
    </div>
  );
}
