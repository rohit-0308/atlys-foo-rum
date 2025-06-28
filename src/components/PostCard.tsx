import { FaHeart, FaComment, FaShare } from "react-icons/fa";
import "../styles/component-utilities.css";

type PostCardProps = {
  name: string;
  avatar: string;
  emoji: string;
  content: string;
};

const PostCard: React.FC<PostCardProps> = ({
  name,
  avatar,
  emoji,
  content,
}) => {
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

        <div className="post-content">
          <span className="mr-2 text-xl">{emoji}</span>
          {content}
        </div>
      </div>
      <div
        onClick={() => alert("function not implemented")}
        className="icon-bar"
      >
        <button className="icon-action">
          <FaHeart />
        </button>
        <button className="flex items-center gap-1 hover:text-blue-500 dark:hover:text-blue-400">
          <FaComment />
        </button>
        <button className="flex items-center gap-1 hover:text-green-500 dark:hover:text-green-400">
          <FaShare />
        </button>
      </div>
    </div>
  );
};

export default PostCard;
