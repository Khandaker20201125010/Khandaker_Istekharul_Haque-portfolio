"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import Link from "next/link";
import { ExternalLink, Github, Gitlab } from "lucide-react";

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

const HomProjectCards: React.FC<{ project: Project }> = ({ project }) => {
  const thumbnail = project.thumbnail ?? project.image ?? "/placeholder.png";
  const liveUrl = project.liveUrl ?? project.liveLink ?? undefined;

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className="relative flex flex-col p-5 rounded-2xl bg-white/10 dark:bg-gray-900/50 
                 backdrop-blur-xl border border-white/10 shadow-lg overflow-hidden"
    >
      {/* Glow background */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 to-cyan-500/20 
                      blur-2xl opacity-30 -z-10"></div>

      {/* Project Image */}
      <Image
        width={500}
        height={300}
        src={thumbnail}
        alt={project.title}
        className="w-full h-48 object-cover rounded-xl mb-4 shadow-md"
      />

      {/* Title */}
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-2xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
          {project.title}
        </h3>
        {liveUrl && (
          <Link href={liveUrl} target="_blank">
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
      </div>

      {/* Description */}
      <p className="text-gray-300 mb-4 line-clamp-3 text-sm leading-relaxed">
        {project.description}
      </p>

      {/* Buttons */}
      <div className="mt-auto flex flex-wrap gap-3">


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
    </motion.div>
  );
};

export default HomProjectCards;
