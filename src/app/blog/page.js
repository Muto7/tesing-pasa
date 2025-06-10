// // src/app/posts/page.js
// import Layout from "@/app/components/Layout";

// export default async function PostsPage() {
//   const res = await fetch(`https://gorest.co.in/public/v2/posts/`, {
//     cache: "no-store",
//   });

//   if (!res.ok) {
//     throw new Error("Gagal mengambil data posts");
//   }

//   const posts = await res.json();

//   return (
//     <Layout>
//       <h1 className="text-3xl font-bold mb-6">Posts</h1>

//       <div className="space-y-6">
//         {posts.map((post) => (
//           <div key={post.id} className="border border-zinc-700 p-6 rounded">
//             <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
//             <p className="text-sm text-gray-300 mb-4">{post.body}</p>
//             <button className="bg-white text-black px-4 py-2 rounded">
//               Detail
//             </button>
//           </div>
//         ))}
//       </div>
//     </Layout>
//   );
// }
