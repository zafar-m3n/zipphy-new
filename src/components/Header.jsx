import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { navMenu } from "@/data/data";
import logoWhite from "@/assets/logo-white.png";
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
          <div className="flex items-center">
            <Link to="/" className="hover:text-gray-400">
              <img src={logoWhite} alt="Zipphy Logo" className="h-20" />
            </Link>
            <p className="items-center hidden md:flex text-sm text-[#0bf40a] me-6">
              Powered by<span className="text-xs italic me-1">CFS-ZIPP LIMITED </span>
            </p>
          </div>
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
                  <span className="flex items-center space-x-1">
                    <span>{item.title}</span>
                    {item.label && (
                      <span className="text-[10px] bg-[#0bf40a] text-black px-1.5 py-0.5 rounded-md font-semibold uppercase">
                        {item.label}
                      </span>
                    )}
                  </span>
                  {item.children && <Icon icon="heroicons:chevron-down" width={16} />}
                </a>
                {item.children && (
                  <div
                    className={`absolute left-0 top-full flex flex-col bg-[#ffffff55] backdrop-blur-md shadow-lg mt-2 w-60 rounded-lg transition-transform transition-opacity duration-300 border border-white/20 ${
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
          <div className="flex space-x-2 md:space-x-4">
            <button
              onClick={() => window.open("https://app.zipphy.com/login", "_blank")}
              className="bg-[#ffffff33] text-white px-4 py-2 rounded-lg backdrop-blur-lg border border-white/20 transition-all duration-300 hover:bg-[#ffffff55] hover:border-white hover:shadow-[0_0_15px_#ffffff] text-sm md:text-base"
            >
              Login
            </button>
            <button
              onClick={() => window.open("https://app.zipphy.com/signup", "_blank")}
              className="flex items-center space-x-1 border border-[#0bf40a33] px-4 py-2 rounded-lg text-white bg-[#0bf40a11] backdrop-blur-lg transition-all duration-300 hover:bg-[#0bf40a44] hover:shadow-[0_0_15px_#0bf40a] hover:border-[#0bf40a]"
            >
              <p className="text-sm md:text-base">Register</p>
              <Icon icon="heroicons:arrow-top-right-on-square" width={isMobile ? 12 : 16} />
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
      <div
        className={`absolute top-full left-0 w-full bg-[#01010122] backdrop-blur-md shadow-lg overflow-hidden transform transition-all duration-300 ${
          isMobileDropdownOpen
            ? "max-h-[500px] opacity-100 translate-y-0"
            : "max-h-0 opacity-0 -translate-y-10 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col space-y-1 p-4">
          {navMenu.map((item, index) => (
            <li key={index} className="relative">
              {item.children ? (
                <button
                  onClick={() => {
                    setOpenDesktopMenu((prevState) => (prevState === index ? null : index));
                  }}
                  className="flex items-center justify-between w-full text-[#010101] px-4 py-2 rounded-lg bg-[#f2f2f2] transition-colors"
                >
                  <span>{item.title}</span>
                  <Icon icon={`heroicons:${openDesktopMenu === index ? "chevron-up" : "chevron-down"}`} width={16} />
                </button>
              ) : (
                <a
                  href={item.link}
                  className="flex items-center justify-between w-full text-[#010101] px-4 py-2 rounded-lg bg-[#f2f2f2] transition-colors"
                >
                  <span className="flex items-center space-x-1">
                    <span>{item.title}</span>
                    {item.label && (
                      <span className="text-[10px] bg-[#0bf40a] text-black px-1.5 py-0.5 rounded-md font-semibold uppercase">
                        {item.label}
                      </span>
                    )}
                  </span>
                </a>
              )}

              {item.children && (
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openDesktopMenu === index
                      ? "max-h-[500px] opacity-100 mt-2"
                      : "max-h-0 opacity-0 mt-0 pointer-events-none"
                  }`}
                >
                  <ul className="flex flex-col bg-[#01010199] rounded-lg shadow-inner">
                    {item.children.map((child, childIndex) => (
                      <li key={childIndex}>
                        <a
                          href={child.link}
                          className="block text-white px-4 py-2 hover:bg-[#0bf40a33] rounded-lg transition-colors"
                        >
                          {child.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
