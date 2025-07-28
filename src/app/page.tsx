"use client";

import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
      <h1 className="text-6xl font-bold mb-8">The Journey</h1>
      <div className="flex space-x-4">
        <Link href="/big-bang" className="text-2xl text-blue-400">
          Start with the Big Bang
        </Link>
      </div>
    </div>
  );
}