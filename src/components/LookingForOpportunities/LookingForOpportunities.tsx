"use client";
import React from "react";
import logo from "../../../public/images/logo.png";
import Image from "next/image";

export default function LookingForOpportunities() {
  return (
    <section className="relative text-white py-20 px-6 md:px-20 rounded-lg my-16 overflow-hidden ">
      {/* Visual area */}
      <div className="relative max-w-5xl mx-auto">
        <div className="relative h-[380px] md:h-[460px] flex items-center justify-center">
          {/* Subtle vignette */}
          <div
            className="absolute inset-0 rounded-2xl"
            style={{
              background:
                "radial-gradient(closest-side at 50% 50%, rgba(50,120,255,0.25), rgba(10,25,65,0.6) 45%, rgba(2,6,15,0.95) 80%)",
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
            preserveAspectRatio="xMidYMid slice"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="g1" x1="0" x2="1">
                <stop offset="0%" stopColor="#5aa9ff" stopOpacity="0.18" />
                <stop offset="100%" stopColor="#3a7bd5" stopOpacity="0.08" />
              </linearGradient>
            </defs>

            <g className="orbitGroup" style={{ transformOrigin: "50% 50%" }}>
              <ellipse
                cx="500"
                cy="220"
                rx="420"
                ry="90"
                fill="none"
                stroke="url(#g1)"
                strokeWidth="2"
                opacity="0.22"
              />
              <ellipse
                cx="500"
                cy="220"
                rx="340"
                ry="72"
                fill="none"
                stroke="url(#g1)"
                strokeWidth="2"
                opacity="0.2"
              />
              <ellipse
                cx="500"
                cy="220"
                rx="260"
                ry="54"
                fill="none"
                stroke="url(#g1)"
                strokeWidth="2"
                opacity="0.18"
              />
              <path
                d="M200 220 Q 350 140 500 220 T 800 220"
                fill="none"
                stroke="#4f8ef0"
                strokeOpacity="0.06"
                strokeWidth="2"
              />
            </g>

            {/* Small glyphs */}
            <g opacity="0.9">
              <g transform="translate(140,140)">
                <circle
                  r="12"
                  fill="#0a1222"
                  stroke="#6bb6ff"
                  strokeOpacity="0.25"
                  strokeWidth="2"
                />
                <text
                  x="-6"
                  y="6"
                  fontSize="10"
                  fill="#d6eaff"
                  fontWeight="700"
                >
                  in
                </text>
              </g>

              <g transform="translate(115,280)">
                <circle
                  r="10"
                  fill="#07111d"
                  stroke="#6bb6ff"
                  strokeOpacity="0.18"
                  strokeWidth="1"
                />
                <path d="M-4 -4 L4 0 L-4 4 Z" fill="#d6eaff" transform="scale(0.9)" />
              </g>

              <g transform="translate(860,150)">
                <circle
                  r="12"
                  fill="#091423"
                  stroke="#6bb6ff"
                  strokeOpacity="0.22"
                  strokeWidth="1"
                />
                <path
                  d="M-6 -3 L0 6 L6 -3 Z"
                  fill="#eaf4ff"
                  opacity="0.95"
                />
              </g>

              <g transform="translate(880,280)">
                <circle
                  r="10"
                  fill="#0c1628"
                  stroke="#6bb6ff"
                  strokeOpacity="0.18"
                  strokeWidth="1"
                />
                <text x="-6" y="4" fontSize="10" fill="#eaf4ff">
                  {`{}`}
                </text>
              </g>

              <g transform="translate(300,360)">
                <circle
                  r="8"
                  fill="#0a1222"
                  stroke="#6bb6ff"
                  strokeOpacity="0.12"
                  strokeWidth="1"
                />
              </g>

              <g transform="translate(700,360)">
                <circle
                  r="8"
                  fill="#0a1222"
                  stroke="#6bb6ff"
                  strokeOpacity="0.12"
                  strokeWidth="1"
                />
              </g>
            </g>
          </svg>

          {/* Center Orb */}
          <div className="relative z-20 flex items-center justify-center">
            <div
              className="relative w-32 h-32 md:w-48 md:h-48 rounded-full flex items-center justify-center"
              style={{
                background:
                  "radial-gradient(circle at 40% 35%, rgba(255,255,255,0.06), rgba(94,170,255,0.2) 15%, rgba(42,90,170,0.3) 45%, rgba(7,20,45,0.8) 70%)",
                boxShadow:
                  "0 0 60px 18px rgba(79,142,240,0.22), inset 0 0 28px rgba(255,255,255,0.04)",
              }}
            >
              <div
                className="absolute rounded-full w-24 h-24 md:w-32 md:h-32 flex items-center justify-center"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.01))",
                  boxShadow: "0 0 30px rgba(90,160,255,0.16)",
                }}
              >
                <Image
                  src={logo}
                  alt="Khandaker Istekharul Haque"
                  width={100}
                  height={100}
                  className="w-14 h-14 md:w-20 md:h-20"
                />
              </div>

              <div
                className="absolute w-[240px] h-[240px] md:w-[320px] md:h-[320px] rounded-full -z-10"
                style={{
                  background:
                    "radial-gradient(circle at 50% 35%, rgba(92,160,255,0.18), rgba(17,45,85,0.05) 40%, transparent 60%)",
                  filter: "blur(28px)",
                }}
              />
            </div>

            <div
              className="absolute bottom-14 left-1/2 transform -translate-x-1/2 w-2/3 h-12 rounded-full opacity-60"
              style={{
                background:
                  "linear-gradient(90deg, rgba(92,160,255,0.16), rgba(44,120,197,0.12))",
                filter: "blur(14px)",
              }}
            />
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
