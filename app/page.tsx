"use client";

import { useState, useCallback } from "react";
import CustomCursor from "./components/CustomCursor";
import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import TableOfContents from "./sections/TableOfContents";
import Overview from "./sections/Overview";
import SDLC from "./sections/SDLC";
import Requirements from "./sections/Requirements";
import UseCasesFullyDressed from "./sections/UseCasesFullyDressed";
import Financial from "./sections/Financial";
import Diagrams from "./sections/Diagrams";
import Team from "./sections/Team";
import Contact from "./sections/Contact";

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  const handleLoadComplete = useCallback(() => {
    setLoaded(true);
  }, []);

  return (
    <>
      <CustomCursor />
      <div className="grain-overlay" />
      {!loaded && <LoadingScreen onLoadComplete={handleLoadComplete} />}
      <main className={`transition-opacity duration-1000 ${loaded ? "opacity-100" : "opacity-0"}`}>
        <Navbar />
        <Hero />
        <TableOfContents />
        <Overview />
        <SDLC />
        <Requirements />
        <UseCasesFullyDressed />
        <Financial />
        <Diagrams />
        <Team />
        <Contact />
      </main>
    </>
  );
}