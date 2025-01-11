import React from "react";
import { Outlet } from "react-router-dom";
import Header from "@/components/Header";
import AnimatedContent from "@/components/animated/AnimatedContent";

const DefaultLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#010101] text-[#f2f2f2]">
      <header className="sticky top-0 z-50 bg-transparent">
        <Header />
      </header>
      <main className="flex-grow">
        <Outlet />
      </main>
      Footer goes here
    </div>
  );
};

export default DefaultLayout;
