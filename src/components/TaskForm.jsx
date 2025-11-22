// components/TaskForm.jsx
import React, { useState } from "react";

export default function TaskForm({ addTodo, cancel }) {
  const [header, setHeader] = useState("");
  const [body, setBody] = useState("");
  const [category, setCategory] = useState("General");

  const isInvalid = header.trim().length === 0; 

  return (
    <div className="bg-white dark:bg-gray-800 border border-slate-200
                    rounded-lg p-4 mb-6 transition">

      <input
        className="w-full border border-slate-300 dark:bg-gray-900 
                   rounded-lg px-3 py-2 mb-3 dark:text-white"
        placeholder="Task title"
        value={header}
        onChange={(e) => setHeader(e.target.value)}
      />

      <textarea
        className="w-full border border-slate-300 dark:bg-gray-900 
                   rounded-lg px-3 py-2 mb-3 dark:text-white"
        placeholder="Description (optional)"
        rows={3}
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="w-full border border-slate-300 dark:bg-gray-900 
                   rounded-lg px-3 py-2 mb-3 dark:text-white cursor-pointer"
      >
        <option>General</option>
        <option>Work</option>
        <option>Personal</option>
        <option>Shopping</option>
        <option>Other</option>
      </select>

      <div className="flex gap-2">

        {/* CREATE BUTTON (disabled when title empty) */}
        <button
          disabled={isInvalid}
          onClick={() => addTodo(header, body, category)}
          className={`
            px-5 py-2 rounded-lg text-white cursor-pointer 
            transition-all duration-200
            ${isInvalid
              ? "bg-blue-300 dark:bg-blue-900 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700 active:bg-blue-800"}
          `}
        >
          Create
        </button>

        <button
          onClick={cancel}
          className="px-5 py-2 bg-gray-200 dark:bg-gray-700 
                     rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 
                     transition cursor-pointer"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
