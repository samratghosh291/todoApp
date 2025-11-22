// components/TaskItem.jsx
import React from "react";
import { ChevronDown, ChevronRight, Trash2, Check } from "lucide-react";

const categoryColors = {
  Work: "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300",
  Personal: "bg-pink-100 text-pink-700 dark:bg-pink-900 dark:text-pink-300",
  Shopping: "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300",
  Other: "bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300",
  General: "bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300",
};

export default function TaskItem({ todo, toggleCompleted, toggleExpanded, deleteTodo }) {
  return (
    <div className="p-4 flex gap-4 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition">

      {/* Checkbox */}
      <button
        onClick={() => toggleCompleted(todo.id)}
        className={`
          w-5 h-5 border-2 rounded-md flex items-center justify-center cursor-pointer
          ${todo.completed 
            ? "bg-blue-500 border-blue-500 text-white"
            : "border-gray-400 dark:border-gray-600"}
        `}
      >
        {todo.completed && <Check size={14} />}
      </button>

      <div className="flex-1">
        <button
          onClick={() => toggleExpanded(todo.id)}
          className="flex items-center gap-2 w-full text-left cursor-pointer"
        >
          {todo.expanded ? <ChevronDown size={16}/> : <ChevronRight size={16}/>}

          <span className={`font-medium dark:text-white ${todo.completed ? "line-through" : ""}`}>
            {todo.header}
          </span>

          {/* 🎨 COLORFUL CATEGORY LABEL */}
          <span
            className={`
              ml-3 px-2 py-1 text-xs rounded-md 
              ${categoryColors[todo.category] || categoryColors["General"]}
            `}
          >
            {todo.category}
          </span>
        </button>

        {todo.expanded && todo.body && (
          <p className="mt-2 ml-6 text-sm text-gray-600 dark:text-gray-300">
            {todo.body}
          </p>
        )}

        {todo.completed && todo.completedAt && (
          <p className="ml-6 text-xs text-gray-500 dark:text-gray-400">
            Completed: {todo.completedAt}
          </p>
        )}
      </div>

      <button
        onClick={() => deleteTodo(todo.id)}
        className="text-gray-400 hover:text-red-500 transition cursor-pointer"
      >
        <Trash2 size={16} />
      </button>
    </div>
  );
}
