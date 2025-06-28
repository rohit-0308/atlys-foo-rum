import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import PostEditor from "../components/PostEditor";
import PostCard from "../components/PostCard";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { useAuth } from "../context/AuthContext";
import { posts as initialPosts } from "../data/post-data";

const Feed = () => {
  const { user } = useAuth();
  const location = useLocation();
  const [animatePage, setAnimatePage] = useState(false);

  const [posts, setPosts] = useState(initialPosts);
  const [newPostId, setNewPostId] = useState<string | null>(null);
  const [showSignInModal, setShowSignInModal] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);

  useEffect(() => {
    if (location.state?.animateFromRight) {
      setAnimatePage(true);
      const timer = setTimeout(() => setAnimatePage(false), 600);
      return () => clearTimeout(timer);
    }
  }, [location.state]);

  const handleClick = () => {
    if (!user) setShowSignInModal(true);
  };

  const handleAddPost = (content: string, emoji: string) => {
    const newPost = {
      id: Date.now(),
      name: user?.email === "test@user.com" ? "Test User" : "Demo User",
      avatar: `https://i.pravatar.cc/40?u=${user?.email || "Anonymous"}`,
      content,
      emoji,
    };
    setPosts([newPost, ...posts]);
    setNewPostId(newPost.id.toString());
    setTimeout(() => setNewPostId(null), 800);
  };

  return (
    <main
      className={`bg-white dark:bg-gray-900 min-h-screen text-gray-900 dark:text-gray-100 px-4 py-8 transition-transform duration-700 ${
        animatePage ? "animate-slide-in-right" : ""
      }`}
    >
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
        <PostEditor onPost={handleAddPost} />

        <div className="space-y-4 mt-6">
          {posts.map((post) => (
            <div
              key={post.id}
              className={
                post.id.toString() === newPostId ? "animate-slide-down" : ""
              }
            >
              <PostCard
                name={post.name}
                avatar={post.avatar}
                emoji={post.emoji}
                content={post.content}
              />
            </div>
          ))}
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
