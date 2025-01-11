import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { navMenu } from "@/data/data";
import logoWhite from "@/assets/logo-white.png";
import iconWhite from "@/assets/icon-white.png";
import useWidth from "@/hooks/useWidth";
import Icon from "@/components/ui/Icon";
import AnimatedContent from "@/components/animated/AnimatedContent";

const Header = () => {
  const { width, breakpoints } = useWidth();
  const isMobile = width < breakpoints.md;
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const [openDesktopMenu, setOpenDesktopMenu] = useState(null);

  const submenuTimeout = useRef(null);

  const handleMouseEnter = (index) => {
    clearTimeout(submenuTimeout.current);
    setOpenDesktopMenu(index);
  };

  const handleMouseLeave = () => {
    submenuTimeout.current = setTimeout(() => {
      setOpenDesktopMenu(null);
    }, 300);
  };

  return (
    <header className="flex items-center justify-between px-4 md:mx-auto md:container">
      <AnimatedContent
        distance={100}
        direction="horizontal"
        reverse={isMobile ? false : true}
        config={{ tension: 50, friction: 25 }}
        initialOpacity={0.0}
        animateOpacity
        scale={1.0}
        threshold={0.1}
      >
        <Link to="/" className="hover:text-gray-400">
          <img src={isMobile ? iconWhite : logoWhite} alt="Zipphy Logo" className="h-20" />
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
        <nav className="hidden md:flex space-x-6 md:bg-white/10 md:p-3 rounded-md">
          {navMenu.map((item, index) => (
            <div
              key={index}
              className="relative"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <a href={item.link || "#"} className="hover:text-[#0bf40a] transition-colors flex items-center space-x-1">
                <span>{item.title}</span>
                {item.children && <Icon icon="heroicons:chevron-down" width={16} />}
              </a>
              {item.children && (
                <div
                  className={`absolute left-0 top-full flex flex-col bg-[#010101] shadow-lg mt-2 w-60 rounded-lg transition-transform transition-opacity duration-300 ${
                    openDesktopMenu === index
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 -translate-y-2 pointer-events-none"
                  }`}
                >
                  {item.children.map((child, childIndex) => (
                    <a key={childIndex} href={child.link} className="px-4 py-2 hover:bg-[#0bf40a33]">
                      {child.title}
                    </a>
                  ))}
                </div>
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
            onClick={() => setIsMobileDropdownOpen((prevState) => !prevState)}
          >
            {/* Top bar */}
            <span
              className={`block h-1 w-full bg-[#f2f2f2] transition-transform duration-300 ${
                isMobileDropdownOpen ? "rotate-45 translate-y-[14px]" : ""
              }`}
            ></span>
            {/* Middle bar */}
            <span
              className={`block h-1 w-full bg-[#f2f2f2] transition-opacity duration-300 ${
                isMobileDropdownOpen ? "opacity-0" : ""
              }`}
            ></span>
            {/* Bottom bar */}
            <span
              className={`block h-1 w-full bg-[#f2f2f2] transition-transform duration-300 ${
                isMobileDropdownOpen ? "-rotate-45 -translate-y-[14px]" : ""
              }`}
            ></span>
          </button>
        </AnimatedContent>
      </div>
    </header>
  );
};

export default Header;
