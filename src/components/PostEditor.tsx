import React from "react";
import {
  FaBold,
  FaItalic,
  FaUnderline,
  FaTrash,
  FaBell,
  FaPlus,
  FaMicrophone,
} from "react-icons/fa";
import { IoSend } from "react-icons/io5";

const PostEditor = () => {
  return (
    <div className="bg-gray-200 border rounded-xl dark:bg-gray-500 dark:border-gray-500">
      <div className="border rounded-xl m-1 p-2 bg-white dark:bg-gray-800 dark:border-gray-700 space-y-4">
        {/* Toolbar */}
        <div className="flex justify-between items-center min-w-0">
          <div className="bg-gray-200 dark:bg-gray-500 dark:border-gray-500 rounded-xl min-w-0">
            <div className="flex items-center p-1 gap-2 text-gray-600 dark:text-gray-300 text-sm flex-wrap min-w-0">
              <select className="text-sm border rounded-xl px-2 py-1 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100 max-w-[100px] min-w-0">
                <option>Paragraph</option>
              </select>
              <FaBold />
              <FaItalic />
              <FaUnderline />
              <span className="px-2 text-xs truncate min-w-0">99</span>
              <code className="px-2 text-xs truncate min-w-0">{`</>`}</code>
            </div>
          </div>
          <button className="bg-red-100 dark:bg-red-900 text-red-500 dark:text-red-300 rounded p-2 hover:bg-red-200 dark:hover:bg-red-800 flex-shrink-0">
            <FaTrash />
          </button>
        </div>

        {/* Input */}
        <input
          type="text"
          placeholder="How are you feeling today?"
          className="w-full outline-none text-gray-700 dark:text-gray-100 placeholder:text-gray-400 dark:placeholder:text-gray-500 bg-transparent"
        />

        {/* Action icons */}
        <div className="flex justify-between items-center border-t min-w-0">
          <div className="flex gap-4 text-gray-500 dark:text-gray-400 text-lg min-w-0 flex-shrink">
            <FaPlus />
            <FaMicrophone />
            <FaBell />
          </div>
          <button className="text-indigo-500 dark:text-gray-400 p-2 flex-shrink-0">
            <IoSend />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostEditor;
