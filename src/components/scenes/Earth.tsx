"use client";

import { useMemo, useRef } from "react";
import * as THREE from "three";
import { Sphere } from "@react-three/drei";

interface EarthProps {
  radius: number;
  position: THREE.Vector3;
}

export default function Earth({ radius, position }: EarthProps) {
  const earthGroupRef = useRef<THREE.Group>(null!);

  const earthTextures = useMemo(() => {
    const textureLoader = new THREE.TextureLoader();
    return {
      map: textureLoader.load("/earth_atmos_2048.jpg"),
      bumpMap: textureLoader.load("/earth_normal_2048.jpg"),
      specularMap: textureLoader.load("/earth_specular_2048.jpg"),
      cloudsMap: textureLoader.load("/earth_clouds_1024.png"),
    };
  }, []);

  return (
    <group ref={earthGroupRef} position={position} visible={false}>
      <Sphere args={[radius, 64, 64]}>
        <meshPhongMaterial
          {...earthTextures}
          bumpScale={0.005}
          shininess={5}
          transparent
          opacity={0}
        />
      </Sphere>
      <Sphere args={[radius + 0.003, 64, 64]}>
        <meshPhongMaterial
          map={earthTextures.cloudsMap}
          transparent
          depthWrite={false}
          opacity={0}
        />
      </Sphere>
    </group>
  );
}
