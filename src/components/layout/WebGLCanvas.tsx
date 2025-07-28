"use client";

import { Canvas } from "@react-three/fiber";
import { ScrollControls, Scroll } from "@react-three/drei";
import { ReactNode } from "react";

export default function WebGLCanvas({ children }: { children: ReactNode }) {
  return (
    <Canvas
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1,
      }}
      camera={{ fov: 110, position: [0, 0, 40] }}
    >
      <ScrollControls pages={3} damping={0.25}>
        <Scroll>
          {children}
        </Scroll>
      </ScrollControls>
    </Canvas>
  );
}
