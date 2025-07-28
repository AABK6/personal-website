"use client";

import { useStore } from "@/lib/store";
import { useEffect } from "react";
import Link from "next/link";

export default function BigBangPage() {
  // Get the setCurrentScene action from the Zustand store
  const setCurrentScene = useStore((state) => state.setCurrentScene);

  // Set the current scene when the component mounts
  useEffect(() => {
    setCurrentScene("big-bang");
  }, [setCurrentScene]);

  return (
    <div className="min-h-screen text-white">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="text-6xl font-bold">Act I</h1>
        <p className="text-2xl">The Big Bang</p>
        <Link href="/population" className="text-xl text-blue-400">
          Go to Population
        </Link>
      </div>
    </div>
  );
}
