export type Post = {
  id: number;
  name: string;
  avatar: string;
  emoji: string;
  content: string;
};

export const post: Post[] = [
  {
    id: 1,
    name: "Theresa Webb",
    avatar: "https://i.pravatar.cc/40?img=1",
    emoji: "😊",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla.",
  },
  {
    id: 2,
    name: "Albert Flores",
    avatar: "https://i.pravatar.cc/40?img=2",
    emoji: "🔥",
    content:
      "Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu condimentum sed.",
  },
  {
    id: 3,
    name: "Courtney Henry",
    avatar: "https://i.pravatar.cc/40?img=3",
    emoji: "🌟",
    content:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
  },
];
