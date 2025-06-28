import { useState } from "react";
import {
  FaBold,
  FaItalic,
  FaUnderline,
  FaTrash,
  FaBell,
  FaPlus,
  FaMicrophone,
} from "react-icons/fa";
import { PiListBullets } from "react-icons/pi";
import { MdFormatListNumbered } from "react-icons/md";
import { IoSend } from "react-icons/io5";

type PostEditorProps = {
  onPost: (content: string, emoji: string) => void;
};

const PostEditor = ({ onPost }: PostEditorProps) => {
  const [content, setContent] = useState("");

  const handleSubmit = () => {
    const trimmed = content.trim();
    if (!trimmed) return;
    onPost(trimmed, "😎");
    setContent("");
  };

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
              <div
                onClick={() => alert("function not implemented")}
                className="ml-5 flex gap-3 text-lg"
              >
                <div className="flex gap-3 pr-2 border-r-2 border-gray-400 dark:border-white">
                  <FaBold />
                  <FaItalic />
                  <FaUnderline />
                </div>
                <div className="flex gap-3 pr-2 border-r-2 border-gray-400 dark:border-white">
                  <PiListBullets />
                  <MdFormatListNumbered />
                </div>
                <div className="flex gap-3 pr-2 ">
                  <span className="px-2 text-xs truncate min-w-0">99</span>
                  <code className="px-2 text-xs truncate min-w-0">{`</>`}</code>
                </div>
              </div>
            </div>
          </div>
          <button
            onClick={() => alert("function not implemented")}
            className="bg-red-100 dark:bg-red-900 text-red-500 dark:text-red-300 rounded p-2 hover:bg-red-200 dark:hover:bg-red-800 flex-shrink-0"
          >
            <FaTrash />
          </button>
        </div>

        <textarea
          rows={3}
          placeholder="😎 How are you feeling today?"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full outline-none text-gray-700 dark:text-gray-100 placeholder:text-gray-400 dark:placeholder:text-gray-500 bg-transparent resize-none"
        />

        <div className="p-2 flex justify-between items-center border-t min-w-0 ">
          <div
            onClick={() => alert("function not implemented")}
            className=" flex gap-4 text-gray-500 dark:text-gray-400 text-lg min-w-0 flex-shrink"
          >
            <div className="gap-5 flex justify-center items-center">
              <div className="bg-gray-200 dark:bg-gray-500 rounded h-7 w-7 flex justify-center items-center">
                <FaPlus />
              </div>
              <FaMicrophone />
              <FaBell />
            </div>
          </div>
          <button
            onClick={handleSubmit}
            className="text-indigo-500 hover:text-indigo-700 text-lg flex-shrink-0"
          >
            <IoSend />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostEditor;
