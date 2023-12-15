"use client"

import './globals.css'
import Navbar from "@/components/navbar/Navbar";
import { useEffect, useState } from 'react';

export default function RootLayout({ children }) {
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
    <html lang="en">
      <div className="container ml-6">
        <Navbar isMobile={isMobile} isOpen={isOpen} setIsOpen={setIsOpen} />
        <div className={`${!isMobile ? 'ml-10 mt-12' : 'mt-32'}`}>
          {children}
        </div>
      </div>
    </html>
  );
}
