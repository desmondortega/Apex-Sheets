"use client"

import Footer from '@/components/footer/Footer';
import './globals.css'
import Navbar from "@/components/navbar/Navbar";
import { useState } from 'react';

export default function RootLayout({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <html lang="en">
      <body className='m-0 p-0 bg-gray-200'>
        <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
        <div className={`mt-20 sm:mt-0'}`}>
          {children}
        </div>
        <Footer className={"mt-40"} />
      </body>
    </html>
  );
}
