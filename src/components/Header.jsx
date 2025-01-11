import React, { useState } from "react";
import { Link } from "react-router-dom";
import { navMenu } from "@/data/data";
import logoWhite from "@/assets/logo-white.png";
import AnimatedContent from "@/components/animated/AnimatedContent";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = (index) => {
    setIsDropdownOpen((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <header className="flex items-center justify-between px-4 md:mx-auto md:container">
      <AnimatedContent
        distance={100}
        direction="horizontal"
        reverse={true}
        config={{ tension: 50, friction: 25 }}
        initialOpacity={0.0}
        animateOpacity
        scale={1.0}
        threshold={0.1}
      >
        <Link to="/" className="hover:text-gray-400">
          <img src={logoWhite} alt="Zipphy Logo" className="h-20" />
        </Link>
      </AnimatedContent>

      <AnimatedContent
        distance={100}
        direction="vertical"
        reverse={false}
        config={{ tension: 50, friction: 25 }}
        initialOpacity={0.0}
        animateOpacity
        scale={1.0}
        threshold={0.1}
      >
        <nav className="hidden md:flex space-x-6">
          {navMenu.map((menu, index) => (
            <div key={index} className="relative">
              {menu.children ? (
                <>
                  <button className="hover:text-gray-400" onClick={() => handleDropdownToggle(index)}>
                    {menu.title}
                  </button>
                  {isDropdownOpen[index] && (
                    <div className="absolute left-0 mt-2 bg-gray-700 text-sm rounded shadow-lg">
                      {menu.children.map((child, childIndex) => (
                        <Link to={child.link} key={childIndex} className="block px-4 py-2 hover:bg-gray-600">
                          {child.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link to={menu.link} className="hover:text-gray-400">
                  {menu.title}
                </Link>
              )}
            </div>
          ))}
        </nav>
      </AnimatedContent>

      <AnimatedContent
        distance={100}
        direction="horizontal"
        reverse={false}
        config={{ tension: 50, friction: 25 }}
        initialOpacity={0.0}
        animateOpacity
        scale={1.0}
        threshold={0.1}
      >
        <div className="hidden md:flex space-x-4">
          <Link to="/login" className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-500">
            Login
          </Link>
          <Link to="/register" className="px-4 py-2 bg-green-600 rounded hover:bg-green-500">
            Register
          </Link>
        </div>
      </AnimatedContent>

      <div className="md:hidden">
        <AnimatedContent
          distance={100}
          direction="horizontal"
          reverse={true}
          config={{ tension: 50, friction: 25 }}
          initialOpacity={0.0}
          animateOpacity
          scale={1.0}
          threshold={0.1}
        >
          <button
            className={`relative w-8 h-8 flex flex-col justify-between items-center`}
            onClick={() => setIsDropdownOpen((prevState) => !prevState)}
          >
            {/* Top bar */}
            <span
              className={`block h-1 w-full bg-[#f2f2f2] transition-transform duration-300 ${
                isDropdownOpen ? "rotate-45 translate-y-[14px]" : ""
              }`}
            ></span>
            {/* Middle bar */}
            <span
              className={`block h-1 w-full bg-[#f2f2f2] transition-opacity duration-300 ${
                isDropdownOpen ? "opacity-0" : ""
              }`}
            ></span>
            {/* Bottom bar */}
            <span
              className={`block h-1 w-full bg-[#f2f2f2] transition-transform duration-300 ${
                isDropdownOpen ? "-rotate-45 -translate-y-[14px]" : ""
              }`}
            ></span>
          </button>
        </AnimatedContent>
      </div>
    </header>
  );
};

export default Header;
