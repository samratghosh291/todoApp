// components/Header.jsx
import React, { useState } from "react";
import { Share2 } from "lucide-react";
import ShareMenu from "./ShareMenu";

export default function Header() {
  const [showShare, setShowShare] = useState(false);

  return (
    <div className="flex items-center justify-between mb-6">
      {/* Title */}
      <div>
        <h1 className="text-3xl font-light text-gray-900">Task Manager</h1>
        <p className="text-gray-500 text-sm">
          Organize and track your priorities
        </p>
      </div>

      {/* Share Menu */}
      <div className="relative">
        <button
          onClick={() => setShowShare(!showShare)}
          className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 transition cursor-pointer"
        >
          <Share2 size={18} />
          <span>Share</span>
        </button>

        {showShare && <ShareMenu />}
      </div>
    </div>
  );
}
