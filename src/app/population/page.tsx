"use client";

import { useStore } from "@/lib/store";
import { useEffect } from "react";
import Link from "next/link";

export default function PopulationPage() {
  const setCurrentScene = useStore((state) => state.setCurrentScene);

  useEffect(() => {
    setCurrentScene("population");
  }, [setCurrentScene]);

  return (
    <>
      <div className="min-h-screen text-white">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
          <h1 className="text-6xl font-bold">Act II</h1>
          <p className="text-2xl">The Population</p>
          <Link href="/big-bang" className="text-xl text-blue-400">
            Go to Big Bang
          </Link>
        </div>
      </div>
      <div style={{ height: "300vh" }}></div>
    </>
  );
}
