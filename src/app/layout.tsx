// app/layout.tsx
import type { Metadata } from "next";
import { Inter, Poppins, Fira_Code } from "next/font/google"; // ✅ Import fonts
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";
import ScrollAnimationWrapper from "@/components/ui/ScrollAnimationWrapper";
import SplashCursor from "@/components/SplashCursor";
import RouteLoaderWrapper from "@/components/Shared/RouteLoaderWrapper/RouteLoaderWrapper";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const fira = Fira_Code({
  variable: "--font-fira",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Khandaker Istekharul Haque Profile",
  description:
    "Portfolio of Khandaker Istekharul Haque - Full Stack Developer specializing in React, Next.js, Node.js, and MongoDB. Showcasing projects, skills, and contact information.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${inter.variable} ${poppins.variable} ${fira.variable} antialiased`}
      >
        <SplashCursor />
        <RouteLoaderWrapper>
          <ClientLayout>
            <ScrollAnimationWrapper>{children}</ScrollAnimationWrapper>
          </ClientLayout>
        </RouteLoaderWrapper>
      </body>
    </html>
  );
}

