import React, { useState } from "react";
import Header from "../components/Header";
import PostEditor from "../components/PostEditor";
import PostCard from "../components/PostCard";
import SignIn from "./SignIn";
// import { posts } from "../data/post-data";
import { useAuth } from "../context/AuthContext";

const Feed = () => {
  const { user } = useAuth();
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    if (!user) {
      setShowModal(true);
    } else console.log(user);
  };

  return (
    <>
      <div className="mx-auto px-4 py-6 bg-white dark:bg-gray-900 min-h-screen text-gray-900 dark:text-gray-100">
        {/* Header */}
        <Header />

        <div
          className="max-w-2xl mx-auto px-4"
          onClick={handleClick}
          onMouseDown={(e) => {
            if (!user) {
              e.preventDefault();
              e.stopPropagation();
            }
          }}
        >
          {/* Post Editor */}
          <PostEditor />

          {/* Posts */}
          <div className="space-y-4 mt-6">
            <PostCard
              name="Theresa Webb"
              avatar="https://i.pravatar.cc/40?img=1"
              emoji="😊"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla."
            />
            <PostCard
              name="Theresa Webb"
              avatar="https://i.pravatar.cc/40?img=1"
              emoji="😊"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla."
            />
          </div>
        </div>
        {showModal && (
          <SignIn
            isModal
            onClose={() => {
              setShowModal(false);
            }}
          />
        )}
      </div>
    </>
  );
};

export default Feed;
