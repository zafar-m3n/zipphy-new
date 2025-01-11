import React from "react";
import { Outlet } from "react-router-dom";
import Header from "@/components/Header";
import Squares from "@/components/animated/Squares";

const DefaultLayout = () => {
  return (
    <div className="relative flex flex-col min-h-screen bg-[#010101] text-[#f2f2f2]">
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
      <footer className="relative z-10 p-4 text-center bg-[#010101]">Footer goes here</footer>
    </div>
  );
};

export default DefaultLayout;
