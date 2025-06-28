import { FaHeart, FaComment, FaShare } from "react-icons/fa";

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
    <div className="bg-gray-200 border rounded-xl dark:bg-gray-500 dark:border-gray-500">
      <div className="card-shadow m-1 p-4 border rounded-xl bg-white dark:bg-gray-800 ">
        <div className="flex items-center gap-3 mb-2">
          <img src={avatar} alt={name} className="w-8 h-8 rounded-full" />
          <div>
            <div className="font-semibold text-sm text-gray-900 dark:text-gray-100">
              {name}
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400">
              5 mins ago
            </div>
          </div>
        </div>

        <div className="flex gap-2 text-sm text-gray-800 dark:text-gray-200 mb-3">
          <span className="mr-2 text-xl">{emoji}</span>
          {content}
        </div>
      </div>
      <div
        onClick={() => alert("function not implemented")}
        className="m-2 pl-2 flex gap-6 text-gray-500 dark:text-gray-400 text-sm"
      >
        <button className="flex items-center gap-1 hover:text-red-500 dark:hover:text-red-400">
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
