"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group relative z-10 inline-flex items-center justify-center overflow-hidden font-bold transition-all disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:ring-ring/50 focus-visible:ring-[3px]",
  {
    variants: {
      variant: {
        default:
          "rounded-md bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        destructive:
          "rounded-md bg-destructive text-white shadow-xs hover:bg-destructive/90",
        outline:
          "rounded-md border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground",
        secondary:
          "rounded-md bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost:
          "rounded-md hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
        gradient:
          "cursor-pointer relative inline-flex items-center justify-center rounded-full px-8 py-3 text-gray-900 dark:text-white", // shimmer + sliding bg
      },
      size: {
        default: "text-base px-4 py-2",
        sm: "text-sm px-3 py-1.5",
        lg: "text-lg px-6 py-3",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  children,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  const customCss = `
    @property --angle {
      syntax: '<angle>';
      initial-value: 0deg;
      inherits: false;
    }
    @keyframes shimmer-spin {
      to {
        --angle: 360deg;
      }
    }
  `;

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      <style>{customCss}</style>

   {variant === "gradient" && (
  <>
    {/* Shimmer ring around border */}
    <span
      className="absolute inset-0 rounded-full p-[3px] overflow-hidden z-[-3]"
      style={{
        background:
          "conic-gradient(from var(--angle), transparent 10%, #3b82f6, transparent 30%)",
        animation: "shimmer-spin 2.5s linear infinite",
      }}
    >
      {/* Inner dark background (so shimmer is only border) */}
      <span className="absolute inset-[2px] rounded-full bg-gradient-to-br from-black via-black to-blue-950" />
    </span>

    {/* Sliding hover gradient (your original effect) */}
    <span className="absolute inset-0 z-[-2] -translate-x-full bg-gradient-to-r from-blue-950 via-blue-950 to-sky-900 transition-transform duration-300 ease-in-out group-hover:translate-x-0 rounded-full" />

    {/* Button text */}
    <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
      {children}
    </span>
  </>
)}


      {variant !== "gradient" && <span className="relative">{children}</span>}
    </Comp>
  );
}

export { Button, buttonVariants };
