"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  Variants,
} from "framer-motion";
import { cn } from "../lib/utils";
import { Calendar } from "lucide-react";
import { Card, CardContent } from "./card";

export interface TimelineEvent {
  id?: string;
  year: string;
  title: string;
  subtitle?: string;
  description: string;
  icon?: React.ReactNode;
  color?: string;
}

export interface ScrollTimelineProps {
  events: TimelineEvent[];
  title?: string;
  subtitle?: string;
  animationOrder?: "sequential" | "staggered" | "simultaneous";
  cardAlignment?: "alternating" | "left" | "right";
  lineColor?: string;
  activeColor?: string;
  progressIndicator?: boolean;
  cardVariant?: "default" | "elevated" | "outlined" | "filled";
  cardEffect?: "none" | "glow" | "shadow" | "bounce";
  parallaxIntensity?: number;
  progressLineWidth?: number;
  progressLineCap?: "round" | "square";
  dateFormat?: "text" | "badge";
  className?: string;
  revealAnimation?: "fade" | "slide" | "scale" | "flip" | "none";
  connectorStyle?: "dots" | "line" | "dashed";
  perspective?: boolean;
  darkMode?: boolean;
}

const DEFAULT_EVENTS: TimelineEvent[] = [
  { year: "2023", title: "Started Learning", description: "Began my journey into web development by learning HTML, CSS, and JavaScript." },
  { year: "2024", title: "Built First Project", description: "Created my first web application using React and Node.js." },
  { year: "2025", title: "Seeking Opportunities", description: "Looking for internships and job opportunities to further my career." }

];

