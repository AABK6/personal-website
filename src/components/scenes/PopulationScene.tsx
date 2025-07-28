"use client";

import { Html } from "@react-three/drei";
import PopulationChart from "@/components/sections/population-chart";

export default function PopulationScene() {
  return (
    <Html center>
      <div style={{ width: '80vw', height: '80vh', overflow: 'auto' }}>
        <PopulationChart />
      </div>
    </Html>
  );
}
