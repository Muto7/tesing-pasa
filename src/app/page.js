import Htop from "./components/Htop";
import Sidebar from "./components/Sidebar";
import UsersPage from "./users/page";

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <div className="fixed top-0 left-0 right-0 z-20">
        <Htop />
      </div>

      {/* Main Content */}
      <div className="flex flex-1">
        <div className="fixed w-64 h-full pt-16">
          <Sidebar />
        </div>
        {/* Page Content */}
        <div className="flex-1 ml-64 p-4 mt-16">
          <UsersPage />
        </div>
      </div>
    </div>
  );
}
