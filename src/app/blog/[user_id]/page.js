// src/app/users/[user_id]/page.js

import Link from "next/link";

export default async function UserPostsPage({ params }) {
  const user_id = params.user_id;

  const res = await fetch(
    `https://gorest.co.in/public/v2/users/${user_id}/posts`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    return (
      <div className="p-4 text-red-500">
        <h1 className="text-2xl font-bold mb-2">
          Gagal mengambil post berdasarkan user_id
        </h1>
        <p>Pastikan user ID valid..</p>
      </div>
    );
  }

  const posts = await res.json();

  console.log(posts);

  return (
    <div>
      <div className="">
        <h1 className="text-3xl font-bold m-6 p-2">
          Post dari User #{user_id}
        </h1>
      </div>
      <div className="space-y-6">
        {posts.map((post) => (
          <div
            key={post.id}
            className="border border-zinc-700 p-6 rounded mb-4"
          >
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p className="text-sm text-gray-300 mt-2">{post.body}</p>
          </div>
        ))}
        <div>
          <Link href="/blog">
            <button>kembali</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
