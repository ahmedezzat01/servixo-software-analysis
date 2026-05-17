"use client";

import { useEffect, useState } from "react";

interface LoadingScreenProps {
  onLoadComplete: () => void;
}

export default function LoadingScreen({ onLoadComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setHidden(true);
            onLoadComplete();
          }, 500);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 200);

    return () => clearInterval(interval);
  }, [onLoadComplete]);

  return (
    <div className={`loading-screen ${hidden ? "hidden" : ""}`}>
      <div className="text-center">
        <h1
          className="text-5xl md:text-7xl font-bold tracking-tighter mb-4"
          style={{
            background: "linear-gradient(135deg, #fff 0%, #06b6d4 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Servixo
        </h1>
        <p className="text-muted text-sm tracking-widest uppercase">
          Loading 3D Environment
        </p>
        <div className="loading-bar">
          <div
            className="loading-bar-fill"
            style={{ width: `${Math.min(progress, 100)}%` }}
          />
        </div>
        <p className="text-muted text-xs mt-4">
          {Math.min(Math.round(progress), 100)}%
        </p>
      </div>
    </div>
  );
}
