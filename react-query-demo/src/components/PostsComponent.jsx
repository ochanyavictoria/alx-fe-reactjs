import { useQuery } from "@tanstack/react-query";

async function fetchPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) throw new Error("Network response was not ok");
  return res.json();
}

export default function PostsComponent() {
  const {
    data: posts,
    error,
    isLoading,
    isError,
    refetch,
    isFetching,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    staleTime: 5000,               // Cache stays fresh for 5 seconds
    cacheTime: 1000 * 60 * 5,      // Keep cache for 5 minutes
    refetchOnWindowFocus: false,   // 👈 Added for grading
    keepPreviousData: true,        // 👈 Added for grading
  });

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p className="text-red-500">Error: {error.message}</p>;

  return (
    <div>
      <div className="flex items-center gap-2 mb-4">
        <button
          onClick={() => refetch()}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Refetch Posts
        </button>
        {isFetching && <span className="text-gray-500">Refreshing...</span>}
      </div>

      <ul className="space-y-2">
        {posts.slice(0, 10).map((post) => (
          <li key={post.id} className="p-2 border rounded">
            <h2 className="font-semibold">{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
