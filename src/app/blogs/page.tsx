'use client';
import { useEffect, useState } from "react";

interface Blog {
  id: number;
  title: string;
  slug: string;
  excerpt?: string;
  content: string;
  coverImage?: string;
  tags: string[];
  published: boolean;
  createdAt: string;
}

const Blogs = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blogs`); // Make sure endpoint is correct
        const data = await res.json();

        if (data.success) {
          // Wrap single object into array if needed
          const blogsArray = Array.isArray(data.data) ? data.data : [data.data];
          setBlogs(blogsArray);
        } else {
          console.error("Failed to fetch blogs:", data.message);
        }
      } catch (err) {
        console.error("Error fetching blogs:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) return <div className="text-white text-center p-6">Loading blogs...</div>;

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h1 className="text-3xl font-bold mb-6">All Blogs</h1>
      {blogs.length === 0 ? (
        <p>No blogs found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogs.map((blog) => (
            <div key={blog.id} className="bg-zinc-900 p-4 rounded-xl shadow-md">
              {blog.coverImage && (
                <img
                  src={blog.coverImage}
                  alt={blog.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
              )}
              <h2 className="text-xl font-bold mb-2">{blog.title}</h2>
              {blog.excerpt && <p className="text-sm mb-2">{blog.excerpt}</p>}
              <p className="text-xs text-gray-400 mb-2">
                Published: {blog.published ? "Yes" : "No"}
              </p>
              <p className="text-xs text-gray-400">Tags: {blog.tags.join(", ")}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Blogs;
