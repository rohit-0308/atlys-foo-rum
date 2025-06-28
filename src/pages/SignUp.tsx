import { useNavigate } from "react-router-dom";
import { IoLogInOutline } from "react-icons/io5";
import "../styles/auth-form.css";

type SignUpProps = {
  isModal?: boolean;
  onClose?: () => void;
  onSwitchToSignIn?: () => void;
};

const SignUp = ({
  isModal = false,
  onClose,
  onSwitchToSignIn,
}: SignUpProps) => {
  const navigate = useNavigate();

  const handleSignInRedirect = () => {
    if (isModal && onSwitchToSignIn) onSwitchToSignIn();
    else {
      if (onClose) onClose();
      navigate("/signin");
    }
  };

  const content = (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-icon">
          <IoLogInOutline />
        </div>
        <h2 className="auth-heading">Create an account to continue</h2>
        <p className="auth-subtext">
          Create an account to access all the features on this app
        </p>

        <div className="mb-4">
          <label className="auth-label">Email or username</label>
          <input
            type="email"
            placeholder="you@example.com"
            className="auth-input"
          />
        </div>

        <div className="mb-4">
          <label className="auth-label">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            className="auth-input"
          />
        </div>
        <div className="mb-4">
          <label className="auth-label">Repeat Password</label>
          <input
            type="password"
            placeholder="Enter your password again"
            className="auth-input"
          />
        </div>

        <button
          onClick={() => alert("function not implemented")}
          className="auth-button"
        >
          Sign Up
        </button>
      </div>
      <p className="auth-footer">
        Already have an account?{" "}
        <button onClick={handleSignInRedirect} className="auth-footer-link">
          Sign In
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

export default SignUp;
