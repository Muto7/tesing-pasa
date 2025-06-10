export default async function Sidebar() {
  return (
    <div
      className="bg-gray-800 text-white 
                    fixed h-screen transition-all 
                    duration-300 z-10"
    >
      <div className="mt-4">
        <a
          href="#"
          className="text-white 
                          hover:text-gray-300"
        >
          users
        </a>
      </div>
    </div>
  );
}
