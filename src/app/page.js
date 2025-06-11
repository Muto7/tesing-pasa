import UsersPage from "./users/page";

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex-1 ml-64 p-4 mt-16">
        <UsersPage />
      </div>
    </div>
  );
}
