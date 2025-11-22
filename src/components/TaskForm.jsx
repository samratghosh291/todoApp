// components/TaskForm.jsx
import React, { useState } from "react";

export default function TaskForm({ addTodo, cancel }) {
  const [header, setHeader] = useState("");
  const [body, setBody] = useState("");
  const [category, setCategory] = useState("General");

  const isInvalid = header.trim().length === 0 || body.trim().length === 0; // prevent empty tasks

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 mb-6 transition-shadow shadow-sm">

      {/* Task Title */}
      <input
        type="text"
        className="w-full border border-gray-300 rounded-lg px-3 py-2 mb-3 text-gray-900 placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Task title"
        value={header}
        onChange={(e) => setHeader(e.target.value)}
      />

      {/* Task Description */}
      <textarea
        className="w-full border border-gray-300 rounded-lg px-3 py-2 mb-3 text-gray-900 placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-400 resize-none"
        placeholder="Description"
        rows={3}
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />

      {/* Category */}
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="w-full border border-gray-300 rounded-lg px-3 py-2 mb-3 text-gray-900 cursor-pointer focus:ring-2 focus:ring-blue-400 outline-none"
      >
        <option>General</option>
        <option>Work</option>
        <option>Personal</option>
        <option>Shopping</option>
        <option>Other</option>
      </select>

      {/* Buttons */}
      <div className="flex gap-2">
        <button
          disabled={isInvalid}
          onClick={() => addTodo(header, body, category)}
          className={`px-5 py-2 rounded-lg text-white transition-colors duration-200
            ${isInvalid
              ? "bg-blue-300 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700 active:bg-blue-800 cursor-pointer"
            }`}
        >
          Create
        </button>

        <button
          onClick={cancel}
          className="px-5 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors duration-200 cursor-pointer"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
