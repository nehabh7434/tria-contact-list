import React from "react";

export default function SearchBar({ value, onChange, placeholder = "Search contacts..." }) {
  return (
    <div className="relative w-full md:w-80">
      {/* 🔍 Search Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1116.65 16.65z"
        />
      </svg>

      {/* 💬 Input */}
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full pl-10 pr-4 py-2 rounded-xl bg-white border border-gray-200 shadow-sm outline-none focus:ring-2 focus:ring-primary/40 text-gray-800 placeholder-gray-400"
      />
    </div>
  );
}
