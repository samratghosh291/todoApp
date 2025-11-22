// components/TaskList.jsx
import React from "react";
import TaskItem from "./TaskItem";

export default function TaskList({ todos, toggleExpanded, toggleCompleted, deleteTodo }) {
  return (
    <div className="bg-white border border-slate-300 rounded-lg mb-6">
      <div className="p-4 border-b border-slate-200">
        <h2 className="text-lg font-medium">Active Tasks</h2>
      </div>

      {todos.length === 0 ? (
        <p className="text-center text-slate-500 py-10">No active tasks</p>
      ) : (
        todos.map((t) => (
          <TaskItem
            key={t.id}
            todo={t}
            toggleExpanded={toggleExpanded}
            toggleCompleted={toggleCompleted}
            deleteTodo={deleteTodo}
          />
        ))
      )}
    </div>
  );
}
