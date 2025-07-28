"use client";

import { Html } from "@react-three/drei";

interface CaptionsProps {
  introOpacity: number;
  earthOpacity: number;
}

export default function Captions({ introOpacity, earthOpacity }: CaptionsProps) {
  return (
    <Html>
      <div
        className="caption-card"
        style={{
          opacity: introOpacity,
          position: "fixed",
          top: "15%",
          left: "50%",
          transform: "translateX(-50%)",
          fontFamily: '"EB Garamond", serif',
          fontSize: "clamp(14px, 4vw, 18px)",
          color: "white",
          backgroundColor: "rgba(0,0,0,0.25)",
          padding: ".55rem .9rem",
          borderRadius: ".65rem",
          backdropFilter: "blur(4px)",
          textAlign: "center",
        }}
      >
        Au début, l’univers tout entier tenait ici.
      </div>
      <div
        className="caption-card"
        style={{
          opacity: earthOpacity,
          position: "fixed",
          bottom: "12%",
          left: "50%",
          transform: "translateX(-50%)",
          fontFamily: '"EB Garamond", serif',
          fontSize: "clamp(14px, 4vw, 18px)",
          color: "white",
          backgroundColor: "rgba(0,0,0,0.25)",
          padding: ".55rem .9rem",
          borderRadius: ".65rem",
          backdropFilter: "blur(4px)",
          textAlign: "center",
        }}
      >
        Maintenant, toute l’humanité se tient là.
      </div>
    </Html>
  );
}
