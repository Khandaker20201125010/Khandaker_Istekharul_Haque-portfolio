"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Shared/Navbar/Navbar";
import Footer from "@/components/Shared/Footer/Footer";
import { SessionProvider } from "next-auth/react";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isDashboard = pathname.startsWith("/dashboard");

  return (
    <SessionProvider>
      {!isDashboard && <Navbar />}
      <main className="min-h-dvh relative">
        <div className="absolute inset-0 z-0 bg-gridSq h-full">
          <div className="shine-line"></div>
          <div className="shine-line"></div>
          <div className="shine-line"></div>
          <div className="shine-line"></div>
          <div className="shine-line"></div>
        </div>
        <div className="relative z-10">{children}</div>
      </main>
      {!isDashboard && <Footer />}
    </SessionProvider>
  );
}
