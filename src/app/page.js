import Sidebar from "./components/Sidebar";
import UsersPage from "./users/page";

export default function Home() {
  return (
    <div>
      <Sidebar />
      <UsersPage />
    </div>
  );
}
