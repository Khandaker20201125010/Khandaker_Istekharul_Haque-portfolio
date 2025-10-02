"use client";
import React from "react";
import GlowCard from "../ui/GlowCard";
import {
    Monitor,
    Server,
    Layers,
} from "lucide-react";



const services = [
    {
        title: "Frontend Development",
        description:
            "Building responsive, interactive, and user-friendly web interfaces using React, Next.js, and Tailwind CSS.",
        glowColor: "blue" as const,
        icon: <Monitor className="w-8 h-8 text-blue-400" />,
    },
    {
        title: "Backend Development",
        description:
            "Creating scalable and secure server-side applications with Node.js, Express.js, MongoDB, and MySQL.",
        glowColor: "blue" as const,
        icon: <Server className="w-8 h-8 text-blue-400" />,
    },
    {
        title: "Full-Stack MERN Development",
        description:
            "End-to-end development with MERN stack, integrating frontend, backend, and database seamlessly.",
        glowColor: "blue" as const,
        icon: <Layers className="w-8 h-8 text-blue-400" />,
    },

];

const ServicesSection = () => {
    return (
        <div className="">
          
            <div className="relative container mx-auto my-20 flex flex-col  gap-10 px-4">

                <div className="">

                    <h2 className="text-start text-gray-400">|| My Services</h2>
                    <h1 className="text-start text-2xl font-bold md:text-6xl font-inter text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">
                        The services I offer
                    </h1>
                </div>
                      <div className="absolute h-[350px] w-[400px] max-sm:w-[90%] rounded-full opacity-50 blur-[180px] dark:bg-blue-700"></div>
                <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-3">
                    
                    {services.map((service, idx) => (
                        <GlowCard key={idx} glowColor={service.glowColor} size="md">
                            <div className="flex flex-col gap-3">
                                
                                <div className="flex items-center gap-3">
                                    {service.icon}
                                    <h3 className="text-xl font-bold text-white">{service.title}</h3>
                                </div>
                                <p className="text-gray-300 text-sm leading-relaxed">
                                    {service.description}
                                </p>
                            </div>
                        </GlowCard>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServicesSection;
