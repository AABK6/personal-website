"use client";

import { useRef, useMemo } from "react";
import * as THREE from "three";
import vertexShader from "./shaders/BigBang.vertex.glsl";
import fragmentShader from "./shaders/BigBang.fragment.glsl";

interface ParticleSystemProps {
  particleCount: number;
  spherePositions: Float32Array;
  targetParticleIndex: number;
}

export default function ParticleSystem({
  particleCount,
  spherePositions,
  targetParticleIndex,
}: ParticleSystemProps) {
  const particlesRef = useRef<THREE.Points>(null!);

  const particleGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(spherePositions, 3));
    const colors = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);
    const color = new THREE.Color();
    for (let i = 0; i < particleCount; i++) {
      color.setHSL(i / particleCount, 1.0, 0.5);
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
      sizes[i] = Math.random() * 0.05 + 0.01;
    }
    sizes[targetParticleIndex] = 0;
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute("size", new THREE.BufferAttribute(sizes, 1));
    return geometry;
  }, [spherePositions, particleCount, targetParticleIndex]);

  return (
    <points ref={particlesRef} geometry={particleGeometry}>
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        vertexColors
        blending={THREE.AdditiveBlending}
        transparent
        depthWrite={false}
      />
    </points>
  );
}
