import React from "react";
import { Outlet } from "react-router-dom";

const DefaultLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 bg-white shadow-md">Header goes here</header>
      <main className="flex-grow">
        <Outlet />
      </main>
      Footer goes here
    </div>
  );
};

export default DefaultLayout;
