import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { IoLogInOutline } from "react-icons/io5";
import "../styles/auth-form.css";

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
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-icon">
          <IoLogInOutline />
        </div>
        <h2 className="auth-heading">Sign in to continue</h2>
        <p className="auth-subtext">
          Sign in to access all the features on this app
        </p>

        <div className="mb-4">
          <label className="auth-label">Email or username</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="auth-input"
          />
        </div>

        <div className="mb-4">
          <label className="auth-label">Password</label>
          <input
            type="password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            placeholder="Enter your password"
            className="auth-input"
          />
        </div>

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <button onClick={handleLogin} className="auth-button">
          Sign In
        </button>
      </div>
      <p className="auth-footer">
        Don’t have an account?{" "}
        <button onClick={handleSignUpRedirect} className="auth-footer-link">
          Sign Up
        </button>
      </p>
    </div>
  );

  if (isModal) {
    return (
      <div onClick={onClose} className="auth-modal-overlay">
        <div
          className="animate-slide-down"
          onClick={(e) => e.stopPropagation()}
        >
          {content}
        </div>
      </div>
    );
  }

  return <div className="auth-fullscreen">{content}</div>;
};

export default SignIn;
