import { Card, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "./ui/button";
type Post = { title: string; views: number };

export default function ReportedPosts({ posts }: { posts: Post[] }) {
  return (
    <div className="flex flex-col gap-3">
      {posts.map((post, idx) => (
        <Card
          key={post.title + idx}
          className=""
        >
          <CardContent className="flex justify-between items-center">
            <CardTitle>{post.title}</CardTitle>
            <Button className="bg-green-400 w-25" >
              View
            </Button>
          </CardContent>
          <CardContent className="flex items-center justify-between">
            <span className="text-sm text-gray-300">{post.views} Views</span>
          </CardContent>
        </Card>
      ))}
    </div>
  );
} 