import { User, BookOpenText } from "lucide-react";
import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="bg-indigo-500 h-screen w-64 p-4 space-y-4 text-white">
      <div>
        <Link
          href="/users"
          className="flex items-center space-x-3 hover:bg-indigo-600 px-3 py-2 rounded"
        >
          <User className="w-5 h-5" />
          <span className="text-base font-medium">Users</span>
        </Link>
      </div>
      <div>
        <Link
          href="/blog"
          className="flex items-center space-x-3 hover:bg-indigo-600 px-3 py-2 rounded"
        >
          <BookOpenText className="w-5 h-5" />
          <span className="text-base font-medium">Blog</span>
        </Link>
      </div>
    </div>
  );
}
