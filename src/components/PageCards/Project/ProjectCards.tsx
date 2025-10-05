
"use client";
import React from "react";
import Image from "next/image";
import { ExternalLink, Github, Gitlab } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

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

const ProjectCards = ({ project }: { project: Project }) => {
    return (
        <>
            <style jsx>{`
  @property --border-angle {
    syntax: "<angle>";
    inherits: true;
    initial-value: 0deg;
  }
  @keyframes border-spin {
    100% {
      --border-angle: 360deg;
    }
  }
  .animate-border {
    animation: border-spin 6s linear infinite;
  }
`}</style>


            <div data-aos="flip-right"
                            data-aos-duration="1000" className="w-full ">
                {/* Animated Border Wrapper */}
                <div className="animate-border [background:linear-gradient(45deg,#0a0a0a,theme(colors.slate.900)_50%,#0f172a)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,theme(colors.blue.500)_86%,theme(colors.cyan.400)_90%,theme(colors.blue.500)_94%,theme(colors.slate.600/.48))_border-box]  border border-transparent ">

                    {/* Inner Card */}
                    <div className="flex flex-col overflow-hidden rounded-2xl shadow-md ">

                        {/* Thumbnail */}
                        {project.thumbnail && (
                            <div className="relative w-full h-96">
                                <Image
                                    src={project.thumbnail}
                                    alt={project.title}
                                    fill
                                    className=""
                                />
                            </div>
                        )}

                        {/* Content */}
                        <div className="flex flex-col flex-1 p-5">
                            <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition">
                                {project.title}
                            </h3>

                            <p className="text-gray-400 text-sm mt-2 mb-4 line-clamp-3">
                                {project.description}
                            </p>

                            {/* Buttons */}
                            <div className="mt-auto flex flex-wrap gap-2">
                                {project.liveUrl && (
                                    <Link href={project.liveUrl} target="_blank">
                                        <Button
                                            variant="gradient"
                                            className=""
                                        >
                                            <div className="flex items-center justify-center gap-2">
                                                <ExternalLink size={16} className="shrink-0" />
                                                <span >Live Link</span>
                                            </div>
                                        </Button>
                                    </Link>
                                )}

                                {project.frontendRepoUrl && (
                                    <Link href={project.frontendRepoUrl} target="_blank">
                                        <Button variant="gradient" className="flex items-center gap-2">
                                            <div className="flex items-center justify-center gap-2">
                                                <Gitlab size={16} className="shrink-0" />
                                                <span>Frontend</span>
                                            </div>
                                        </Button>
                                    </Link>
                                )}

                                {project.backendRepoUrl && (
                                    <Link href={project.backendRepoUrl} target="_blank">
                                        <Button variant="gradient" className="flex items-center gap-2">
                                            <div className="flex items-center justify-center gap-2">
                                                <Github size={16} className="shrink-0" />
                                                <span>Backend</span>
                                            </div>
                                        </Button>
                                    </Link>
                                )}
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProjectCards;
