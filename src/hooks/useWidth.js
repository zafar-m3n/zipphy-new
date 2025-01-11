import { useState, useMemo } from "react";
export default function useWidth() {
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoints = {
    sm: "640",
    md: "768",
    lg: "1024",
    xl: "1280",
  };

  useMemo(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { width, breakpoints };
}
