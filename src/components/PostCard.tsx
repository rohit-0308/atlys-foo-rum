import { FaHeart, FaComment, FaShare } from "react-icons/fa";
import "../styles/component-utilities.css";
import { useAuth } from "../context/AuthContext";

type PostCardProps = {
  name: string;
  avatar: string;
  emoji: string;
  content: string;
  onUnauthClick?: () => void;
};

const PostCard: React.FC<PostCardProps> = ({
  name,
  avatar,
  emoji,
  content,
  onUnauthClick,
}) => {
  const { user } = useAuth();

  const handleProtectedClick = (fn: () => void) => {
    if (!user) {
      onUnauthClick?.();
      return;
    }
    fn();
  };

  return (
    <div className="card-container">
      <div className="card-inner">
        <div className="post-header">
          <img src={avatar} alt={name} className="w-8 h-8 rounded-full" />
          <div>
            <div className="user-name">{name}</div>
            <div className="user-time">5 mins ago</div>
          </div>
        </div>

        <div className="post-content break-words">
          <span className="mr-2 text-xl">{emoji}</span>
          {content}
        </div>
      </div>

      <div className="icon-bar">
        <button
          onClick={() =>
            handleProtectedClick(() => alert("function not implemented"))
          }
          className="icon-action"
        >
          <FaHeart />
        </button>
        <button
          onClick={() =>
            handleProtectedClick(() => alert("function not implemented"))
          }
          className="flex items-center gap-1 hover:text-blue-500 dark:hover:text-blue-400"
        >
          <FaComment />
        </button>
        <button
          onClick={() =>
            handleProtectedClick(() => alert("function not implemented"))
          }
          className="flex items-center gap-1 hover:text-green-500 dark:hover:text-green-400"
        >
          <FaShare />
        </button>
      </div>
    </div>
  );
};

export default PostCard;
