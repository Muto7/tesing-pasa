import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-indigo-500 h-14 flex items-center px-6 shadow">
      <div className="flex items-center space-x-3">
        <Link href="/" className="">
          dashboard
        </Link>
      </div>
    </header>
  );
}
