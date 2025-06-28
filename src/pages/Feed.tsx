import React, { useState } from "react";
import PostEditor from "../components/PostEditor";
import PostCard from "../components/PostCard";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { useAuth } from "../context/AuthContext";

const Feed = () => {
  const { user } = useAuth();
  const [showSignInModal, setShowSignInModal] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);

  const handleClick = () => {
    if (!user) setShowSignInModal(true);
  };

  return (
    <main className="bg-white dark:bg-gray-900 min-h-screen text-gray-900 dark:text-gray-100 px-4 py-8">
      <div
        className="max-w-2xl mx-auto"
        onClick={handleClick}
        onMouseDown={(e) => {
          if (!user) {
            e.preventDefault();
            e.stopPropagation();
          }
        }}
      >
        <PostEditor />

        <div className="space-y-4 mt-6">
          <PostCard
            name="Theresa Webb"
            avatar="https://i.pravatar.cc/40?img=1"
            emoji="😊"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla."
          />
          <PostCard
            name="Courtney Henry"
            avatar="https://i.pravatar.cc/40?img=2"
            emoji="🔥"
            content="Aliquam erat volutpat. Pellentesque habitant morbi tristique senectus et netus."
          />
        </div>
      </div>

      {showSignInModal && (
        <SignIn
          isModal
          onClose={() => setShowSignInModal(false)}
          onSwitchToSignUp={() => {
            setShowSignInModal(false);
            setShowSignUpModal(true);
          }}
        />
      )}

      {showSignUpModal && (
        <SignUp
          isModal
          onClose={() => setShowSignUpModal(false)}
          onSwitchToSignIn={() => {
            setShowSignUpModal(false);
            setShowSignInModal(true);
          }}
        />
      )}
    </main>
  );
};

export default Feed;
