/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useEffect, useState } from "react";
import HomProjectCards from "./HomProjectCards";
import Link from "next/link";
import { Button } from "../ui/button";

interface Project {
  _id?: string;
  id?: number | string;
  title: string;
  slug?: string;
  description?: string;
  thumbnail?: string | null;
  image?: string | null;
  liveUrl?: string | null;
  liveLink?: string | null;
  frontendRepoUrl?: string | null;
  backendRepoUrl?: string | null;
  createdAt?: string;
}

const HomeProjectShoeCase: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/projects`);
        if (!res.ok) {
          const txt = await res.text();
          throw new Error(`API error: ${res.status} ${txt}`);
        }

        const contentType = res.headers.get("content-type") || "";
        let data: any;
        if (contentType.includes("application/json")) {
          data = await res.json();
        } else {
          const text = await res.text();
          data = JSON.parse(text);
        }

        const projectsArray: Project[] =
          Array.isArray(data)
            ? data
            : Array.isArray(data.projects)
            ? data.projects
            : Array.isArray(data.data)
            ? data.data
            : Array.isArray(data.items)
            ? data.items
            : (Object.values(data).find((v) => Array.isArray(v)) as Project[] | undefined) ?? [];

        setProjects(projectsArray.slice(0, 3));
      } catch (err: any) {
        console.error(err);
        setError(err?.message || "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section className="px-4 sm:px-6 md:px-12 lg:px-20 py-16">
      <div className="max-w-7xl mx-auto text-center md:text-left">
        <h2 className="text-gray-400 text-sm sm:text-base">|| My Projects</h2>
        <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold font-inter 
                       text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500 mt-2">
          Showcasing My Projects
        </h1>
      </div>

      <div className="mt-10">
        {loading && <p className="text-center">Loading projects…</p>}
        {error && <p className="text-center text-red-400">Error: {error}</p>}
        {!loading && !error && projects.length === 0 && <p className="text-center">No projects found.</p>}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
          {projects.map((project) => (
            <div
              data-aos="flip-right"
              data-aos-duration="1000"
              key={project._id ?? project.id ?? project.slug ?? Math.random()}
              className="relative w-full"
            >
              {/* background blur */}
              <div className="absolute inset-0 flex justify-center items-center -z-10">
                <div className="h-[250px] sm:h-[300px] md:h-[350px] w-[90%] sm:w-[80%] md:w-[400px] 
                                rounded-full opacity-40 blur-[150px] dark:bg-blue-700"></div>
              </div>

              {/* card */}
              <HomProjectCards project={project} />
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link href="/projects">
            <Button variant="gradient" className="w-3/4 sm:w-1/2 md:w-1/3 lg:w-1/4">
              View More
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeProjectShoeCase;
