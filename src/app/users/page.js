// app/users/page.js
import Layout from "../layout";
import { Eye, Pencil, Trash2 } from "lucide-react";

export default async function UsersPage() {
  const res = await fetch("https://gorest.co.in/public/v2/users", {
    next: { revalidate: 60 }, // Optional: biar tidak terlalu sering fetch
  });
  const users = await res.json();

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Users</h1>
        <button className="bg-white text-black px-4 py-2 rounded hover:bg-gray-300">
          New User
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full text-left border-separate border-spacing-y-2">
          <thead className="text-sm font-semibold text-gray-400">
            <tr>
              <th className="p-2">ID</th>
              <th className="p-2">Name</th>
              <th className="p-2">Gender</th>
              <th className="p-2">Status</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody className="text-white">
            {users.map((user) => (
              <tr key={user.id} className="border-b border-gray-700">
                <td className="p-2">{user.id}</td>
                <td className="p-2">{user.name}</td>
                <td className="p-2">{user.gender}</td>
                <td className="p-2">{user.status}</td>
                <td className="p-2">
                  <div className="flex gap-3">
                    <button className="flex items-center gap-1 text-blue-400 hover:underline">
                      <Eye size={16} /> View
                    </button>
                    <button className="flex items-center gap-1 text-yellow-400 hover:underline">
                      <Pencil size={16} /> Edit
                    </button>
                    <button className="flex items-center gap-1 text-red-400 hover:underline">
                      <Trash2 size={16} /> Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
