type Post = { title: string; views: number };

export default function ReportedPosts({ posts }: { posts: Post[] }) {
  return (
    <div className="bg-gradient-to-tr from-[#fc5c7d] to-[#f7971e] rounded-xl p-6">
      <h3 className="text-lg font-semibold mb-4">Reported Posts</h3>
      <div className="flex flex-col gap-3">
        {posts.map((post, idx) => (
          <div key={post.title + idx} className="flex items-center justify-between bg-[#2d2d6e] rounded-lg px-4 py-2">
            <span>{post.title}</span>
            <span className="text-sm text-gray-300">{post.views} Views</span>
          </div>
        ))}
      </div>
    </div>
  );
} 