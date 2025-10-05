"use client";

import { ReactNode, useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

interface OwnerGuardProps {
  children: ReactNode;
}

export default function OwnerGuard({ children }: OwnerGuardProps) {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    if (status === "loading") return; // wait for session
    if (!session || session.user?.role !== "OWNER") {
      router.replace("/"); // redirect if not OWNER
    } else {
      setAuthorized(true); // allow access
    }
  }, [session, status, router]);

  if (status === "loading" || !authorized) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-white">Checking permissions...</p>
      </div>
    );
  }

  return <>{children}</>;
}
