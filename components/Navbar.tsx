"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsDarkMode(true);
      document.body.classList.add("dark");
    } else {
      setIsDarkMode(false);
      document.body.classList.add("light");
    }
  }, []);

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

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } 
    else {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };
  
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  const closeNavbar = () => {
    setIsOpen(false);
  };
  return (
    <>
      <div className="h-full w-full mx-auto max-w-[1350px] px-4 py-6 md:px-20 sticky top-0 z-10">
        <nav
          className={`mx-auto w-full h-full flex items-center gap-8 transition-all duration-500 ease-in-out border border-transparent rounded-full px-4 py-0 lg:py-2  
        ${
          isScrolled
            ? "borders-nav bg-[#050912] backdrop-blur-xl dark:bg-white/25"
            : "bg-transparent"
        }`}
        >
          <Link href="/">
            <div
              className={`size-8 transition-all duration-500 ease-in-out dark:bg-slate-600 bg-slate-900 cursor-pointer
              ${isScrolled ? "rounded-full" : "rounded-md"}`}
            />
          </Link>

          <div className="flex items-center justify-between ml-auto lg:flex-1 lg:ml-0">
            <div className="hidden items-center gap-8 dark:text-black text-white lg:flex">
              <Link href="/">Home</Link>
              <Link href="/features">Features</Link>
              <Link href="/integrations">Integrations</Link>
              <Link href="/pricing">Pricing</Link>
              <Link href="/docs">Docs</Link>
              <Link href="/contacts">Contacts</Link>
            </div>
            <div className="flex items-center gap-3">
              <button
                className="flex items-center justify-center size-8 border border-transparent rounded-full hover:rounded-full hover:border-white/50 hover:border"
                onClick={toggleDarkMode}
              >
                {isDarkMode ? (
                  <Sun size={15} />
                ) : (
                  <Moon size={15} color="white" />
                )}
              </button>
              <div className="h-8 w-[1px] bg-gray-500" />
              <button
                className={`hidden lg:flex bg-violet-800 text-white px-6 py-2 shadow 
              ${isScrolled ? "rounded-full transition-all duration-200 ease-in-out" : "rounded-md"}`}
              >
                Get Template
              </button>

              <div className="relative top-[-20] left-4">
                {!isOpen ? (
                  <Image
                    src="/icon-hamburger.svg"
                    alt="menu"
                    width={20}
                    height={20}
                    className="mr-10 pt-10 lg:hidden"
                    onClick={toggleNavbar}
                  />
                ) : (
                  <Image
                    src="/icon-close.svg"
                    alt="menu"
                    width={20}
                    height={20}
                    className="mr-10 pt-10 lg:hidden"
                    onClick={closeNavbar}
                  />
                )}
              </div>
            </div>
          </div>
        </nav>
      </div>
      {isOpen && (
        <div className="flex flex-col items-start absolute bg-violet-800 w-1/2 px-6 py-10 top-0 left-0 z-10 h-full gap-8 dark:text-black text-white">
          <Link href="/">Home</Link>
          <Link href="/features">Features</Link>
          <Link href="/integrations">Integrations</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/docs">Docs</Link>
          <Link href="/contacts">Contacts</Link>
        </div>
      )}
    </>
  );
};

export default Navbar;
