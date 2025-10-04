
'use client'
import React, { useEffect, useState } from 'react';
import ProjectCards from './ProjectCards';
import projectBg from '../../../../public/images/projectBg.png'
import Image from 'next/image';
interface Project {
  id: number;
  title: string;
  slug: string;
  description: string;
  thumbnail?: string | null;
  liveUrl?: string | null;
  frontendRepoUrl?: string | null;
  backendRepoUrl?: string | null;
  createdAt: string;
}

const MapProject = () => {
  const [project, setProject] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/projects`);
        const data = await res.json();

        if (data.success) {
          const projectsArray = Array.isArray(data.data) ? data.data : [data.data];
          setProject(projectsArray);
        } else {
          console.error("Failed to fetch projects:", data.message);
        }
      } catch (err) {
        console.error("Error fetching projects:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) return <div className="text-white text-center p-6">Loading projects...</div>;

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
          <h2 className="text-3xl md:text-6xl font-bold text-white text-clip-text bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">Projects</h2>
          <p className='text-gray-300 font-semibold'>Showcasing my work </p>
        </div>
      </div>
      <div className="mt-20 container mx-auto grid sm:grid-cols-2 lg:grid-cols-2 gap-8 p-6 ">
        {project.map((p) => (
          <ProjectCards key={p.id} project={p} />
        ))}
      </div>
    </div>
  );
};

export default MapProject;
