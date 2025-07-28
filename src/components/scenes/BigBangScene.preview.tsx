"use client";

import { Canvas } from "@react-three/fiber";
import { ScrollControls, Scroll } from "@react-three/drei";
import BigBangScene from "./BigBangScene";

export default function BigBangScenePreview() {
  return (
    <Canvas camera={{ fov: 110, position: [0, 0, 40] }}>
      <ScrollControls pages={3} damping={0.25}>
        <Scroll>
          <BigBangScene />
        </Scroll>
      </ScrollControls>
    </Canvas>
  );
}
