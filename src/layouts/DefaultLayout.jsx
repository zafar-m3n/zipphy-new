import React, { useState, useEffect, lazy, Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "@/components/Header";
import Spotlight from "@/components/animated/Spotlight";
import TickerTape from "@/components/TickerTape";
import Footer from "@/components/Footer";
import Loading from "@/components/Loading"; // Fallback loader
import useWidth from "@/hooks/useWidth";

// ✅ Lazy load the named export SparklesCore
const SparklesCore = lazy(() =>
  import("@/components/animated/Sparkles").then((module) => ({
    default: module.SparklesCore,
  }))
);

const DefaultLayout = () => {
  const { width, breakpoints } = useWidth();
  const isMobile = width < breakpoints.md;

  const initialDensity = isMobile ? 50 : 100;
  const targetDensity = isMobile ? 150 : 350;
  const step = (targetDensity - initialDensity) / 60;

  const [particleDensity, setParticleDensity] = useState(initialDensity);

  useEffect(() => {
    let count = 0;
    const interval = setInterval(() => {
      setParticleDensity((prev) => {
        const newDensity = prev + step;
        return newDensity >= targetDensity ? targetDensity : newDensity;
      });

      count++;
      if (count >= 60) {
        clearInterval(interval);
      }
    }, 10000);

    return () => clearInterval(interval);
  }, [isMobile, step, targetDensity]);

  return (
    <div className="relative flex flex-col min-h-screen bg-[#010101] text-[#f2f2f2] max-w-screen overflow-x-hidden">
      {/* Spotlights */}
      <div>
        <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
        <Spotlight className="top-40 left-full h-[80vh] w-[50vw]" fill="#0bf40a" />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="#eff00f" />
      </div>

      <TickerTape />

      <header className="sticky top-0 z-50 bg-[#010101]">
        <Header />
      </header>

      <div className="relative flex-grow">
        {/* Sparkles background */}
        <div className="absolute inset-0">
          <Suspense fallback={<Loading />}>
            <SparklesCore
              id="sparkles-main-footer"
              background="transparent"
              minSize={0.6}
              maxSize={1.4}
              particleDensity={particleDensity}
              className="w-full h-full"
              particleColor="#0bf40a"
            />
          </Suspense>
        </div>

        <main className="relative z-10">
          <div className="relative z-10 p-4">
            <Outlet />
          </div>
        </main>

        <footer className="relative z-10 p-4 text-center bg-[#010101]">
          <Footer />
        </footer>
      </div>
    </div>
  );
};

export default DefaultLayout;