export const ScrollTimeline = ({
  events = DEFAULT_EVENTS,
  title = "My Journey",
  subtitle = "Scroll to explore the journey",
  animationOrder = "sequential",
  cardAlignment = "alternating",
  lineColor = "bg-primary/30",
 
  progressIndicator = true,
  cardVariant = "default",
  cardEffect = "none",
  parallaxIntensity = 0.2,
  progressLineWidth = 3,
  progressLineCap = "round",
  dateFormat = "badge",
  revealAnimation = "fade",
  className = "",
  darkMode = false,
}: ScrollTimelineProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(-1);
  const timelineRefs = useRef<(HTMLDivElement | null)[]>([]);

  // ✅ Allow scrolling
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const progressHeight = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);
  const yOffset = useTransform(
    smoothProgress,
    [0, 1],
    [parallaxIntensity * 100, -parallaxIntensity * 100]
  );

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((v) => {
      const newIndex = Math.floor(v * events.length);
      if (
        newIndex !== activeIndex &&
        newIndex >= 0 &&
        newIndex < events.length
      ) {
        setActiveIndex(newIndex);
      }
    });
    return () => unsubscribe();
  }, [scrollYProgress, events.length, activeIndex]);

  const getCardVariants = (index: number): Variants => {
    const baseDelay =
      animationOrder === "simultaneous"
        ? 0
        : animationOrder === "staggered"
          ? index * 0.2
          : index * 0.3;

    const initialStates = {
      fade: { opacity: 0, y: 20 },
      slide: {
        x:
          cardAlignment === "left"
            ? -100
            : cardAlignment === "right"
              ? 100
              : index % 2 === 0
                ? -100
                : 100,
        opacity: 0,
      },
      scale: { scale: 0.8, opacity: 0 },
      flip: { rotateY: 90, opacity: 0 },
      none: { opacity: 1 },
    };

    return {
      hidden: initialStates[revealAnimation],
      visible: {
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
        rotateY: 0,
        transition: {
          duration: 0.7,
          delay: baseDelay,
          ease: [0.42, 0, 0.58, 1], // 👈 instead of string "easeInOut"
        },
      },
    };
  };


  const getCardClasses = (index: number) => {
    const baseClasses = "relative z-30 rounded-lg transition-all duration-300";
    const variantClasses = {
      default: "bg-card border shadow-sm",
      elevated: "bg-card border border-border/40 shadow-md",
      outlined: "bg-card/50 backdrop-blur border-2 border-primary/20",
      filled: "bg-primary/10 border border-primary/30",
    };
    const effectClasses = {
      none: "",
      glow: "hover:shadow-[0_0_15px_rgba(var(--primary-rgb)/0.5)]",
      shadow: "hover:shadow-lg hover:-translate-y-1",
      bounce: "hover:scale-[1.03] hover:shadow-md active:scale-[0.97]",
    };
    const alignmentClasses =
      cardAlignment === "alternating"
        ? index % 2 === 0
          ? "lg:mr-[calc(50%+20px)]"
          : "lg:ml-[calc(50%+20px)]"
        : cardAlignment === "left"
          ? "lg:mr-auto lg:ml-0"
          : "lg:ml-auto lg:mr-0";

    return cn(
      baseClasses,
      variantClasses[cardVariant],
      effectClasses[cardEffect],
      alignmentClasses,
      "w-full lg:w-[calc(50%-40px)]"
    );
  };

  return (
    <div
      ref={scrollRef}
      className={cn(
        "relative min-h-screen w-full overflow-y-auto py-16 px-4",
        darkMode ? "bg-background text-foreground" : "",
        className
      )}
    >
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">{title}</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {subtitle}
        </p>
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* === Connector line === */}
        <div
          className={cn("absolute left-1/2 -translate-x-1/2 top-0 z-10", lineColor)}
          style={{
            width: progressLineWidth,
            height: "100%",
            borderRadius: progressLineCap === "round" ? "9999px" : "0px",
          }}
        ></div>

        {/* === Progress Line & Glow === */}
        {progressIndicator && (
          <>
            <motion.div
              className="absolute top-0 z-20"
              style={{
                height: progressHeight,
                width: progressLineWidth,
                left: "50%",
                transform: "translateX(-50%)",
                borderRadius:
                  progressLineCap === "round" ? "9999px" : "0px",
                background: `linear-gradient(to bottom, #22d3ee, #6366f1, #a855f7)`,
                boxShadow: `
                  0 0 15px rgba(99,102,241,0.5),
                  0 0 25px rgba(168,85,247,0.3)
                `,
              }}
            />
            <motion.div
              className="absolute z-30"
              style={{
                top: progressHeight,
                left: "50%",
                translateX: "-50%",
                translateY: "-50%",
              }}
            >
              <motion.div
                className="w-5 h-5 rounded-full"
                style={{
                  background:
                    "radial-gradient(circle, rgba(168,85,247,0.8) 0%, rgba(99,102,241,0.5) 40%, rgba(34,211,238,0) 70%)",
                  boxShadow: `
                    0 0 15px 4px rgba(168, 85, 247, 0.6),
                    0 0 25px 8px rgba(99, 102, 241, 0.4),
                    0 0 40px 15px rgba(34, 211, 238, 0.2)
                  `,
                }}
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
          </>
        )}

        {/* === Events === */}
        <div className="relative z-30">
          {events.map((event, index) => (
            <div
              key={event.id || index}
              ref={(el) => { timelineRefs.current[index] = el; }}
              className={cn(
                "relative flex items-center mb-20 py-4 flex-col lg:flex-row",
                cardAlignment === "alternating"
                  ? index % 2 === 0
                    ? "lg:justify-start"
                    : "lg:flex-row-reverse lg:justify-start"
                  : cardAlignment === "left"
                    ? "lg:justify-start"
                    : "lg:flex-row-reverse lg:justify-start"
              )}
            >
              {/* Circle indicator */}
              <div
                className={cn(
                  "absolute top-1/2 transform -translate-y-1/2 z-40 left-1/2 -translate-x-1/2"
                )}
              >
                <motion.div
                  className={cn(
                    "w-6 h-6 rounded-full border-4 bg-background flex items-center justify-center",
                    index <= activeIndex
                      ? "border-primary"
                      : "border bg-card"
                  )}
                  animate={
                    index <= activeIndex
                      ? {
                        scale: [1, 1.3, 1],
                        boxShadow: [
                          "0 0 0px rgba(99,102,241,0)",
                          "0 0 12px rgba(99,102,241,0.6)",
                          "0 0 0px rgba(99,102,241,0)",
                        ],
                      }
                      : {}
                  }
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    repeatDelay: 4,
                    ease: "easeInOut",
                  }}
                />
              </div>

              {/* Card */}
              <motion.div
                className={getCardClasses(index)}
                variants={getCardVariants(index)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, margin: "-100px" }}
                style={parallaxIntensity > 0 ? { y: yOffset } : undefined}
              >
                <Card className="bg-background border">
                  <CardContent className="p-6">
                    {dateFormat === "badge" ? (
                      <div className="flex items-center mb-2">
                        {event.icon || (
                          <Calendar className="h-4 w-4 mr-2 text-primary" />
                        )}
                        <span className="text-sm font-bold text-primary">
                          {event.year}
                        </span>
                      </div>
                    ) : (
                      <p className="text-lg font-bold text-primary mb-2">
                        {event.year}
                      </p>
                    )}
                    <h3 className="text-xl font-bold mb-1">{event.title}</h3>
                    {event.subtitle && (
                      <p className="text-muted-foreground font-medium mb-2">
                        {event.subtitle}
                      </p>
                    )}
                    <p className="text-muted-foreground">
                      {event.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
