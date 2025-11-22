// components/SearchBar.jsx
import React from "react";
import { Search } from "lucide-react";

export default function SearchBar({ search, setSearch }) {
  return (
    <div className="mb-5 flex items-center bg-white dark:bg-gray-800 
                    border border-gray-300 dark:border-gray-700 
                    px-3 py-2 rounded-lg">

      <Search size={18} className="text-gray-500 dark:text-gray-300" />
      <input
        className="ml-2 flex-1 bg-transparent outline-none dark:text-white"
        placeholder="Search tasks..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}
