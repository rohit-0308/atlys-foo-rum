// src/App.tsx

import React, { useState } from "react";
import Header from "../components/Header";
import PostEditor from "../components/PostEditor";

const App = () => {
  return (
    <>
      <div className="mx-auto px-4 py-6 bg-white dark:bg-gray-900 min-h-screen text-gray-900 dark:text-gray-100">
        {/* Header */}
        <Header />

        <div className="max-w-2xl mx-auto px-4">
          {/* Post Editor */}
          <PostEditor />
        </div>
      </div>
    </>
  );
};

export default App;
