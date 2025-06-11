import { User, BookOpenText } from "lucide-react";

export default function Sidebuttom() {
  return (
    <div className="flex justify-around ">
      <div className="bg-green">
        <a
          href="/users"
          className="flex items-center space-x-3 hover:bg-indigo-600 px-3 py-2 rounded mr-7"
        >
          <User className=" w-10 h-10" />
        </a>
      </div>
      <div className="flex justify-center">
        <a
          href="/blog"
          className="flex items-center space-x-3 hover:bg-indigo-600 px-3 py-2 rounded ml-10"
        >
          <BookOpenText className="w-10 h-10" />
        </a>
      </div>
    </div>
  );
}
