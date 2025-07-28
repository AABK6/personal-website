"use client";

import { Canvas } from "@react-three/fiber";
import PopulationScene from "./PopulationScene";

export default function PopulationScenePreview() {
  return (
    <Canvas>
      <PopulationScene />
    </Canvas>
  );
}
