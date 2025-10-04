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
    image?: string | null; // some APIs use `image`
    liveUrl?: string | null;
    liveLink?: string | null; // some APIs use `liveLink`
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
                    // helpful error if API responds non-200
                    const txt = await res.text();
                    throw new Error(`API error: ${res.status} ${txt}`);
                }

                // Read body safely (handle cases content-type isn't JSON)
                const contentType = res.headers.get("content-type") || "";
                let data: any;
                if (contentType.includes("application/json")) {
                    data = await res.json();
                } else {
                    const text = await res.text();
                    try {
                        data = JSON.parse(text);
                    } catch {
                        throw new Error("Response is not JSON");
                    }
                }

                // For debugging (open console to inspect)
                console.log("raw projects response:", data);

                // Normalize/extract the array from multiple possible shapes
                const projectsArray: Project[] =
                    Array.isArray(data) ? data :
                        Array.isArray(data.projects) ? data.projects :
                            Array.isArray(data.data) ? data.data :
                                Array.isArray(data.items) ? data.items :
                                    // pick first array-valued property if exists
                                    (Object.values(data).find(v => Array.isArray(v)) as Project[] | undefined) ??
                                    [];

                if (!Array.isArray(projectsArray)) {
                    throw new Error("Could not find an array of projects in API response");
                }

                setProjects(projectsArray.slice(0, 3)); // only first 3
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
        <section className="m-20">
            <div className="container mx-auto ">
                <h2 className="text-start text-gray-400">|| My Projects</h2>
                <h1 className="text-start text-2xl font-bold md:text-6xl font-inter text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">
                    Showcasing My Projects
                </h1>
            </div>

            <div className="mt-6">
                {loading && <p>Loading projects…</p>}
                {error && <p className="text-red-400">Error: {error}</p>}

                {!loading && !error && projects.length === 0 && (
                    <p>No projects found.</p>
                )}

                <div className="container mx-auto grid md:grid-cols-3 gap-6 mt-16">
                    {projects.map((project) => (
                        <div
                            key={project._id ?? project.id ?? project.slug ?? Math.random()}
                            className="relative"
                        >
                            {/* background blur */}
                            <div className="absolute inset-0 flex justify-center items-center -z-10">
                                <div className="h-[350px] w-[400px] max-sm:w-[90%] rounded-full opacity-50 blur-[180px] dark:bg-blue-700"></div>
                            </div>

                            {/* card */}
                            <HomProjectCards project={project} />
                        </div>
                    ))}
                </div>
                <div className="text-center m-20">
                    <Link href="/projects">
                        <Button variant="gradient" className="mt-6 w-1/2">View More</Button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default HomeProjectShoeCase;
