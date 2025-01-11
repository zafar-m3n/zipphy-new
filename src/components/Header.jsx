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
      <div className="flex items-center">
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
          <nav className="hidden md:flex space-x-6 md:p-3 rounded-md backdrop-blur-lg shadow-lg">
            {navMenu.map((item, index) => (
              <div
                key={index}
                className="relative"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <a
                  href={item.link || "#"}
                  className="hover:text-[#0bf40a] transition-colors flex items-center space-x-1 text-white"
                >
                  <span>{item.title}</span>
                  {item.children && <Icon icon="heroicons:chevron-down" width={16} />}
                </a>
                {item.children && (
                  <div
                    className={`absolute left-0 top-full flex flex-col bg-[#ffffff22] backdrop-blur-md shadow-lg mt-2 w-60 rounded-lg transition-transform transition-opacity duration-300 border border-white/20 ${
                      openDesktopMenu === index
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 -translate-y-2 pointer-events-none"
                    }`}
                  >
                    {item.children.map((child, childIndex) => (
                      <a
                        key={childIndex}
                        href={child.link}
                        className="px-4 py-2 hover:bg-[#0bf40a33] text-white hover:text-[#0bf40a] transition-colors rounded-md"
                      >
                        {child.title}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </AnimatedContent>
      </div>

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
        <div className="flex items-center space-x-4">
          <div className="flex space-x-4">
            <button
              onClick={() => window.open("https://app.zipphy.com/login", "_blank")}
              className="hidden md:block bg-[#ffffff33] text-white px-4 py-2 rounded-lg backdrop-blur-lg border border-white/20 transition-all duration-300 hover:bg-[#ffffff55] hover:border-white hover:shadow-[0_0_15px_#ffffff]"
            >
              Login
            </button>
            <button
              onClick={() => window.open("https://app.zipphy.com/signup", "_blank")}
              className="flex items-center space-x-1 border border-[#0bf40a33] px-4 py-2 rounded-lg text-white bg-[#0bf40a11] backdrop-blur-lg transition-all duration-300 hover:bg-[#0bf40a44] hover:shadow-[0_0_15px_#0bf40a] hover:border-[#0bf40a]"
            >
              <p>Register</p>
              <Icon icon="heroicons:arrow-top-right-on-square" width={16} />
            </button>
          </div>

          <div className="md:hidden">
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
          </div>
        </div>
      </AnimatedContent>
    </header>
  );
};

export default Header;
