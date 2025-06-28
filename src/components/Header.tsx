import React from "react";
import { useDarkMode } from "../context/DarkModeContext";
import {
  IoLogInOutline,
  IoLogOutOutline,
  IoArrowBackSharp,
} from "react-icons/io5";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../styles/component-utilities.css";

const Header: React.FC = () => {
  const { isDark, toggleDarkMode } = useDarkMode();
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const isAuthPage = pathname === "/signin" || pathname === "/signup";

  const handleAuthAction = () => {
    if (user) {
      logout();
    } else {
      navigate("/signin");
    }
  };

  return (
    <header className="app-header">
      <div className="font-semibold text-2xl">◎ foo-rum</div>
      <div className="flex-row-gap">
        <button
          onClick={toggleDarkMode}
          aria-label="Toggle dark mode"
          className={`toggle-switch ${isDark ? "bg-gray-600" : "bg-gray-300"}`}
        >
          <span className="absolute left-1 text-sm">🌞</span>
          <span className="absolute right-1 text-sm">🌙</span>
          <div
            className={`toggle-thumb ${
              isDark ? "translate-x-7" : "translate-x-0"
            }`}
          />
        </button>

        {isAuthPage ? (
          <button
            onClick={() => navigate("/", { state: { animateFromRight: true } })}
            className="text-button"
          >
            <IoArrowBackSharp /> Back to Home
          </button>
        ) : (
          <button onClick={handleAuthAction} className="text-button">
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
