"use client";
import React, { useEffect, useState } from "react";
import HomProjectCards from "./HomProjectCards";
import Link from "next/link";
import { Button } from "../ui/button";

export interface Project {
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
    <section className="relative w-full px-4 sm:px-6 md:px-12 lg:px-20 py-20 overflow-hidden">

      {/* Background Decorative Elements */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-blue-600/20 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center md:text-left mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-gradient-to-r from-blue-500 to-cyan-500"></div>
            <span className="text-blue-400 font-semibold tracking-wider uppercase text-sm">
              || My Recent Works
            </span>
            <div className="h-px flex-1 bg-gradient-to-r from-cyan-500 to-transparent"></div>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-inter leading-tight">
            Showcasing My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Projects</span>
          </h1>
          <p className="mt-4 text-gray-400 max-w-2xl text-sm sm:text-base md:text-lg">
            A selection of my recent work, highlighting responsive designs and functional web applications.
          </p>
        </div>

        {/* Content Section */}
        <div className="w-full">
          {loading && (
            <div className="h-64 flex items-center justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
          )}

          {error && (
            <div className="h-32 flex items-center justify-center text-red-400 bg-red-500/10 rounded-lg border border-red-500/20">
              Error: {error}
            </div>
          )}

          {!loading && !error && projects.length === 0 && (
            <div className="h-32 flex items-center justify-center text-gray-500">
              No projects found available to display.
            </div>
          )}

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project._id ?? project.id ?? index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="h-full"
              >
                <HomProjectCards project={project} />
              </div>
            ))}
          </div>

          {/* View More Button */}
          <div className="text-center mt-16">
            <Link href="/projects">
              <Button
                variant="gradient"
                size="lg"
                className="min-w-[200px] shadow-lg shadow-blue-500/20 transition-transform hover:scale-105"
              >
                View All Projects
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeProjectShoeCase;