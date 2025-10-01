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
      return [...Array(50)].map(() => ({
        width: Math.random() * 2 + 1,       // 1px to 3px
        height: Math.random() * 3 + 1,      // 1px to 4px
        right: Math.random() * 50,          // narrow strip on right
        duration: 30 + Math.random() * 20,  // slow upward movement
        delay: Math.random() * 50,          // random start
      }));
    };

    setBubbles(generateBubbles());
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col-reverse md:flex-row items-center justify-between px-4 sm:px-10 text-white">

      {/* Background Light Rays */}
      <div className="absolute inset-0 -z-10 pointer-events-none ">
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

      {/* Left Side */}
      <div className="w-full md:w-1/2 max-w-xl text-center md:text-left z-10 mt-16 md:mt-0">
        <p className="uppercase tracking-wide text-gray-400 font-poppins">Hello</p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2 font-poppins">
          I’m <span className="text-white">Khandaker Istekharul Haque</span>
        </h1>
        <div className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2 flex max-sm:flex-col gap-2">
          <h1>
            A
          </h1>
          <TextType
            text={["Web Developer.", "Frontend Developer.", "MERN Stack Developer."]}
            typingSpeed={30}                 // faster typing
            deletingSpeed={20}               // faster deletion
            pauseDuration={800}              // shorter pause
            variableSpeed={{ min: 20, max: 50 }} // smoother typing
            showCursor={true}
            cursorCharacter="|"
            className="inline-block text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text"
          />
        </div>
        <p className="mt-4 sm:mt-6 text-gray-400 leading-relaxed text-sm sm:text-base font-fira font-semibold">
          I specialize in creating responsive and dynamic web applications that deliver exceptional user experiences.
        </p>

        <Link href="/projects">
          <Button className="mt-8" variant="gradient" size="lg">
            View Projects →
          </Button>
        </Link>
      </div>

      {/* Right Side - Image */}
      <div className="w-full md:w-1/2 relative flex justify-center items-center ">
        <div className="absolute h-[350px] w-[400px] max-sm:w-[90%] rounded-full opacity-50 blur-[180px] dark:bg-blue-700"></div>

        <Image
          src={profile}
          alt="Web Developer"
          width={400}
          height={500}
          className="object-contain z-10"
          priority
        />

        {/* Text with floating dots */}
        <div className="absolute top-10 right-20">
          <motion.h2
            className="text-2xl sm:text-4xl md:text-6xl font-extrabold text-white z-0 relative"
            animate={{ y: [0, 15, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            WEB DEVELOPER

            {/* Dots container */}
            <div className="absolute inset-x-0 bottom-0 overflow-visible pointer-events-none">
              {bubbles.map((b, i) => (
                <div
                  key={i}
                  className="absolute bg-white rounded-full opacity-50"
                  style={{
                    width: `${b.width}px`,
                    height: `${b.height}px`,
                    right: `${b.right}%`,
                    bottom: "0px",
                    animation: `bubbleUp ${b.duration}s linear infinite`,
                    animationDelay: `${b.delay}s`,
                  }}
                />
              ))}
            </div>

          </motion.h2>
        </div>

        <motion.h2
          className="absolute -bottom-8 text-xl sm:text-3xl md:text-5xl font-extrabold text-transparent z-20"
          style={{ WebkitTextStroke: "1px white" }}
          animate={{ y: [0, 15, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          WEB DEVELOPER
        </motion.h2>
      </div>
    </section>
  );
}
