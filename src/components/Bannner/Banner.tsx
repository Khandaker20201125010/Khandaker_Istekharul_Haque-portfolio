"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import profile from "../../../public/images/profile.png"; // Ensure this path is correct for your project
import LightRays from "../LightRays"; // Ensure this path is correct
import TextType from "../TextType"; // Ensure this path is correct
import { Button } from "../ui/button"; // Ensure this path is correct
import Link from "next/link";

export default function Banner() {
  const [bubbles, setBubbles] = useState<
    { width: number; height: number; right: number; duration: number; delay: number }[]
  >([]);

  // Generate bubble data only on client
  useEffect(() => {
    const generateBubbles = () => {
      return [...Array(35)].map(() => ({
        width: Math.random() * 2 + 1,
        height: Math.random() * 3 + 1,
        right: Math.random() * 80,
        duration: 15 + Math.random() * 10,
        delay: Math.random() * 10,
      }));
    };
    setBubbles(generateBubbles());
  }, []);

  // Social Media Link Data
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/Khandaker20201125010",
      color: "hover:text-white hover:border-white/50 hover:bg-white/10 hover:shadow-[0_0_15px_rgba(255,255,255,0.3)]",
      icon: (
        <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.42-1.305.763-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/khandaker-istekharul-haque-7a9baa369/",
      color: "hover:text-[#0077b5] hover:border-[#0077b5]/50 hover:bg-[#0077b5]/10 hover:shadow-[0_0_15px_rgba(0,119,181,0.3)]",
      icon: (
        <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative min-h-[10svh] w-full flex items-start overflow-hidden pt-32 pb-24">
      
      {/* Background Light Rays */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <LightRays
          raysOrigin="top-right"
          raysColor="#1E90FF"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={5.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="w-full h-full"
        />
      </div>

      {/* Main Content Container */}
      <div className="container mx-auto px-4 sm:px-10 flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-4 z-10 max-w-7xl">
        
        {/* Left Side: Content */}
        <div 
          data-aos="fade-right"
          data-aos-duration="1000" 
          className="w-full lg:w-1/2 text-center lg:text-left space-y-4"
        >
          <p className="uppercase tracking-[0.2em] text-blue-400 font-poppins text-sm sm:text-base">Hello</p>
          
          <h1 className="text-3xl sm:text-5xl xl:text-6xl font-bold font-poppins leading-tight">
            I’m <span className="text-white">Khandaker Istekharul Haque</span>
          </h1>

          <div className="text-xl sm:text-3xl xl:text-4xl font-bold flex flex-wrap justify-center lg:justify-start gap-2 h-[3rem] sm:h-auto">
            <span>A</span>
            <TextType
              text={["Web Developer.", "Frontend Developer.", "MERN Stack Developer."]}
              typingSpeed={40}
              deletingSpeed={25}
              pauseDuration={1000}
              variableSpeed={{ min: 20, max: 50 }}
              showCursor={true}
              cursorCharacter="|"
              className="inline-block text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text"
            />
          </div>

          <p className="max-w-lg mx-auto lg:mx-0 text-gray-400 leading-relaxed text-sm sm:text-base font-fira font-semibold">
            I specialize in creating responsive and dynamic web applications that deliver exceptional user experiences.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
            <Link href="/projects" className="w-full sm:w-auto">
              <Button className="w-full sm:w-auto min-w-[180px]" variant="gradient" size="lg">
                View Projects →
              </Button>
            </Link>
            <a href="/resume.pdf" download className="w-full sm:w-auto">
              <Button className="w-full sm:w-auto min-w-[180px] border border-blue-500/20" variant="gradient" size="lg">
                Get Resume →
              </Button>
            </a>
          </div>

          {/* ----- NEW SOCIAL LINKS SECTION ----- */}
          <div className="flex items-center justify-center lg:justify-start gap-5 pt-6">
            <span className="text-gray-500 text-sm font-medium tracking-wider uppercase hidden sm:block">Connect:</span>
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className={`
                  p-3 rounded-full border border-white/10 bg-white/5 text-gray-400 
                  transition-all duration-300 backdrop-blur-sm
                  ${social.color}
                `}
                aria-label={social.name}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
           {/* ----- END SOCIAL LINKS SECTION ----- */}

        </div>

        {/* Right Side: Image & Effects */}
        <div className="w-full lg:w-1/2 flex justify-center items-center relative">
          
          {/* Blue Glow Sphere */}
          <div className="absolute h-[250px] w-[250px] sm:h-[400px] sm:w-[400px] rounded-full opacity-30 blur-[100px] bg-blue-600 pointer-events-none"></div>

          {/* Grouping Image and Floating Text */}
          <div className="relative flex justify-center items-center">
            
            {/* Background Floating Text (Behind Image) */}
            <motion.div
              className="absolute -top-6 -right-4 sm:-top-10 sm:-right-10 md:-right-20 pointer-events-none select-none"
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white/10 whitespace-nowrap">
                WEB DEVELOPER
              </h2>

              {/* Bubbles restricted to this text area */}
              <div className="absolute inset-x-0 bottom-0 h-full overflow-hidden pointer-events-none">
                {bubbles.map((b, i) => (
                  <div
                    key={i}
                    className="absolute bg-white rounded-full opacity-30"
                    style={{
                      width: `${b.width}px`,
                      height: `${b.height}px`,
                      right: `${b.right}%`,
                      bottom: "-20px",
                      animation: `bubbleUp ${b.duration}s linear infinite`,
                      animationDelay: `${b.delay}s`,
                    }}
                  />
                ))}
              </div>
            </motion.div>

            {/* Profile Image */}
            <div className="relative z-10">
              <Image
                src={profile}
                alt="Web Developer"
                data-aos="zoom-in"
                data-aos-duration="1000"
                width={450}
                height={550}
                className="object-contain max-w-[280px] sm:max-w-[400px] lg:max-w-[450px] h-auto drop-shadow-2xl"
                priority
              />
            </div>

            {/* Foreground Floating Text (Stroke Effect) */}
            <motion.div
              className="absolute -bottom-6 -left-4 sm:-bottom-10 sm:-left-10 pointer-events-none select-none z-20"
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            >
              <h2 
                className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-transparent whitespace-nowrap"
                style={{ WebkitTextStroke: "1px rgba(255,255,255,0.4)" }}
              >
                WEB DEVELOPER
              </h2>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bubble Keyframe Animation */}
      <style jsx global>{`
        @keyframes bubbleUp {
          0% { transform: translateY(0); opacity: 0; }
          10% { opacity: 0.4; }
          90% { opacity: 0.1; }
          100% { transform: translateY(-300px); opacity: 0; }
        }
      `}</style>
    </section>
  );
}