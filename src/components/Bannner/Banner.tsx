"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import profile from "../../../public/images/profile.png";
import LightRays from "../LightRays";
import TextType from "../TextType";
import { Button } from "../ui/button";
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

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-20 lg:pt-0">
      
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

      {/* Bubble Keyframe Animation (Add this to your globals.css or keep it here if using styled-jsx) */}
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