"use client";
import * as React from "react";
import { useEffect, useRef, ReactNode, CSSProperties } from "react";

interface GlowCardProps {
    children?: ReactNode;
    className?: string;
    glowColor?: "blue" | "purple";
    size?: "sm" | "md" | "lg";
    width?: string | number;
    height?: string | number;
    customSize?: boolean;
}

const glowColorMap = {
    blue: { base: 220, spread: 200 },
    purple: { base: 280, spread: 300 },

};

const sizeMap = {
    sm: "w-60 h-72",
    md: "w-72 h-80",
    lg: "w-96 h-[26rem]",
};

const GlowCard: React.FC<GlowCardProps> = ({
    children,
    className = "",
    glowColor = "blue", // default blue
    size = "md",
    width,
    height,
    customSize = false,
}) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const innerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const syncPointer = (e: PointerEvent) => {
            const { clientX: x, clientY: y } = e;
            if (cardRef.current) {
                cardRef.current.style.setProperty("--x", x.toFixed(2));
                cardRef.current.style.setProperty(
                    "--xp",
                    (x / window.innerWidth).toFixed(2)
                );
                cardRef.current.style.setProperty("--y", y.toFixed(2));
                cardRef.current.style.setProperty(
                    "--yp",
                    (y / window.innerHeight).toFixed(2)
                );
            }
        };

        document.addEventListener("pointermove", syncPointer);
        return () => document.removeEventListener("pointermove", syncPointer);
    }, []);

    const { base, spread } = glowColorMap[glowColor];

    const getSizeClasses = () => {
        if (customSize) return "";
        return sizeMap[size];
    };

    const getInlineStyles = (): CSSProperties & Record<string, string | number> => {
        const baseStyles: CSSProperties & Record<string, string | number> = {
            "--base": base,
            "--spread": spread,
            "--radius": "16",
            "--border": "3",
            "--backdrop": "hsl(220 100% 50% / 0.08)",
            "--backup-border": "hsl(220 100% 50% / 0.3)",
            "--size": "200",
            "--outer": "1",
            "--border-size": "calc(var(--border, 2) * 1px)",
            "--spotlight-size": "calc(var(--size, 150) * 1px)",
            "--hue": 220,
            backgroundImage: `radial-gradient(
        var(--spotlight-size) var(--spotlight-size) at
        calc(var(--x, 0) * 1px)
        calc(var(--y, 0) * 1px),
        hsl(var(--hue, 210) 100% 70% / 0.15), transparent
      )`,
            backgroundColor: "rgba(10, 20, 50, 0.4)",
            border: "1px solid hsl(220 100% 60% / 0.4)",
            color: "white",
        };

        if (width !== undefined) {
            baseStyles.width = typeof width === "number" ? `${width}px` : width;
        }
        if (height !== undefined) {
            baseStyles.height = typeof height === "number" ? `${height}px` : height;
        }

        return baseStyles;
    };

    // 🔹 Restored your original glow (::before, ::after) styles
    const beforeAfterStyles = `
    [data-glow]::before,
    [data-glow]::after {
      pointer-events: none;
      content: "";
      position: absolute;
      inset: calc(var(--border-size) * -1);
      border: var(--border-size) solid transparent;
      border-radius: calc(var(--radius) * 1px);
      background-attachment: fixed;
      background-size: calc(100% + (2 * var(--border-size))) calc(100% + (2 * var(--border-size)));
      background-repeat: no-repeat;
      background-position: 50% 50%;
      mask: linear-gradient(transparent, transparent), linear-gradient(white, white);
      mask-clip: padding-box, border-box;
      mask-composite: intersect;
    }

    [data-glow]::before {
      background-image: radial-gradient(
        calc(var(--spotlight-size) * 0.75) calc(var(--spotlight-size) * 0.75) at
        calc(var(--x, 0) * 1px)
        calc(var(--y, 0) * 1px),
       hsl(220 100% 55% / 0.9), 
        
         transparent 100%
      );
      filter: brightness(2);
    }

    [data-glow]::after {
      background-image: radial-gradient(
        calc(var(--spotlight-size) * 0.5) calc(var(--spotlight-size) * 0.5) at
        calc(var(--x, 0) * 1px)
        calc(var(--y, 0) * 1px),
        hsl(0 100% 100% / 1), transparent 100%
      );
    }

    [data-glow] [data-glow] {
      position: absolute;
      inset: 0;
      will-change: filter;
      opacity: var(--outer, 1);
      border-radius: calc(var(--radius) * 1px);
      border-width: calc(var(--border-size) * 20);
      filter: blur(calc(var(--border-size) * 10));
      background: none;
      pointer-events: none;
      border: none;
    }
  `;

    return (
        <>
            <style dangerouslySetInnerHTML={{ __html: beforeAfterStyles }} />
            <div
                ref={cardRef}
                data-glow
                style={getInlineStyles()}
                className={`
          ${getSizeClasses()}
          ${!customSize ? "aspect-[3/4]" : ""}
          rounded-2xl 
          relative 
          flex flex-col
          p-6 
          gap-4 
          
          shadow-[0_1rem_2rem_-1rem_black] 
          backdrop-blur-md
          ${className}
        `}
            >
                <div ref={innerRef} data-glow></div>
                <div className="flex flex-col gap-2">
                    
                    <h3 className="text-xl font-bold text-blue-400">Service Title</h3>
                    <p className="text-sm text-gray-300 leading-relaxed">
                        Service description goes here.
                    </p>
                </div>
                {children}
            </div>
        </>
    );
};

export default GlowCard;
