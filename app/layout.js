"use client"

import Footer from '@/components/footer/Footer';
import './globals.css'
import Navbar from "@/components/navbar/Navbar";
import { useEffect, useState } from 'react';

export default function RootLayout({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const isMobileSize = window.innerWidth < 640;
    setIsMobile(isMobileSize);
    if (!isMobileSize) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }

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
    };
  }, []);

  return (
    <html lang="en">
      <body className='m-0 p-0 bg-gray-200'>
        <Navbar isMobile={isMobile} isOpen={isOpen} setIsOpen={setIsOpen} />
        <div className={`${!isMobile ? 'mt-0' : 'mt-20'}`}>
          {children}
        </div>
        <Footer className={"mt-40"} />
      </body>
    </html>
  );
}
