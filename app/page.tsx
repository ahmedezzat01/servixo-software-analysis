"use client";

import { useState, useCallback } from "react";
import CustomCursor from "./components/CustomCursor";
import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import TableOfContents from "./sections/TableOfContents";
import Overview from "./sections/Overview";
import Diagrams from "./sections/Diagrams";
import Financial from "./sections/Financial";  // ← استيراد Financial
import SDLC from "./sections/SDLC";
import UseCases from "./sections/UseCases";
import Team from "./sections/Team";
import Contact from "./sections/Contact";

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  const handleLoadComplete = useCallback(() => {
    setLoaded(true);
  }, []);

  return (
    <>
      {/* Custom Cursor */}
      <CustomCursor />

      {/* Grain Overlay */}
      <div className="grain-overlay" />

      {/* Loading Screen */}
      {!loaded && <LoadingScreen onLoadComplete={handleLoadComplete} />}

      {/* Main Content */}
      <main className={`transition-opacity duration-1000 ${loaded ? "opacity-100" : "opacity-0"}`}>
        <Navbar />
        <Hero />
        <TableOfContents />
        <Overview />
        <Diagrams />
        <Financial />      {/* ← Financial بعد Diagrams علطول */}
        <SDLC />
        <UseCases />
        <Team />
        <Contact />
      </main>
    </>
  );
}