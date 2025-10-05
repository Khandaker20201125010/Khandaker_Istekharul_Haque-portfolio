/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import profile from "../../../public/images/profile.png";
import { ScrollTimeline } from "../lightswind/ScrollTimeline";
import {  GithubIcon, LinkedinIcon, Phone } from "lucide-react";
import Link from "next/link";

const AboutIntro = () => {
    return (
        <section className="flex flex-col lg:flex-row items-start justify-between gap-10 px-6 lg:px-12 py-16 ">

            {/* === Left Section === */}
            <div className="flex flex-col items-start gap-6 max-w-xl text-start">
                <div className="relative group">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 blur-lg opacity-60 group-hover:opacity-80 transition duration-300"></div>
                    <Image
                        className="relative rounded-full border-4 border-cyan-500 shadow-lg w-[200px] h-[200px] object-cover"
                        width={200}
                        height={200}
                        src={profile}
                        alt="Profile Image"
                    />
                </div>

                <h2 className="text-3xl lg:text-4xl font-bold text-white leading-snug">
                    Hi, I'm{" "}
                    <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                        Khandaker Istekharul Haque
                    </span>
                </h2>

                <p className="text-gray-300 font-medium leading-relaxed">
                    I'm a passionate <span className="text-cyan-400 font-semibold">Web Developer</span> and
                    <span className="text-blue-400 font-semibold"> Programmer</span> who loves creating
                    innovative digital solutions using modern technologies like
                    <span className="text-cyan-400">React</span>,
                    <span className="text-blue-400">Next.js</span>, and
                    <span className="text-purple-400">Tailwind CSS</span>.
                </p>

                <div className="flex space-x-5 pt-2 ">
                    <Link
                        className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-500 transition-transform transform hover:scale-110"
                        href="https://github.com/Khandaker20201125010"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="flex items-center border border-gray-300 rounded-full p-1 hover:border-blue-500 transition-colors duration-300">
                            <GithubIcon className=" " size={28} />
                        </div>
                    </Link>

                    <Link
                        className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-500 transition-transform transform hover:scale-110"
                        href="https://www.linkedin.com/in/khandaker-istekharul-haque-pranto-7a9baa369/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="flex items-center border border-gray-300 rounded-full p-1 hover:border-blue-500 transition-colors duration-300">

                            <LinkedinIcon size={28} />
                        </div>


                    </Link>
                </div>
                <div className="w-full mt-6">
                    <div className="bg-slate-900/60 rounded-xl p-6 shadow-lg border border-slate-700">
                        <h3 className="text-2xl font-bold mb-4 text-white">
                            || Personal Information
                        </h3>
                        <ul className="space-y-3 text-gray-300">
                            <li>
                                <span className="font-semibold text-white"><Phone></Phone> Contact:</span>{" "}
                                +88 01650257688
                            </li>
                            <li>
                                <span className="font-semibold text-white">📧 Email:</span>{" "}
                                khandaker.istekharul@gmail.com
                            </li>
                            <li>
                                <span className="font-semibold text-white">🏠 Present:</span>{" "}
                                Pabla, Daulatpur, Khulna, Bangladesh
                            </li>
                            <li>
                                <span className="font-semibold text-white">🏡 Permanent:</span>{" "}
                                Balohar, Banaripara, Barisal, Bangladesh
                            </li>
                        </ul>
                    </div>
                    <div className="w-full rounded-lg mt-6">
                         <h3 className="text-2xl font-bold mb-4 text-white">|| Location</h3>
                        <iframe
                            className="h-[300px] w-full "
                            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d919.094361843567!2d89.5253752695489!3d22.86251123445304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjLCsDUxJzQ1LjAiTiA4OcKwMzEnMzMuNyJF!5e0!3m2!1sen!2sbd!4v1731098432634!5m2!1sen!2sbd"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div >

            {/* === Right Section: ScrollTimeline (Auto height, no overflow) === */}
            < div className="w-full lg:w-1/2" >
                <ScrollTimeline events={[
                    { year: "2023", title: "Started Learning", description: "Began my journey into web development by learning HTML, CSS, and JavaScript." },
                    { year: "2024", title: "Built First Project", description: "Created my first web application using React and Node.js." },
                    { year: "2025", title: "Seeking Opportunities", description: "Looking for internships and job opportunities to further my career." }
                ] as any} />
            </div >
        </section >
    );
};

export default AboutIntro;
