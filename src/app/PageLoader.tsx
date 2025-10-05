"use client";
import Loader from "@/components/ui/Loader";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";


export default function PageLoader({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);

  // Show loader on first mount
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // 2s loader
    return () => clearTimeout(timer);
  }, []);

  // Show loader when route changes
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 1500); // 1.5s route loader
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <>
      {loading ? (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black">
          <Loader />
        </div>
      ) : (
        children
      )}
    </>
  );
}
