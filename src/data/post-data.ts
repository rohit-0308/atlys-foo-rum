export type Post = {
  id: number;
  name: string;
  avatar: string;
  emoji: string;
  content: string;
};

export const posts: Post[] = [
  {
    id: 1,
    name: "Theresa Webb",
    avatar: "https://i.pravatar.cc/40?img=1",
    emoji: "😊",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla.",
  },
  {
    id: 2,
    name: "Albert Flores",
    avatar: "https://i.pravatar.cc/40?img=2",
    emoji: "🔥",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla.",
  },
  {
    id: 3,
    name: "Courtney Henry",
    avatar: "https://i.pravatar.cc/40?img=3",
    emoji: "🌟",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla.",
  },
];
