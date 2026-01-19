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
      className="relative flex flex-col p-4 sm:p-5 rounded-xl sm:rounded-2xl 
                 bg-white/10 dark:bg-gray-900/50 backdrop-blur-xl 
                 border border-white/10 shadow-lg overflow-hidden h-full"
    >
      {/* Glow background */}
      <div className="absolute inset-0 rounded-xl sm:rounded-2xl 
                      bg-gradient-to-r from-blue-500/20 to-cyan-500/20 
                      blur-2xl opacity-30 -z-10"></div>

      {/* Project Image */}
      <div className="relative w-full aspect-video mb-3 sm:mb-4">
        <Image
          fill
          src={thumbnail}
          alt={project.title}
          className="object-cover rounded-lg sm:rounded-xl shadow-md"
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
      </div>

      {/* Title */}
      <div className="flex flex-col sm:flex-row sm:items-center 
                     justify-between mb-2 gap-2 sm:gap-0">
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold 
                      text-transparent bg-clip-text bg-gradient-to-r 
                      from-blue-400 to-cyan-400 line-clamp-1">
          {project.title}
        </h3>
        {liveUrl && (
          <Link href={liveUrl} target="_blank" className="w-full sm:w-auto">
            <Button
              variant="gradient"
              size="sm"
              className="w-full sm:w-auto text-xs sm:text-sm"
            >
              <div className="flex items-center justify-center gap-1 sm:gap-2">
                <ExternalLink size={14} className="sm:w-4 sm:h-4" />
                <span>Live Link</span>
              </div>
            </Button>
          </Link>
        )}
      </div>

      {/* Description */}
      <p className="text-gray-300 mb-3 sm:mb-4 line-clamp-3 
                   text-xs sm:text-sm leading-relaxed flex-grow">
        {project.description}
      </p>

      {/* Buttons */}
      <div className="mt-auto grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
        {project.frontendRepoUrl && (
          <Link href={project.frontendRepoUrl} target="_blank" className="w-full">
            <Button 
              variant="gradient" 
              size="sm"
              className="w-full text-xs sm:text-sm"
            >
              <div className="flex items-center justify-center gap-1 sm:gap-2">
                <Gitlab size={14} className="sm:w-4 sm:h-4" />
                <span className="truncate">Frontend</span>
              </div>
            </Button>
          </Link>
        )}

        {project.backendRepoUrl && (
          <Link href={project.backendRepoUrl} target="_blank" className="w-full">
            <Button 
              variant="gradient" 
              size="sm"
              className="w-full text-xs sm:text-sm"
            >
              <div className="flex items-center justify-center gap-1 sm:gap-2">
                <Github size={14} className="sm:w-4 sm:h-4" />
                <span className="truncate">Backend</span>
              </div>
            </Button>
          </Link>
        )}
      </div>

      {/* Alternative single row layout for very small screens */}
      {(project.frontendRepoUrl && project.backendRepoUrl) && (
        <div className="mt-3 sm:hidden flex gap-2">
          {project.frontendRepoUrl && (
            <Link href={project.frontendRepoUrl} target="_blank" className="flex-1">
              <Button 
                variant="outline" 
                size="sm"
                className="w-full text-xs"
              >
                <div className="flex items-center justify-center gap-1">
                  <Gitlab size={12} />
                  <span>Front</span>
                </div>
              </Button>
            </Link>
          )}
          {project.backendRepoUrl && (
            <Link href={project.backendRepoUrl} target="_blank" className="flex-1">
              <Button 
                variant="outline" 
                size="sm"
                className="w-full text-xs"
              >
                <div className="flex items-center justify-center gap-1">
                  <Github size={12} />
                  <span>Back</span>
                </div>
              </Button>
            </Link>
          )}
        </div>
      )}
    </motion.div>
  );
};

export default HomProjectCards;