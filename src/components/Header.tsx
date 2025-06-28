import React from "react";
import { useDarkMode } from "../context/DarkModeContext";
import {
  IoLogInOutline,
  IoLogOutOutline,
  IoArrowBackSharp,
} from "react-icons/io5";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Header: React.FC = () => {
  const { isDark, toggleDarkMode } = useDarkMode();
  const { user, logout } = useAuth(); // <-- Grab user and logout
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const isAuthPage = pathname === "/signin" || pathname === "/signup";

  const handleAuthAction = () => {
    if (user) {
      logout(); // Call logout if already logged in
    } else {
      navigate("/signin");
    }
  };

  return (
    <header className="h-16 flex justify-between items-center px-6 py-4 bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="font-semibold text-2xl">◎ foo-rum</div>
      <div className="flex items-center gap-6">

        <button
          onClick={toggleDarkMode}
          aria-label="Toggle dark mode"
          className={`relative w-14 h-7 flex items-center rounded-full p-1 transition-colors duration-300 ${
            isDark ? "bg-gray-600" : "bg-gray-300"
          }`}
        >
          <span className="absolute left-1 text-sm">🌞</span>
          <span className="absolute right-1 text-sm">🌙</span>
          <div
            className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
              isDark ? "translate-x-7" : "translate-x-0"
            }`}
          />
        </button>

        {isAuthPage ? (
          <button
            onClick={() => navigate("/", { state: { animateFromRight: true } })}
            className="flex items-center gap-1 text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:underline"
          >
            <IoArrowBackSharp /> Back to Home
          </button>
        ) : (
          <button
            onClick={handleAuthAction}
            className="flex items-center gap-1 text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:underline"
          >
            {user ? (
              <>
                Logout <IoLogOutOutline />
              </>
            ) : (
              <>
                Login <IoLogInOutline />
              </>
            )}
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
