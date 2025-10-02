"use client";
import React from "react";
import logo from "../../../public/images/logo.png";
import Image from "next/image";
import facebook from "../../../public/images/facebook.png";
import twitter from "../../../public/images/twitter.png";
import linkedin from "../../../public/images/linkedin.png";
import github from "../../../public/images/github.png";
export default function LookingForOpportunities() {
    return (
        <section className="relative text-white py-20 px-6 md:px-20 rounded-lg my-16 overflow-hidden ">
            {/* Visual area */}
            <div className="relative max-w-full mx-auto">
                <div className="relative h-[380px] md:h-[460px] flex items-center justify-center">
                    {/* Subtle vignette */}
                    <div
                        className="absolute inset-0 rounded-2xl"
                        style={{
                            background:
                                "radial-gradient(closest-side at 50% 50%, rgba(50,120,255,0.15), rgba(10,25,65,0.4) 45%, rgba(2,6,15,0.95) 80%)",
                        }}
                    />


                    {/* Large blurred halo (reduced glow) */}
                    <div
                        className="absolute w-[420px] h-[420px] md:w-[560px] md:h-[560px] rounded-full opacity-70"
                        style={{
                            filter: "blur(28px)",
                            background:
                                "radial-gradient(circle at 50% 40%, rgba(97,160,255,0.7), rgba(30,70,120,0.4) 35%, transparent 60%)",
                        }}
                    />

                    {/* SVG orbits */}
                    <svg
                        className="absolute inset-0 w-full h-full"
                        viewBox="0 0 1000 460"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <defs>
                            <linearGradient id="orbitStroke" x1="0" y1="0" x2="1" y2="1">
                                <stop offset="0%" stopColor="#7ec8ff" stopOpacity="0.8" />
                                <stop offset="100%" stopColor="#3a7bd5" stopOpacity="0.2" />
                            </linearGradient>

                            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                                <feGaussianBlur in="SourceGraphic" stdDeviation="3.5" result="blur" />
                                <feMerge>
                                    <feMergeNode in="blur" />
                                    <feMergeNode in="SourceGraphic" />
                                </feMerge>
                            </filter>
                        </defs>

                        {/* Ellipses stay static */}
                        <g className="orbit-ellipse-group" style={{ animationDuration: "70s" }}>
                            <ellipse
                                cx="500"
                                cy="220"
                                rx="520"
                                ry="120"
                                fill="none"
                                stroke="url(#orbitStroke)"
                                strokeWidth="3"
                                opacity="0.85"
                                filter="url(#glow)"
                            />
                        </g>

                        <g className="orbit-ellipse-group" style={{ animationDuration: "55s" }}>
                            <ellipse
                                cx="500"
                                cy="220"
                                rx="420"
                                ry="90"
                                fill="none"
                                stroke="url(#orbitStroke)"
                                strokeWidth="2.5"
                                opacity="0.65"
                                filter="url(#glow)"
                            />
                        </g>

                        <g className="orbit-ellipse-group" style={{ animationDuration: "40s" }}>
                            <ellipse
                                cx="500"
                                cy="220"
                                rx="340"
                                ry="72"
                                fill="none"
                                stroke="url(#orbitStroke)"
                                strokeWidth="2"
                                opacity="0.55"
                                filter="url(#glow)"
                            />
                        </g>

                        <g className="orbit-ellipse-group" style={{ animationDuration: "25s" }}>
                            <ellipse
                                cx="500"
                                cy="220"
                                rx="260"
                                ry="54"
                                fill="none"
                                stroke="url(#orbitStroke)"
                                strokeWidth="1.8"
                                opacity="0.5"
                                strokeDasharray="6 10"
                                filter="url(#glow)"
                            />
                        </g>

                        {/* Orbiting icons */}
{/* Orbiting icons */}
<g>
  <image
    href={facebook.src}
    width="32"
    height="32"
    x="-16"   // shift left half width
    y="-16"   // shift up half height
  >
    <animateMotion
      dur="18s"
      repeatCount="indefinite"
      rotate="auto"
      path="M 500 220 m -520,0 a 520,120 0 1,1 1040,0 a 520,120 0 1,1 -1040,0"
    />
  </image>
</g>

<g>
  <image
    href={twitter.src}
    width="28"
    height="28"
    x="-14"
    y="-14"
  >
    <animateMotion
      dur="14s"
      repeatCount="indefinite"
      rotate="auto"
      path="M 500 220 m -420,0 a 420,90 0 1,1 840,0 a 420,90 0 1,1 -840,0"
    />
  </image>
</g>

<g>
  <image
    href={linkedin.src}
    width="26"
    height="26"
    x="-13"
    y="-13"
  >
    <animateMotion
      dur="10s"
      repeatCount="indefinite"
      rotate="auto"
      path="M 500 220 m -340,0 a 340,72 0 1,1 680,0 a 340,72 0 1,1 -680,0"
    />
  </image>
</g>

<g>
  <image
    href={github.src}
    width="24"
    height="24"
    x="-12"
    y="-12"
  >
    <animateMotion
      dur="7s"
      repeatCount="indefinite"
      rotate="auto"
      path="M 500 220 m -260,0 a 260,54 0 1,1 520,0 a 260,54 0 1,1 -520,0"
    />
  </image>
</g>


                    </svg>



                    {/* Center Orb */}
                    <div className="relative z-20 flex items-center justify-center ">
                        {/* Orb wrapper (holds the spinning layers) */}
                        <div className="relative w-32 h-32 md:w-48 md:h-48 flex items-center justify-center ">

                            {/* Spinning orb background */}
                            <div
                                className="absolute inset-0 rounded-full animate-spin-slow"
                                style={{
                                    background:
                                        "radial-gradient(circle at 40% 35%, rgba(255,255,255,0.06), rgba(94,170,255,0.2) 15%, rgba(42,90,170,0.3) 45%, rgba(7,20,45,0.8) 70%)",
                                    boxShadow:
                                        "0 0 60px 18px rgba(79,142,240,0.22), inset 0 0 28px rgba(255,255,255,0.04)",
                                    transformOrigin: "50% 50%", // <-- critical for rotation
                                }}
                            />

                            {/* Inner ring (spins too) */}
                            <div
                                className="absolute rounded-full w-24 h-24 md:w-32 md:h-32 animate-spin-slow"
                                style={{
                                    background:
                                        "linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.01))",
                                    boxShadow: "0 0 30px rgba(90,160,255,0.16)",
                                    transformOrigin: "50% 50%", // <-- critical
                                }}
                            />

                            {/* Fixed logo (stays upright) */}
                            <Image
                                src={logo}
                                alt="Khandaker Istekharul Haque"
                                width={100}
                                height={100}
                                className="w-14 h-14 md:w-20 md:h-20 relative z-10"
                            />

                            {/* Halo blur (optional spinning) */}
                            <div
                                className="absolute w-[240px] h-[240px] md:w-[320px] md:h-[320px] rounded-full -z-10 animate-spin-slow"
                                style={{
                                    background:
                                        "radial-gradient(circle at 50% 35%, rgba(92,160,255,0.18), rgba(17,45,85,0.05) 40%, transparent 60%)",
                                    filter: "blur(28px)",
                                    transformOrigin: "50% 50%", // <-- critical
                                }}
                            />
                        </div>
                    </div>


                </div>

                {/* Text */}
                <div className="relative z-30 max-w-3xl mx-auto text-center mt-6">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Looking to Join a Team
                    </h2>
                    <p className="text-lg md:text-xl mb-8 text-gray-300">
                        I’m currently seeking an internship or junior role where I can
                        contribute to meaningful projects, learn from experienced
                        teammates, and help create accessible, user-friendly designs and
                        applications.
                    </p>
                </div>
            </div>

            <style>{`
        @keyframes orbit-rotate { from { transform: rotate(0deg);} to { transform: rotate(360deg);} }
        .orbitGroup { animation: orbit-rotate 60s linear infinite; transform-origin: 50% 50%; }

        @keyframes pulseOrb { 
          0% { transform: scale(0.99);} 
          50% { transform: scale(1.01);} 
          100% { transform: scale(0.99);} 
        }
        .relative.z-20 > div { animation: pulseOrb 8s ease-in-out infinite; }
        

        svg text { font-family: Inter, sans-serif; }
      `}</style>
        </section>
    );
}
