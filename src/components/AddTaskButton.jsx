// components/AddTaskButton.jsx
import React from "react";
import { Plus } from "lucide-react";

export default function AddTaskButton({ showForm, setShowForm }) {
  return (
    <div className="flex justify-end mb-4">
      <button
        onClick={() => setShowForm(!showForm)}
        className="
          flex items-center gap-2 px-4 py-2 
          bg-blue-600 text-white rounded-lg 
          hover:bg-blue-700           
          active:bg-blue-800          
          transition-all duration-200 cursor-pointer
        "
      >
        <Plus size={18} />
        Add Task
      </button>
    </div>
  );
}
