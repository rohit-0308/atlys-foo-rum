import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { IoLogInOutline } from "react-icons/io5";

type SignInProps = {
  isModal?: boolean;
  onClose?: () => void;
  onSwitchToSignUp?: () => void;
};

const SignIn = ({
  isModal = false,
  onClose,
  onSwitchToSignUp,
}: SignInProps) => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    const success = login(email, pass);
    if (!success) return setError("Invalid credentials");
    if (isModal && onClose) onClose();
    else navigate("/", { state: { animateFromRight: true } });
  };

  const handleSignUpRedirect = () => {
    if (isModal && onSwitchToSignUp) onSwitchToSignUp();
    else {
      if (onClose) onClose();
      navigate("/signup");
    }
  };

  const content = (
    <div className="bg-gray-200 border rounded-xl dark:bg-gray-700 dark:border-gray-600 p-6 w-full max-w-xl">
      <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl text-gray-900 dark:text-gray-100">
        <div className="flex justify-center mb-4 text-4xl text-indigo-600 dark:text-indigo-400">
          <IoLogInOutline />
        </div>
        <h2 className="text-xl font-semibold mb-1 text-center">
          Sign in to continue
        </h2>
        <p className="text-gray-500 dark:text-gray-400 text-sm mb-6 text-center">
          Sign in to access all the features on this app
        </p>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            Email or username
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="w-full px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Password</label>
          <input
            type="password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            placeholder="Enter your password"
            className="w-full px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none"
          />
        </div>

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <button
          onClick={handleLogin}
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 rounded-lg mb-4"
        >
          Sign In
        </button>
      </div>
      <p className="text-sm pt-4 text-center text-gray-600 dark:text-gray-300">
        Don’t have an account?{" "}
        <button
          onClick={handleSignUpRedirect}
          className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium"
        >
          Sign Up
        </button>
      </p>
    </div>
  );

  if (isModal) {
    return (
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      >
        <div
          className="animate-slide-down"
          onClick={(e) => e.stopPropagation()}
        >
          {content}
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-white dark:bg-gray-900 px-4 animate-slide-in-left">
      {content}
    </div>
  );
};

export default SignIn;
