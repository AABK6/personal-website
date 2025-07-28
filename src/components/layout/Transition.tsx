"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useStore } from "@/lib/store";

export default function Transition({ children }: { children: React.ReactNode }) {
  const scene = useStore((state) => state.currentScene);

  return (
    <AnimatePresence mode="wait">
      <motion.group
        key={scene}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.5 }}
      >
        {children}
      </motion.group>
    </AnimatePresence>
  );
}
