"use client";

import { useMemo, useRef, useEffect, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { useScroll, OrbitControls, Sphere, Html } from "@react-three/drei";
import { gsap } from "gsap";
import PopulationChart from "@/components/sections/population-chart";

const PARTICLE_COUNT = 15000;
const SPHERE_RADIUS = 3;
const GRID_DIMENSIONS = 160;
const EARTH_RADIUS = 0.5;

export default function BigBangScene() {
  const particlesRef = useRef<THREE.Points>(null!);
  const earthGroupRef = useRef<THREE.Group>(null!);
  const controlsRef = useRef<any>(null!);
  const { camera } = useThree();
  const scroll = useScroll();

  const [animationState, setAnimationState] = useState("sphere");
  const [isAnimating, setIsAnimating] = useState(false);
  const [captions, setCaptions] = useState({
    intro: 0,
    earth: 0,
    history1: 0,
    history2: 0,
  });
  const [showChart, setShowChart] = useState(false);

  const [spherePositions, gridPositions, targetParticleIndex, targetParticlePosition] = useMemo(() => {
    const spherePos = new Float32Array(PARTICLE_COUNT * 3);
    const gridPos = new Float32Array(PARTICLE_COUNT * 3);

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const phi = Math.acos(-1 + (2 * i) / PARTICLE_COUNT);
      const theta = Math.sqrt(PARTICLE_COUNT * Math.PI) * phi;
      spherePos[i * 3] = SPHERE_RADIUS * Math.cos(theta) * Math.sin(phi);
      spherePos[i * 3 + 1] = SPHERE_RADIUS * Math.sin(theta) * Math.sin(phi);
      spherePos[i * 3 + 2] = SPHERE_RADIUS * Math.cos(phi);
    }

    const targetIndex = Math.floor(Math.random() * PARTICLE_COUNT);
    let targetPos = new THREE.Vector3();

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      gridPos[i * 3] = (Math.random() - 0.5) * GRID_DIMENSIONS;
      gridPos[i * 3 + 1] = (Math.random() - 0.5) * GRID_DIMENSIONS;
      gridPos[i * 3 + 2] = (Math.random() - 0.5) * GRID_DIMENSIONS;
      if (i === targetIndex) {
        targetPos.set(gridPos[i * 3], gridPos[i * 3 + 1], gridPos[i * 3 + 2]);
      }
    }
    return [spherePos, gridPos, targetIndex, targetPos];
  }, []);

  const particleGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(spherePositions, 3));
    const colors = new Float32Array(PARTICLE_COUNT * 3);
    const sizes = new Float32Array(PARTICLE_COUNT);
    const color = new THREE.Color();
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      color.setHSL(i / PARTICLE_COUNT, 1.0, 0.5);
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
      sizes[i] = Math.random() * 0.05 + 0.01;
    }
    sizes[targetParticleIndex] = 0;
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute("size", new THREE.BufferAttribute(sizes, 1));
    return geometry;
  }, [spherePositions, targetParticleIndex]);

  const earthTextures = useMemo(() => {
    const textureLoader = new THREE.TextureLoader();
    return {
      map: textureLoader.load('/earth_atmos_2048.jpg'),
      bumpMap: textureLoader.load('/earth_normal_2048.jpg'),
      specularMap: textureLoader.load('/earth_specular_2048.jpg'),
      cloudsMap: textureLoader.load('/earth_clouds_1024.png'),
    };
  }, []);

  useEffect(() => {
    camera.position.z = 40;
    gsap.to(captions, { intro: 0.6, duration: 1.2, ease: "power2.out", delay: 1 });
  }, [camera]);

  useFrame(() => {
    const scrollOffset = scroll.offset;

    if (scrollOffset > 0.01 && captions.intro > 0) {
      gsap.to(captions, { intro: 0, duration: 0.6, ease: "power2.in" });
    }

    if (scrollOffset > 0.15 && animationState === "sphere" && !isAnimating) {
      setIsAnimating(true);
      setAnimationState("exploding");

      const tl = gsap.timeline({
        onComplete: () => {
          setAnimationState("grid");
          setIsAnimating(false);
        }
      });

      const positions = particleGeometry.attributes.position.array as Float32Array;
      const proxy = { value: 0 };

      tl.to(proxy, {
        value: 1,
        duration: 4,
        ease: "power3.inOut",
        onUpdate: () => {
          for (let i = 0; i < PARTICLE_COUNT; i++) {
            const i3 = i * 3;
            positions[i3] = THREE.MathUtils.lerp(spherePositions[i3], gridPositions[i3], proxy.value);
            positions[i3 + 1] = THREE.MathUtils.lerp(spherePositions[i3 + 1], gridPositions[i3 + 1], proxy.value);
            positions[i3 + 2] = THREE.MathUtils.lerp(spherePositions[i3 + 2], gridPositions[i3 + 2], proxy.value);
          }
          if (particlesRef.current) particlesRef.current.geometry.attributes.position.needsUpdate = true;
        }
      }, 0);

      tl.to(camera.position, { z: 10, duration: 4, ease: "power3.inOut" }, 0);
    }

    if (scrollOffset > 0.4 && animationState === "grid" && !isAnimating) {
      setIsAnimating(true);
      setAnimationState("journeying");
      if (controlsRef.current) controlsRef.current.enabled = false;

      const cameraEndPosition = targetParticlePosition.clone().add(new THREE.Vector3(0, EARTH_RADIUS * 0.5, EARTH_RADIUS * 4));
      const startPosition = camera.position.clone();
      const controlPoint = new THREE.Vector3().lerpVectors(startPosition, cameraEndPosition, 0.5).add(new THREE.Vector3(0, 20, 0));
      const curve = new THREE.QuadraticBezierCurve3(startPosition, controlPoint, cameraEndPosition);

      gsap.to({ t: 0 }, {
        t: 1,
        duration: 7,
        ease: "power3.inOut",
        onStart: () => {
          if (earthGroupRef.current) {
            earthGroupRef.current.visible = true;
            gsap.from(earthGroupRef.current.children.map(c => (c as THREE.Mesh).material), { opacity: 0, duration: 1.5, ease: "power2.out" });
          }
        },
        onUpdate: function () {
          curve.getPoint(this.t, camera.position);
          camera.lookAt(targetParticlePosition);
        },
        onComplete: () => {
          setAnimationState("focused");
          setIsAnimating(false);
          if (controlsRef.current) {
            controlsRef.current.enabled = true;
            controlsRef.current.target.copy(targetParticlePosition);
          }
          gsap.to(captions, { earth: 0.6, duration: 1.2, ease: "power2.out" });
        },
      });
    }

    if (scrollOffset > 0.7 && animationState === "focused") {
        if(captions.earth > 0) {
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
      <OrbitControls ref={controlsRef} enabled={animationState === "focused"} minDistance={EARTH_RADIUS * 1.1} maxDistance={EARTH_RADIUS * 5} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 3, 5]} intensity={2} />
      <points ref={particlesRef} geometry={particleGeometry}>
        <shaderMaterial
          vertexShader={`
            attribute float size;
            varying vec3 vColor;
            void main() {
              vColor = color;
              vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
              gl_PointSize = size * (300.0 / -mvPosition.z);
              gl_Position = projectionMatrix * mvPosition;
            }
          `}
          fragmentShader={`
            varying vec3 vColor;
            void main() {
              if (length(gl_PointCoord - vec2(0.5, 0.5)) > 0.475) discard;
              gl_FragColor = vec4(vColor, 1.0);
            }
          `}
          vertexColors
          blending={THREE.AdditiveBlending}
          transparent
          depthWrite={false}
        />
      </points>
      <group ref={earthGroupRef} position={targetParticlePosition} visible={false}>
        <Sphere args={[EARTH_RADIUS, 64, 64]}>
          <meshPhongMaterial {...earthTextures} bumpScale={0.005} shininess={5} transparent opacity={0} />
        </Sphere>
        <Sphere args={[EARTH_RADIUS + 0.003, 64, 64]}>
          <meshPhongMaterial map={earthTextures.cloudsMap} transparent depthWrite={false} opacity={0} />
        </Sphere>
      </group>
      <Html fullscreen style={{ opacity: showChart ? 1 : 0, transition: 'opacity 0.5s ease-in-out', pointerEvents: showChart ? 'auto' : 'none', zIndex: showChart ? 100 : -1 }}>
        <PopulationChart />
      </Html>
      <Html>
        <div
          className="caption-card"
          style={{
            opacity: captions.intro,
            position: 'fixed',
            top: '15%',
            left: '50%',
            transform: 'translateX(-50%)',
            fontFamily: '"EB Garamond", serif',
            fontSize: 'clamp(14px, 4vw, 18px)',
            color: 'white',
            backgroundColor: 'rgba(0,0,0,0.25)',
            padding: '.55rem .9rem',
            borderRadius: '.65rem',
            backdropFilter: 'blur(4px)',
            textAlign: 'center'
          }}
        >
          Au début, l’univers tout entier tenait ici.
        </div>
        <div
          className="caption-card"
          style={{
            opacity: captions.earth,
            position: 'fixed',
            bottom: '12%',
            left: '50%',
            transform: 'translateX(-50%)',
            fontFamily: '"EB Garamond", serif',
            fontSize: 'clamp(14px, 4vw, 18px)',
            color: 'white',
            backgroundColor: 'rgba(0,0,0,0.25)',
            padding: '.55rem .9rem',
            borderRadius: '.65rem',
            backdropFilter: 'blur(4px)',
            textAlign: 'center'
          }}
        >
          Maintenant, toute l’humanité se tient là.
        </div>
      </Html>
    </>
  );
}