// components/SearchBar.jsx
import React from "react";
import { Search } from "lucide-react";

export default function SearchBar({ search, setSearch }) {
  return (
    <div className="mb-5 flex items-center bg-white border border-gray-300 px-3 py-2 rounded-lg">
      <Search size={18} className="text-gray-500" />
      <input
        type="text"
        className="ml-2 flex-1 bg-transparent outline-none text-gray-900 placeholder-gray-400"
        placeholder="Search tasks..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}
