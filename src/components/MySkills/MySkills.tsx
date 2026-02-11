"use client"
import { Download } from "lucide-react";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";



const skills = [
    { name: "JavaScript", level: 67.26 },
    { name: "TypeScript", level: 23.33 },
    { name: "React", level: 80 },
    { name: "Next.js", level: 60 },
    { name: "Express.js / Node.js", level: 70 },
];

const MySkills = () => {
    const [progress, setProgress] = useState(skills.map(() => 0));

    useEffect(() => {
        const timer = setTimeout(() => {
            setProgress(skills.map((skill) => skill.level));
        }, 200); // delay before animation starts
        return () => clearTimeout(timer);
    }, []);
    return (
        <section className="relative container mx-auto my-20 px-4 flex flex-col lg:flex-row gap-10">
            {/* Left Side */}
            <div data-aos="fade-up"
                data-aos-duration="1000" className="relative flex-1 flex flex-col justify-center">

                <div className="relative">

                    <div className="absolute h-[250px] w-[400px] max-sm:w-[90%] rounded-full opacity-50 blur-[180px] dark:bg-blue-700"></div>
                    <div className="text-start max-sm:text-center">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="h-px w-12 bg-gradient-to-r from-blue-500 to-cyan-500"></div>
                            <span className="text-blue-400 font-semibold tracking-wider uppercase text-sm">
                                My Skills
                            </span>
                            <div className="h-px flex-1 bg-gradient-to-r from-cyan-500 to-transparent"></div>
                        </div>
                        <h2 className="text-gray-400 uppercase tracking-wide mb-2"></h2>
                        <h1 className="text-3xl md:text-6xl font-bold font-inter text-transparent bg-clip-text text-white">
                            My Skills <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Field Here ...</span>
                        </h1>
                    </div>
                </div>
                <a href="/resume.pdf" download>
                    <Button variant="gradient" className="mt-20 w-max max-sm:w-full">
                        <div className="flex items-center gap-2 text-2xl">
                            <span>Get Resume</span>
                            <Download className="w-8 h-8" />
                        </div>
                    </Button>
                </a>

            </div>

            {/* Right Side - Skill Bars */}
            <div className="relative flex-1 flex flex-col gap-4">

                {skills.map((skill, index) => (
                    <div data-aos="flip-right"
                        data-aos-duration="1000"
                        key={index}
                        className=" bg-gradient-to-br from-blue-950 via-black to-cyan-900 p-10 rounded-lg shadow-md"
                    >

                        <div className="flex justify-between mb-2">
                            <span className="text-gray-300 font-medium">{skill.name}</span>
                            <span className="text-gray-400">{progress[index].toFixed(0)}%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-3">
                            <div
                                className="h-3 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 transition-all duration-500"
                                style={{ width: `${progress[index]}%` }}
                            ></div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default MySkills;
