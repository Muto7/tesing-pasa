import { User, BookOpenText } from "lucide-react";

export default async function Sidebar() {
  return (
    <div className="fixed h-screen w-64 bg-gray-800 text-white transition-all duration-300 z-10">
      <div className="mt-4 px-4">
        <a
          href="/users"
          className="flex items-center gap-3 text-white hover:text-gray-300 p-2 rounded hover:bg-gray-700 transition-colors"
        >
          <User className="w-5 h-5" />
          <span>Users</span>
        </a>
      </div>
      <div className="mt-4 px-4">
        <a
          href="/blog"
          className="flex items-center gap-3 text-white hover:text-gray-300 p-2 rounded hover:bg-gray-700 transition-colors"
        >
          <BookOpenText className="w-5 h-5" />
          <span>Blog</span>
        </a>
      </div>
    </div>
  );
}
