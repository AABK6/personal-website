"use client";

import { useMemo, useRef, useEffect, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { useScroll, OrbitControls, Html } from "@react-three/drei";
import { gsap } from "gsap";
import PopulationChart from "@/components/sections/population-chart";
import ParticleSystem from "./ParticleSystem";
import Earth from "./Earth";
import Captions from "./Captions";

const ANIMATION_CONSTANTS = {
  PARTICLE_COUNT: 15000,
  SPHERE_RADIUS: 3,
  GRID_DIMENSIONS: 160,
  EARTH_RADIUS: 0.5,
  SCROLL_OFFSETS: {
    EXPLOSION: 0.15,
    JOURNEY: 0.4,
    CHART: 0.7,
  },
  DURATIONS: {
    INTRO_CAPTION: 1.2,
    EXPLOSION: 4,
    JOURNEY: 7,
    EARTH_CAPTION: 1.2,
  },
};

export default function BigBangScene() {
  const { camera } = useThree();
  const scroll = useScroll();
  const controlsRef = useRef<any>(null!);
  const earthGroupRef = useRef<THREE.Group>(null!);

  const [captions, setCaptions] = useState({ intro: 0, earth: 0 });
  const [showChart, setShowChart] = useState(false);

  const [spherePositions, gridPositions, targetParticleIndex, targetParticlePosition] = useMemo(() => {
    const spherePos = new Float32Array(ANIMATION_CONSTANTS.PARTICLE_COUNT * 3);
    const gridPos = new Float32Array(ANIMATION_CONSTANTS.PARTICLE_COUNT * 3);

    for (let i = 0; i < ANIMATION_CONSTANTS.PARTICLE_COUNT; i++) {
      const phi = Math.acos(-1 + (2 * i) / ANIMATION_CONSTANTS.PARTICLE_COUNT);
      const theta = Math.sqrt(ANIMATION_CONSTANTS.PARTICLE_COUNT * Math.PI) * phi;
      spherePos[i * 3] = ANIMATION_CONSTANTS.SPHERE_RADIUS * Math.cos(theta) * Math.sin(phi);
      spherePos[i * 3 + 1] = ANIMATION_CONSTANTS.SPHERE_RADIUS * Math.sin(theta) * Math.sin(phi);
      spherePos[i * 3 + 2] = ANIMATION_CONSTANTS.SPHERE_RADIUS * Math.cos(phi);
    }

    const targetIndex = Math.floor(Math.random() * ANIMATION_CONSTANTS.PARTICLE_COUNT);
    let targetPos = new THREE.Vector3();

    for (let i = 0; i < ANIMATION_CONSTANTS.PARTICLE_COUNT; i++) {
      gridPos[i * 3] = (Math.random() - 0.5) * ANIMATION_CONSTANTS.GRID_DIMENSIONS;
      gridPos[i * 3 + 1] = (Math.random() - 0.5) * ANIMATION_CONSTANTS.GRID_DIMENSIONS;
      gridPos[i * 3 + 2] = (Math.random() - 0.5) * ANIMATION_CONSTANTS.GRID_DIMENSIONS;
      if (i === targetIndex) {
        targetPos.set(gridPos[i * 3], gridPos[i * 3 + 1], gridPos[i * 3 + 2]);
      }
    }
    return [spherePos, gridPos, targetIndex, targetPos];
  }, []);

  useEffect(() => {
    camera.position.z = 40;
    gsap.to(captions, { intro: 0.6, duration: ANIMATION_CONSTANTS.DURATIONS.INTRO_CAPTION, ease: "power2.out", delay: 1 });
  }, [camera, captions]);

  useFrame(() => {
    const scrollOffset = scroll.offset;

    if (scrollOffset > 0.01 && captions.intro > 0) {
      gsap.to(captions, { intro: 0, duration: 0.6, ease: "power2.in" });
    }

    if (scrollOffset > ANIMATION_CONSTANTS.SCROLL_OFFSETS.CHART) {
      if (captions.earth > 0) {
        gsap.to(captions, { earth: 0, duration: 0.6, ease: "power2.in" });
      }
      if (!showChart) {
        setShowChart(true);
      }
    }

    if (earthGroupRef.current && earthGroupRef.current.visible) {
      earthGroupRef.current.rotation.y += 0.0005;
      (earthGroupRef.current.children[1] as THREE.Mesh).rotation.y += 0.0001;
    }
  });

  return (
    <>
      <OrbitControls ref={controlsRef} enabled={false} minDistance={ANIMATION_CONSTANTS.EARTH_RADIUS * 1.1} maxDistance={ANIMATION_CONSTANTS.EARTH_RADIUS * 5} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 3, 5]} intensity={2} />
      <ParticleSystem
        particleCount={ANIMATION_CONSTANTS.PARTICLE_COUNT}
        spherePositions={spherePositions}
        targetParticleIndex={targetParticleIndex}
      />
      <Earth
        radius={ANIMATION_CONSTANTS.EARTH_RADIUS}
        position={targetParticlePosition}
      />
      <Captions introOpacity={captions.intro} earthOpacity={captions.earth} />
      <Html fullscreen style={{ opacity: showChart ? 1 : 0, transition: 'opacity 0.5s ease-in-out', pointerEvents: showChart ? 'auto' : 'none', zIndex: showChart ? 100 : -1 }}>
        <PopulationChart />
      </Html>
    </>
  );
}
