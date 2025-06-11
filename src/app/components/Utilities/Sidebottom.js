import { User, BookOpenText } from "lucide-react";
import Link from "next/link";

export default function Sidebuttom() {
  return (
    <div className="flex justify-around ">
      <div className="bg-green">
        <Link
          href="/users"
          className="flex items-center space-x-3 hover:bg-indigo-600 px-3 py-2 rounded mr-7"
        >
          <User className=" w-10 h-10" />
        </Link>
      </div>
      <div className="flex justify-center">
        <Link
          href="/blog"
          className="flex items-center space-x-3 hover:bg-indigo-600 px-3 py-2 rounded ml-10"
        >
          <BookOpenText className="w-10 h-10" />
        </Link>
      </div>
    </div>
  );
}
