// src/app/posts/page.js

import Link from "next/link";

export default async function PostsPage() {
  const res = await fetch(`https://gorest.co.in/public/v2/posts/`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Gagal mengambil data posts");
  }

  const posts = await res.json();

  console.log(posts);

  return (
    <div>
      <div className="">
        <h1 className="text-3xl font-bold mb-6 p-2">Posts</h1>
      </div>

      <div className="space-y-6">
        {posts.map((post) => (
          <div key={post.id} className="border border-zinc-700 p-6 rounded m-6">
            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
            <p className="text-sm text-gray-300 mb-4">{post.body}</p>
            <p className="text-sm text-gray-400 mb-2">
              User ID: {post.user_id}
            </p>
            <Link href={`/blog/${post.user_id}`}>
              <button className="bg-white text-black px-4 py-2 rounded">
                Detail
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
