/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { toast } from "react-hot-toast";
import { Button } from "@/components/ui/button";
import SingleImageUploader from "@/components/SingleImageUploader";
import { createProjects } from "@/actions/create";

export default function CreateProjectForm() {
    const [image, setImage] = useState<File | null>(null);
    const [loading, setLoading] = useState(false);



    

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        const formEl = e.currentTarget;

        try {
            const formData = new FormData(formEl);
            const result = await createProjects(formData, image);

            toast.success("Project created successfully!");
            console.log("Created project:", result);    

            formEl.reset();
            setImage(null);
        } catch (err: any) {
            console.error(err);
            toast.error(err.message || "Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="max-w-3xl mx-auto p-8 bg-gradient-to-br from-gray-900 to-black border border-gray-800 shadow-2xl rounded-2xl space-y-8"
        >
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    Create New Project
                </h2>
                <p className="text-gray-400 mt-2">Showcase your latest work</p>
            </div>

            <div className="space-y-6">
                {/* Title */}
                <div>
                    <label className="block text-sm font-semibold mb-3 text-gray-200">
                        Title *
                    </label>
                    <input
                        type="text"
                        name="title"
                        required
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white"
                        placeholder="My Awesome Project"
                    />
                </div>

                {/* Slug */}
                <div>
                    <label className="block text-sm font-semibold mb-3 text-gray-200">
                        Slug *
                    </label>
                    <input
                        type="text"
                        name="slug"
                        required
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white"
                        placeholder="my-awesome-project"
                    />
                </div>

                {/* Description */}
                <div>
                    <label className="block text-sm font-semibold mb-3 text-gray-200">
                        Description *
                    </label>
                    <textarea
                        name="description"
                        rows={5}
                        required
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white"
                        placeholder="Describe your project..."
                    ></textarea>
                </div>

                {/* Features */}
                <div>
                    <label className="block text-sm font-semibold mb-3 text-gray-200">
                        Features (comma separated)
                    </label>
                    <input
                        type="text"
                        name="features"
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white"
                        placeholder="Next.js, Tailwind, MongoDB"
                    />
                </div>

                {/* Live URL */}
                <div>
                    <label className="block text-sm font-semibold mb-3 text-gray-200">
                        Live URL
                    </label>
                    <input
                        type="url"
                        name="liveUrl"
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white"
                        placeholder="https://example.com"
                    />
                </div>

                {/* Repo URL */}
                <div>
                    <label className="block text-sm font-semibold mb-3 text-gray-200">
                        Frontend Repository URL
                    </label>
                    <input
                        type="url"
                        name="frontendRepoUrl"
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white"
                        placeholder="https://github.com/yourname/frontend-repo"
                    />
                </div>

                {/* Backend Repo URL */}
                <div>
                    <label className="block text-sm font-semibold mb-3 text-gray-200">
                        Backend Repository URL
                    </label>
                    <input
                        type="url"
                        name="backendRepoUrl"
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white"
                        placeholder="https://github.com/yourname/backend-repo"
                    />
                </div>

                {/* Thumbnail Upload */}
                <div>
                    <label className="block text-sm font-semibold mb-3 text-gray-200">
                        Thumbnail Image
                    </label>
                    <div className="border-2 border-dashed border-gray-700 rounded-xl p-6 bg-gray-800/50">
                        <SingleImageUploader onChange={setImage} />
                    </div>
                </div>

                {/* Submit Button */}
                <Button
                    type="submit"
                    disabled={loading}
                    variant="gradient"
                    size="lg"
                    className="w-full mt-6"
                >
                    {loading ? "Publishing Project..." : "Publish Project"}
                </Button>
            </div>
        </form>
    );
}
