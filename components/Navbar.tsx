"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
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
    } else {
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
              ${
                isScrolled
                  ? "rounded-full transition-all duration-200 ease-in-out"
                  : "rounded-md"
              }`}
              >
                Get Template
              </button>

              <div className="relative -top-5 left-4 transition-all duration-200">
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
        <div className={`fixed dark:bg-white bg-[#030712] w-1/2 px-6 py-20 top-0 left-0 z-10 h-full gap-8 dark:text-black flex flex-col items-start 
              transition-transform duration-[750ms] ease-out 
              ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
          <Link
            href="/"
            className={`opacity-1 animate-fadeIn delay-100 ${pathname === "/" ? "text-gray-400" : "dark:text-black text-white"}`}
          >
            Home
          </Link>
          <Link
            href="/features"
            className={`opacity-1 animate-fadeIn delay-200 ${
              pathname === "/features" ? "text-gray-400" : "dark:text-black text-white"
            }`}
          >
            Features
          </Link>
          <Link
            href="/integrations"
            className={`opacity-1 animate-fadeIn delay-300 ${
              pathname === "/integrations" ? "text-gray-400" : "dark:text-black text-white"
            }`}
          >
            Integrations
          </Link>
          <Link
            href="/pricing"
            className={`opacity-1 animate-fadeIn delay-400 ${
              pathname === "/pricing" ? "text-gray-400" : "dark:text-black text-white"
            }`}
          >
            Pricing
          </Link>
          <Link
            href="/docs"
            className={`opacity-1 animate-fadeIn delay-500 ${
              pathname === "/docs" ? "text-gray-400" : "dark:text-black text-white"
            }`}
          >
            Docs
          </Link>
          <Link
            href="/contacts"
            className={`opacity-1 animate-fadeIn delay-700 ${
              pathname === "/contacts" ? "text-gray-400" : "dark:text-black text-white"
            }`}
          >
            Contacts
          </Link>
        </div>
    </>
  );
};

export default Navbar;
