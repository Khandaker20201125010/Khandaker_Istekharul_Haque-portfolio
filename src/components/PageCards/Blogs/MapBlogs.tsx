
'use client';
import { useEffect, useState } from "react";
import Image from 'next/image';
import React from 'react';
import projectBg from '../../../../public/images/projectBg.png'
import BlogCards from "./BlogCards";
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

const MapBlogs = () => {
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
        <div>
            <div className="relative w-full h-[600px]">
                <Image
                    src={projectBg}
                    alt="Projects Banner"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0  flex flex-col gap-5 items-center justify-center">
                    <h2 className="text-3xl md:text-6xl font-bold text-white text-clip-text bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">Blogs</h2>
                    <p className='text-gray-300 font-semibold'>A collection of my blogs </p>
                </div>
            </div>
            <div className="mt-20 container mx-auto grid sm:grid-cols-2 lg:grid-cols-2 gap-8 p-6 ">
                {blogs.map((p) => (
                    <BlogCards key={p.id} blog={p} />
                ))}
            </div>
        </div>
    );
};

export default MapBlogs;