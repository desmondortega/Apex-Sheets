"use client"

import Footer from '@/components/footer/Footer';
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
      <body className='m-0 p-0 bg-gray-100'>
        <Navbar isMobile={isMobile} isOpen={isOpen} setIsOpen={setIsOpen} />
        <div className={`${!isMobile ? 'mt-12' : 'mt-32'}`}>
          {children}
        </div>
        <Footer className={"mt-40"} />
      </body>
    </html>
  );
}
