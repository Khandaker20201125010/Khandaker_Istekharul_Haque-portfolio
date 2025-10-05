"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Shared/Navbar/Navbar";
import Footer from "@/components/Shared/Footer/Footer";
import { SessionProvider } from "next-auth/react";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const hiddenRoutes = ["/dashboard", "/login", "/signup", "NotFoundPage"];
  const shouldHideLayout = hiddenRoutes.some((path) => pathname.startsWith(path));

  return (
    <SessionProvider>
      {!shouldHideLayout && <Navbar />}
      <main className="relative min-h-screen max-w-screen-2xl mx-auto">
        <div className="fixed inset-0 z-0 bg-gridSq">
          <div className="shine-line"></div>
          <div className="shine-line"></div>
          <div className="shine-line"></div>
          <div className="shine-line"></div>
          <div className="shine-line"></div>
        </div>
        <div className="relative z-10">{children}</div>
      </main>
      {!shouldHideLayout && <Footer />}
    </SessionProvider>
  );
}
