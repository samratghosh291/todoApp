// components/Header.jsx
import React, { useState } from "react";
import { Share2, Moon, Sun } from "lucide-react";
import ShareMenu from "./ShareMenu";

export default function Header() {
  const [showShare, setShowShare] = useState(false);

  return (
    <div className="flex items-center justify-between mb-6">
      <div>
        <h1 className="text-3xl font-light dark:text-white">Task Manager</h1>
        <p className="text-gray-500 dark:text-gray-300 text-sm">
          Organize and track your priorities
        </p>
      </div>

      <div className="flex gap-3 items-center">

        {/* Dark Mode Toggle */}
        {/* <button
          onClick={() => setDark(!dark)}
          className="p-2 bg-gray-200 dark:bg-gray-700 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition"
        >
          {dark ? <Sun size={18} /> : <Moon size={18} />}
        </button> */}

        {/* Share Menu */}
        <div className="relative">
          <button
            onClick={() => setShowShare(!showShare)}
            className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 
                       border border-gray-300 dark:border-gray-700 
                       rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition"
          >
            <Share2 size={18} />
            <span>Share</span>
          </button>

          {showShare && <ShareMenu />}
        </div>
      </div>
    </div>
  );
}
