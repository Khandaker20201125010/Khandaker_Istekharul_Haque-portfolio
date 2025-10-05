
"use client";

import * as React from "react";
import { cn } from "../lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverable?: boolean;
  bordered?: boolean;
  compact?: boolean;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, hoverable = true, bordered = true, compact = false, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        // 🎨 Base aesthetic
        "relative rounded-xl bg-gradient-to-br from-[#0d0d12] via-[#0a0a17] to-[#0b1220] text-white",
        // apply shadow and border only when bordered is true
        bordered ? "shadow-md shadow-blue-900/40 backdrop-blur-md border border-blue-800/40" : "backdrop-blur-md",
        "transition-all duration-300",
        hoverable &&
          "hover:shadow-blue-500/50 hover:shadow-lg hover:-translate-y-1 hover:border-blue-500/60",
        compact ? "p-4" : "p-0",
        className
      )}
      {...props}
    />
  )
);
Card.displayName = "Card";

// ---------------- CARD HEADER ----------------
interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  spacing?: "default" | "compact" | "relaxed";
}

const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, spacing = "default", ...props }, ref) => {
    const spacingClasses = {
      compact: "flex flex-col space-y-1 p-4",
      default: "flex flex-col space-y-1.5 p-6",
      relaxed: "flex flex-col space-y-2 p-8",
    };

    return (
      <div
        ref={ref}
        className={cn(
          spacingClasses[spacing],
          "border-b border-blue-800/40",
          "bg-gradient-to-b from-blue-950/10 to-transparent",
          className
        )}
        {...props}
      />
    );
  }
);
CardHeader.displayName = "CardHeader";

// ---------------- CARD TITLE ----------------
interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  size?: "sm" | "default" | "lg";
}

const CardTitle = React.forwardRef<HTMLParagraphElement, CardTitleProps>(
  ({ className, as = "h3", size = "default", ...props }, ref) => {
    const Component = as;
    const sizeClasses = {
      sm: "text-lg",
      default: "text-2xl",
      lg: "text-3xl",
    };

    return (
      <Component
        ref={ref}
        className={cn(
          "font-semibold leading-none tracking-tight text-blue-300 drop-shadow-[0_0_6px_rgba(37,99,235,0.4)]",
          sizeClasses[size],
          className
        )}
        {...props}
      />
    );
  }
);
CardTitle.displayName = "CardTitle";

// ---------------- CARD DESCRIPTION ----------------
interface CardDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {
  size?: "xs" | "sm" | "default";
}

const CardDescription = React.forwardRef<HTMLParagraphElement, CardDescriptionProps>(
  ({ className, size = "default", ...props }, ref) => {
    const sizeClasses = {
      xs: "text-xs",
      sm: "text-sm",
      default: "text-base",
    };

    return (
      <p
        ref={ref}
        className={cn(
          "text-blue-200/70 font-light",
          sizeClasses[size],
          className
        )}
        {...props}
      />
    );
  }
);
CardDescription.displayName = "CardDescription";

// ---------------- CARD CONTENT ----------------
interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  removeTopPadding?: boolean;
  padding?: "none" | "sm" | "default" | "lg";
}

const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(
  ({ className, removeTopPadding = true, padding = "default", ...props }, ref) => {
    const paddingClasses = {
      none: "p-0",
      sm: "px-4 py-3",
      default: "p-6",
      lg: "p-8",
    };

    return (
      <div
        ref={ref}
        className={cn(
          paddingClasses[padding],
          removeTopPadding && padding !== "none" ? "pt-0" : "",
          className
        )}
        {...props}
      />
    );
  }
);
CardContent.displayName = "CardContent";

// ---------------- CARD FOOTER ----------------
interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  align?: "start" | "center" | "end" | "between" | "around";
  direction?: "row" | "column";
}

const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className, align = "between", direction = "row", ...props }, ref) => {
    const alignClasses = {
      start: "justify-start",
      center: "justify-center",
      end: "justify-end",
      between: "justify-between",
      around: "justify-around",
    };

    const directionClasses = {
      row: "flex-row",
      column: "flex-col",
    };

    return (
      <div
        ref={ref}
        className={cn(
          "flex items-center p-6 pt-0 border-t border-blue-800/40",
          "bg-gradient-to-t from-blue-950/10 to-transparent",
          "shadow-inner shadow-blue-900/40",
          alignClasses[align],
          directionClasses[direction],
          className
        )}
        {...props}
      />
    );
  }
);
CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
