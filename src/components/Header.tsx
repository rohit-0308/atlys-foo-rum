import React from "react";
import { useDarkMode } from "../context/DarkModeContext";

const Header = () => {
  const { isDark, toggleDarkMode } = useDarkMode();

  return (
    <header className="flex justify-between items-center mb-6">
      {/* App Title */}
      <div className="font-semibold text-xl">◎ foo-rum</div>

      <div className="flex items-center gap-4">
        {/* Dark Mode Toggle Switch with Emojis */}
        <button
          onClick={toggleDarkMode}
          aria-label="Toggle dark mode"
          className={`relative w-14 h-7 flex items-center rounded-full p-1 transition-colors duration-300 ${
            isDark ? "bg-gray-600" : "bg-gray-300"
          }`}
        >
          {/* Emoji Icons */}
          <span className="absolute left-1 text-sm">🌞</span>
          <span className="absolute right-1 text-sm">🌙</span>

          {/* Toggle Thumb */}
          <div
            className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
              isDark ? "translate-x-7" : "translate-x-0"
            }`}
          />
        </button>

        {/* Login */}
        <button className="text-sm text-gray-700 dark:text-gray-300 hover:underline flex items-center gap-1">
          Login <span>🔓</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
