"use client"
import Link from "next/link";
import { useEffect, useState } from "react";
import { Moon } from "lucide-react";
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="h-full w-full mx-auto max-w-[1350px] px-4 py-6 md:px-20 sticky top-0 z-10">
      <nav className={`mx-auto w-full h-full flex items-center gap-8 transition-all duration-500 rounded-full px-4 py-2   
        ${isScrolled ? "borders-nav bg-[#050912]" : "bg-transparent"}`}>
        <div className={`size-8 transition-all duration-500 ease-in-out bg-slate-900 
          ${isScrolled ? "rounded-full" : "rounded-md"}`} />
        <div className="flex items-center justify-between ml-auto lg:flex-1 lg:ml-0">
          <div className="hidden items-center gap-8 lg:flex">
            <Link href="/home">Home</Link>
            <Link href="/features">Features</Link>
            <Link href="/integrations">Integrations</Link>
            <Link href="/pricing">Pricing</Link>
            <Link href="/docs">Docs</Link>
            <Link href="/contacts">Contacts</Link>
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center justify-center border rounded-full border-transparent size-8">
              <Moon size={15} />
            </button>
            <div className="h-8 w-[1px] bg-gray-500" />
            <button className="bg-violet-800 rounded-md text-white px-6 py-2 shadow">Get Template</button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
