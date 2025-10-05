import React, { useState } from 'react';
import Image from 'next/image';
import { Calendar, Clock, Eye, ArrowUpRight, BookOpen, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import BlogModal from '@/components/Modals/BlogModal';

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

const BlogCards = ({ blog }: { blog: Blog }) => {
    const [imageLoaded, setImageLoaded] = useState(false);
    const [imageError, setImageError] = useState(false);
    const [openModal, setOpenModal] = useState(false);

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    };

    return (
        <div data-aos="flip-left"
            data-aos-duration="1000" className="group cursor-pointer transform transition-all duration-500 hover:scale-[1.02]">
            {/* Main Card */}
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900/80 to-slate-950/90 border border-slate-800/50 hover:border-slate-700/80 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-blue-500/10">

                {/* Cover Image */}
                {blog.coverImage && !imageError && (
                    <div className="relative h-48 overflow-hidden">
                        {/* Loading Skeleton */}
                        <div className={`absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 transition-opacity duration-500 ${imageLoaded ? 'opacity-0' : 'opacity-100'
                            }`}>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                            </div>
                        </div>

                        {/* Image */}
                        <Image
                            src={blog.coverImage}
                            alt={blog.title}
                            fill
                            className={`object-cover transition-all duration-700 ${imageLoaded
                                ? 'opacity-100 scale-100 group-hover:scale-110'
                                : 'opacity-0 scale-105'
                                }`}
                            onLoad={() => setImageLoaded(true)}
                            onError={() => setImageError(true)}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />

                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />

                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/10 transition-all duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100">
                            <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 border border-white/30">
                                    <ArrowUpRight size={24} className="text-white" />
                                </div>
                            </div>
                        </div>

                        {/* Published Badge */}
                        {blog.published && (
                            <div className="absolute top-4 left-4">
                                <span className="bg-green-500/90 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm">
                                    Published
                                </span>
                            </div>
                        )}
                    </div>
                )}

                {/* Fallback Image */}
                {(!blog.coverImage || imageError) && (
                    <div className="relative h-48 bg-gradient-to-br from-blue-600/20 to-purple-600/20 flex items-center justify-center">
                        <div className="text-center">
                            <BookOpen size={32} className="text-blue-400 mx-auto mb-2" />
                            <p className="text-blue-300 text-sm font-medium">Blog Post</p>
                        </div>
                    </div>
                )}

                {/* Content */}
                <div className="p-6 hover:shadow-lg hover:shadow-blue-500/10 hover:border-blue-500 hover:bg-gradient-to-tr hover:from-blue-500/10 hover:to-black">
                    {/* Tags */}
                    {blog.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-3">
                            {blog.tags.slice(0, 3).map((tag, index) => (
                                <span
                                    key={index}
                                    className="inline-flex items-center gap-1 bg-blue-500/20 text-blue-300 text-xs px-2.5 py-1 rounded-full border border-blue-500/30"
                                >
                                    <Tag size={12} />
                                    {tag}
                                </span>
                            ))}
                            {blog.tags.length > 3 && (
                                <span className="text-gray-500 text-xs px-2 py-1">
                                    +{blog.tags.length - 3} more
                                </span>
                            )}
                        </div>
                    )}

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                        {blog.title}
                    </h3>

                    {/* Excerpt */}
                    {blog.excerpt && (
                        <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3 group-hover:text-gray-200 transition-colors duration-300">
                            {blog.excerpt}
                        </p>
                    )}

                    {/* Meta Information */}
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1">
                                <Calendar size={14} />
                                <span>{formatDate(blog.createdAt)}</span>
                            </div>

                        </div>
                        <div className="flex items-center gap-1">
                            <Eye size={14} />
                            <span>Read</span>
                        </div>
                    </div>

                    {/* Action Button */}
                    <Button
                        variant="gradient"
                        className="w-full"
                        onClick={() => setOpenModal(true)}
                    >
                        <div className="flex items-center justify-center gap-2">
                            <span>Read Article</span>
                            <ArrowUpRight size={16} />
                        </div>
                    </Button>
                </div>

                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/5 to-purple-500/5 blur-xl group-hover:from-blue-500/15 group-hover:to-purple-500/15 transition-all duration-500 opacity-0 group-hover:opacity-100 -z-10" />
            </div>

            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-20" />
            <BlogModal
                blog={blog}
                open={openModal}
                onClose={() => setOpenModal(false)}
            />
        </div>
    );
};

export default BlogCards;