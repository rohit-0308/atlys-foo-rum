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
import "../styles/component-utilities.css";

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
    <div className="card-container">
      <div className="card-inner space-y-4">
        <div className="toolbar">
          <div className="card-container">
            <div className="flex items-center p-1 gap-2 text-gray-600 dark:text-gray-300 text-sm flex-wrap min-w-0">
              <select className="text-sm border rounded-xl px-2 py-1 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100 max-w-[100px] min-w-0">
                <option>Paragraph</option>
              </select>
              <div
                onClick={() => alert("function not implemented")}
                className="toolbar-btn"
              >
                <div className="toolbar-icon-group">
                  <FaBold />
                  <FaItalic />
                  <FaUnderline />
                </div>
                <div className="toolbar-icon-group">
                  <PiListBullets />
                  <MdFormatListNumbered />
                </div>
                <div className="flex gap-3 pr-2">
                  <span className="px-2 text-xs truncate min-w-0">99</span>
                  <code className="px-2 text-xs truncate min-w-0">{`</>`}</code>
                </div>
              </div>
            </div>
          </div>
          <button
            onClick={() => alert("function not implemented")}
            className="icon-btn"
          >
            <FaTrash />
          </button>
        </div>

        <textarea
          rows={3}
          placeholder="😎 How are you feeling today?"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="input-textarea"
        />

        <div className="action-bar">
          <div
            onClick={() => alert("function not implemented")}
            className="flex gap-4 text-gray-500 dark:text-gray-400 text-lg min-w-0 flex-shrink"
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
