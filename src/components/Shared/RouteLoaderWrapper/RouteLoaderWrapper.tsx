"use client";

import Loader from "@/components/ui/Loader";
import { usePathname } from "next/navigation";
import { useEffect, useState, useRef } from "react";

export default function RouteLoaderWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);
  const [mounted, setMounted] = useState(false); // ✅ client-only rendering
  const minDisplayTime = 800;
  const startTimeRef = useRef(Date.now());

  // Set mounted only on client
  useEffect(() => {
    setMounted(true);
  }, []);

  // Trigger loader on route change
  useEffect(() => {
    if (!mounted) return;
    setLoading(true);
    startTimeRef.current = Date.now();
  }, [pathname, mounted]);

  // Ensure minimum display time
  useEffect(() => {
    if (!loading || !mounted) return;

    const elapsed = Date.now() - startTimeRef.current;
    const remaining = Math.max(minDisplayTime - elapsed, 0);

    const timer = setTimeout(() => setLoading(false), remaining);
    return () => clearTimeout(timer);
  }, [loading, mounted]);

  if (!mounted) return <>{children}</>; // render server HTML as-is

  return (
    <>
      {loading && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black">
          <Loader />
        </div>
      )}
      <div className={loading ? "pointer-events-none opacity-50" : ""}>{children}</div>
    </>
  );
}
