"use client";

import { useStore } from "@/lib/store";
import BigBangScene from "@/components/scenes/BigBangScene";
import PopulationScene from "@/components/scenes/PopulationScene";
import Transition from "@/components/layout/Transition";

export default function SceneManager() {
  const scene = useStore((state) => state.currentScene);

  return (
    <Transition>
      {scene === "big-bang" && <BigBangScene />}
      {scene === "population" && <PopulationScene />}
    </Transition>
  );
}
