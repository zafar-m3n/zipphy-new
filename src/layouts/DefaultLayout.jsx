import React from "react";
import { Outlet } from "react-router-dom";
import Header from "@/components/Header";
import Squares from "@/components/animated/Squares";
import Spotlight from "@/components/animated/Spotlight";
import Footer from "@/components/Footer";

const DefaultLayout = () => {
  return (
    <div className="relative flex flex-col min-h-screen bg-[#010101] text-[#f2f2f2]">
      <div>
        <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
        <Spotlight className="top-40 left-full h-[80vh] w-[50vw]" fill="#0bf40a" />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="#eff00f" />
      </div>
      <header className="sticky top-0 z-50 bg-[#010101]">
        <Header />
      </header>
      <main className="relative flex-grow">
        <div className="absolute inset-0 pointer-events-none">
          <Squares speed={0.5} squareSize={50} direction="up" borderColor="#0bf40a33" hoverFillColor="#131313" />
        </div>
        <div className="relative z-10 p-4">
          <Outlet />
        </div>
      </main>
      <footer className="relative z-10 p-4 text-center bg-[#010101]">
        <Footer />
      </footer>
    </div>
  );
};

export default DefaultLayout;
