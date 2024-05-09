type Post = {
  title: string;
  description: string;
};

export function GET() {
  const posts: Post[] = Array(20)
    .fill(null)
    .map((_, i) => ({
      title: 'Post' + i + 1,
      description: 'Description' + i + 1,
    }));

  return Response.json({ posts });
}
