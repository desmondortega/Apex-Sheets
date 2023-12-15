"use client"
import { useEffect, useState } from 'react';
import Navbar from "@/components/navbar/Navbar"

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  useEffect(() => {
    const handleResize = () => {
      const isMobileSize = window.innerWidth < 640;
      setIsMobile(isMobileSize);
      if (!isMobileSize) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    }
  }, []);

  return (
    <div className="container ml-6">
      <Navbar isMobile={isMobile} isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className={`${!isMobile ? 'ml-8 mt-12' : 'mt-32'}`}>Hello World!</div>
    </div>
  )
}
