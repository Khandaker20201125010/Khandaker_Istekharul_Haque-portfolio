"use client";
import React, { useState, useRef, useEffect, TouchEvent } from "react";
import GlowCard from "../ui/GlowCard";
import {
  Monitor,
  Server,
  Layers,
  ChevronLeft,
  ChevronRight,
  Zap,
  Grid,
  LayoutGrid,
} from "lucide-react";

const services = [
  {
    title: "Frontend Development",
    description:
      "Building responsive, interactive, and user-friendly web interfaces using React, Next.js, and Tailwind CSS.",
    glowColor: "blue" as const,
    icon: <Monitor className="w-8 h-8 text-blue-400" />,
    badge: "Modern",
  },
  {
    title: "Backend Development",
    description:
      "Creating scalable and secure server-side applications with Node.js, Express.js, MongoDB, and MySQL.",
    glowColor: "blue" as const,
    icon: <Server className="w-8 h-8 text-blue-400" />,
    badge: "Secure",
  },
  {
    title: "Full-Stack MERN Development",
    description:
      "End-to-end development with MERN stack, integrating frontend, backend, and database seamlessly.",
    glowColor: "blue" as const,
    icon: <Layers className="w-8 h-8 text-blue-400" />,
    badge: "Complete",
  },
];

const ServicesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  // Minimum swipe distance (in pixels)
  const minSwipeDistance = 50;

  // Auto-slide for mobile
  useEffect(() => {
    if (window.innerWidth < 768 && !isHovering && !isDragging) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev === services.length - 1 ? 0 : prev + 1));
      }, 5000);
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isHovering, isDragging]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === services.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? services.length - 1 : prev - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Touch swipe handlers
  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    setTouchStartX(e.targetTouches[0].clientX);
    setIsDragging(true);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStartX || !touchEndX) return;
    
    const distance = touchStartX - touchEndX;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
    
    setIsDragging(false);
    setTouchStartX(0);
    setTouchEndX(0);
    
    // Resume auto-slide after 1 second
    setTimeout(() => {
      if (window.innerWidth < 768 && !isHovering) {
        intervalRef.current = setInterval(() => {
          setCurrentIndex((prev) => (prev === services.length - 1 ? 0 : prev + 1));
        }, 5000);
      }
    }, 1000);
  };

  // Mouse drag handlers (for desktop testing)
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (window.innerWidth < 768) {
      setTouchStartX(e.clientX);
      setIsDragging(true);
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (window.innerWidth < 768 && isDragging) {
      setTouchEndX(e.clientX);
    }
  };

  const handleMouseUp = () => {
    if (window.innerWidth < 768 && isDragging) {
      handleTouchEnd();
    }
  };

  // Handle mouse leave while dragging
  const handleMouseLeave = () => {
    if (window.innerWidth < 768 && isDragging) {
      setIsDragging(false);
      setTouchStartX(0);
      setTouchEndX(0);
    }
  };

  // Calculate drag offset for visual feedback
  const getDragOffset = () => {
    if (!isDragging || !touchStartX || !touchEndX) return 0;
    const distance = touchStartX - touchEndX;
    // Limit the offset to prevent too much movement
    return Math.max(-100, Math.min(100, distance * 0.5));
  };

  return (
    <section className="relative overflow-hidden py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with accent */}
        <div className="relative mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-gradient-to-r from-blue-500 to-cyan-500"></div>
            <span className="text-blue-400 font-semibold tracking-wider uppercase text-sm">
              Services
            </span>
            <div className="h-px flex-1 bg-gradient-to-r from-cyan-500 to-transparent"></div>
          </div>
          
          <div className="flex items-baseline justify-between">
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                <span className="text-white">What I </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">
                  Offer
                </span>
              </h2>
              <p className="mt-4 text-gray-400 max-w-xl">
                Comprehensive development services tailored to bring your digital vision to life
              </p>
            </div>
            <Zap className="hidden lg:block w-12 h-12 text-cyan-400/30" />
          </div>
        </div>

        {/* Background effects */}
        <div className="absolute top-0 left-0 w-full h-full -z-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-500/10 blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-cyan-500/5 blur-3xl"></div>
        </div>

        {/* Desktop Grid - Full 3-column layout */}
        <div className="hidden lg:grid gap-8 grid-cols-3">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="group relative"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <GlowCard
                glowColor={service.glowColor}
                size="md"
                className="h-full"
              >
                <div className="relative p-6">
                  {/* Badge */}
                  <div className="absolute -top-3 right-6">
                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30">
                      {service.badge}
                    </span>
                  </div>
                  
                  <div className="flex flex-col gap-5">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-gray-800/50 group-hover:bg-gray-800/80 transition-colors">
                        {service.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">
                          {service.title}
                        </h3>
                        <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
                      </div>
                    </div>
                    <p className="text-gray-300 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </GlowCard>
            </div>
          ))}
        </div>

        {/* Tablet Layout - 2 cards side by side, 3rd card full width */}
        <div className="hidden md:grid lg:hidden gap-6">
          {/* First row: 2 cards side by side */}
          <div className="grid grid-cols-2 gap-6">
            {services.slice(0, 2).map((service, idx) => (
              <div
                key={idx}
                className="group relative"
              >
                <GlowCard
                  glowColor={service.glowColor}
                  size="md"
                  className="h-full"
                >
                  <div className="relative p-6">
                    {/* Badge */}
                    <div className="absolute -top-3 right-6">
                      <span className="px-3 py-1 text-xs font-semibold rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30">
                        {service.badge}
                      </span>
                    </div>
                    
                    <div className="flex flex-col gap-5">
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-xl bg-gray-800/50 group-hover:bg-gray-800/80 transition-colors">
                          {service.icon}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white mb-2">
                            {service.title}
                          </h3>
                          <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
                        </div>
                      </div>
                      <p className="text-gray-300 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </GlowCard>
              </div>
            ))}
          </div>
          
          {/* Second row: 3rd card full width */}
          {services.length > 2 && (
            <div className="group relative">
              <GlowCard
                glowColor={services[2].glowColor}
                size="lg"
                className="w-full"
              >
                <div className="relative p-6 md:p-8">
                  {/* Tablet badge position - centered */}
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="px-4 py-1.5 text-sm font-semibold rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30 flex items-center gap-2">
                      <LayoutGrid className="w-3 h-3" />
                      {services[2].badge}
                    </span>
                  </div>
                  
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                    {/* Icon container - larger for tablet */}
                    <div className="p-4 rounded-2xl bg-gray-800/50 group-hover:bg-gray-800/80 transition-colors flex-shrink-0">
                      <div className="w-12 h-12">
                        {services[2].icon}
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-2">
                            {services[2].title}
                          </h3>
                          <div className="h-1.5 w-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
                        </div>
                        
                        {/* Additional visual indicator for full-width card */}
                        <div className="flex items-center gap-2 text-sm text-cyan-400">
                          <Grid className="w-4 h-4" />
                          <span>Full Stack Solution</span>
                        </div>
                      </div>
                      
                      <p className="text-gray-300 leading-relaxed text-lg">
                        {services[2].description}
                      </p>
                      
                      {/* Additional features or highlights for full-width card */}
                      <div className="mt-6 flex flex-wrap gap-3">
                        <span className="px-3 py-1 text-xs rounded-full bg-gray-800/50 text-gray-300">
                          Frontend + Backend
                        </span>
                        <span className="px-3 py-1 text-xs rounded-full bg-gray-800/50 text-gray-300">
                          Database Integration
                        </span>
                        <span className="px-3 py-1 text-xs rounded-full bg-gray-800/50 text-gray-300">
                          End-to-End Development
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </GlowCard>
            </div>
          )}
        </div>

        {/* Mobile Slider with Swipe Support */}
        <div 
          className="md:hidden relative"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => {
            setIsHovering(false);
            handleMouseLeave();
          }}
          onTouchStart={() => setIsHovering(true)}
          onTouchEnd={() => setTimeout(() => setIsHovering(false), 1000)}
        >
          {/* Swipe instructions hint */}
          <div className="flex items-center justify-center gap-2 mb-4 text-sm text-gray-400">
            <span className="animate-pulse">← Swipe →</span>
            <span className="text-xs opacity-70">or use buttons</span>
          </div>

          {/* Slider Container with swipe support */}
          <div 
            ref={sliderRef}
            className="relative select-none cursor-grab active:cursor-grabbing"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
          >
            <div className="overflow-hidden rounded-2xl">
              <div
                className="flex transition-transform duration-300 ease-out"
                style={{ 
                  transform: `translateX(calc(-${currentIndex * 100}% + ${getDragOffset()}px))`,
                  transition: isDragging ? 'none' : 'transform 0.3s ease-out'
                }}
              >
                {services.map((service, idx) => (
                  <div 
                    key={idx} 
                    className="w-full flex-shrink-0 px-2"
                  >
                    <GlowCard
                      glowColor={service.glowColor}
                      size="md"
                      className="h-full"
                    >
                      <div className="p-5">
                        <div className="flex items-start gap-4 mb-4">
                          <div className="p-3 rounded-xl bg-gray-800/50">
                            {service.icon}
                          </div>
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <h3 className="text-lg font-bold text-white">
                                {service.title}
                              </h3>
                              <span className="text-xs px-2 py-1 rounded-full bg-blue-500/20 text-blue-300">
                                {service.badge}
                              </span>
                            </div>
                            <div className="h-1 w-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
                          </div>
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </GlowCard>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual swipe indicator */}
            {isDragging && (
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className={`flex items-center justify-center gap-2 ${touchEndX < touchStartX ? 'text-blue-400' : 'text-cyan-400'}`}>
                  {touchEndX < touchStartX ? (
                    <>
                      <ChevronRight className="w-6 h-6 animate-pulse" />
                      <span className="text-sm font-medium">Swipe right</span>
                    </>
                  ) : (
                    <>
                      <span className="text-sm font-medium">Swipe left</span>
                      <ChevronLeft className="w-6 h-6 animate-pulse" />
                    </>
                  )}
                </div>
              </div>
            )}

            {/* Gradient fade edges */}
            <div className="pointer-events-none absolute left-0 top-0 h-full w-8 bg-gradient-to-r from-gray-900 to-transparent"></div>
            <div className="pointer-events-none absolute right-0 top-0 h-full w-8 bg-gradient-to-l from-gray-900 to-transparent"></div>
          </div>

          {/* Enhanced Navigation */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full bg-gray-800/50 backdrop-blur-sm hover:bg-gray-700/50 transition-all hover:scale-110 active:scale-95"
              aria-label="Previous service"
            >
              <ChevronLeft className="w-5 h-5 text-white" />
            </button>
            
            {/* Enhanced Dots with swipe animation */}
            <div className="flex items-center gap-3">
              {services.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goToSlide(idx)}
                  className="group relative"
                  aria-label={`Go to service ${idx + 1}`}
                >
                  <div
                    className={`w-3 h-3 rounded-full transition-all ${
                      idx === currentIndex
                        ? "bg-gradient-to-r from-blue-500 to-cyan-500 scale-125"
                        : "bg-gray-700 group-hover:bg-gray-600"
                    }`}
                  />
                  {idx === currentIndex && (
                    <div className="absolute -inset-2 rounded-full border border-blue-500/30 animate-pulse"></div>
                  )}
                </button>
              ))}
            </div>
            
            <button
              onClick={nextSlide}
              className="p-3 rounded-full bg-gray-800/50 backdrop-blur-sm hover:bg-gray-700/50 transition-all hover:scale-110 active:scale-95"
              aria-label="Next service"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>
          </div>

          {/* Counter with slide indicator */}
          <div className="text-center mt-4">
            <div className="text-sm text-gray-400 mb-2">
              <span className="text-blue-400 font-semibold">{currentIndex + 1}</span>
              <span className="mx-2">/</span>
              <span>{services.length}</span>
            </div>
            
            {/* Progress bar */}
            <div className="w-32 h-1 bg-gray-800 rounded-full mx-auto overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 transition-all duration-300"
                style={{ width: `${((currentIndex + 1) / services.length) * 100}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;