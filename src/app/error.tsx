"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react"; // nice lightweight icon

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 px-4">
      <div className="relative max-w-md w-full rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/70 shadow-xl backdrop-blur-sm p-8 text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/30 mb-4">
          <AlertTriangle className="h-8 w-8 text-red-500 dark:text-red-400" />
        </div>

        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
          Oops, something went wrong
        </h2>
        <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
          {error.message || "An unexpected error occurred. Please try again."}
        </p>

        {error.digest && (
          <p className="mt-2 text-xs text-zinc-400">Error ID: {error.digest}</p>
        )}

        <div className="mt-6">
          <Button
            onClick={() => reset()}
            variant="gradient"
            className="px-6 py-2 text-sm font-medium rounded-md"
          >
            Try again
          </Button>
        </div>

        <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-red-500/5 to-transparent blur-3xl"></div>
      </div>

      <p className="mt-8 text-xs text-zinc-500 dark:text-zinc-600">
        If the issue persists, please contact support.
      </p>
    </div>
  );
}
