// components/ShareMenu.jsx
import React from "react";

export default function ShareMenu() {
  return (
    <div className="absolute right-0 mt-2 w-44 bg-white border border-slate-200 rounded-lg shadow-md z-10">
      <button className="block w-full px-4 py-2 text-left hover:bg-slate-50">💬 WhatsApp</button>
      <button className="block w-full px-4 py-2 text-left hover:bg-slate-50">𝕏 Twitter</button>
      <button className="block w-full px-4 py-2 text-left hover:bg-slate-50">🔴 Reddit</button>
      <div className="h-px bg-slate-100 my-1"></div>
      <button className="block w-full px-4 py-2 text-left hover:bg-slate-50">📋 Copy Text</button>
    </div>
  );
}
