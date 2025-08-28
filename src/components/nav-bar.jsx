"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const menuVariants = {
    closed: {
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 220,
        damping: 28,
        mass: 0.9
      }
    },
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 220,
        damping: 28,
        mass: 0.9
      }
    }
  };

  const overlayVariants = {
    closed: {
      opacity: 0,
      transition: {
        duration: 0.25,
        ease: "easeOut"
      }
    },
    open: {
      opacity: 1,
      transition: {
        duration: 0.25,
        ease: "easeOut"
      }
    }
  };

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Destination", href: "/destination" },
    { name: "Crew", href: "/crew" },
    { name: "Technology", href: "/technology" }
  ];

  return (
    <>
      {/* Top bar with logo and hamburger (mobile only) */}
      <div className="w-full h-fit flex items-center justify-between p-5 md:hidden ">
        {/* Logo */}
        <a href="/" aria-label="Home" >
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40ZM20 40C20 40 20 20 40 20C20 20 20 0 20 0C20 0 20 20 0 20C19.648 20.1428 20 40 20 40Z" fill="white"/>
          </svg>
        </a>
        {/* Hamburger Menu Button */}
        <button
          onClick={toggleMenu}
          className="p-2 rounded-lg hover:bg-white/10 transition-colors"
          aria-label="Toggle navigation menu"
        >
          <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect y="0.5" width="24" height="3" fill="#FFFFFF"/>
            <rect y="9.5" width="24" height="3" fill="#FFFFFF"/>
            <rect y="18.5" width="24" height="3" fill="#FFFFFF"/>
          </svg>
        </button>
      </div>

      {/* Desktop/Tablet horizontal navbar */}
      <header className="hidden md:flex w-full items-center justify-between pt-6 lg:pt-10">
        {/* Left: logo */}
        <a href="/" aria-label="Home" className="pl-6 lg:pl-12">
          <svg width="48" height="48" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40ZM20 40C20 40 20 20 40 20C20 20 20 0 20 0C20 0 20 20 0 20C19.648 20.1428 20 40 20 40Z" fill="white"/>
          </svg>
        </a>

        {/* Right: nav bar */}
        <nav className="">
          <ul className="backdrop-blur-md bg-white/10 md:px-8 lg:px-12 md:py-6 flex md:gap-8 lg:gap-12 text-white uppercase tracking-[0.15em]">
            {menuItems.map((item, index) => {
              const isActive = pathname === item.href;
              return (
                <li key={`desk-${item.name}`} className="relative">
                  <Link
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    className={`relative pb-3 md:pb-6 flex items-center gap-2 text-preset-8 ${
                      isActive ? "text-white" : "text-white/70 hover:text-white"
                    } after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:bg-white after:transition-opacity after:duration-200 ${
                      isActive ? "after:opacity-100" : "after:opacity-0 hover:after:opacity-50"
                    }`}
                  >
                    <span className="text-preset-8-bold">
                      {String(index).padStart(2, '0')}
                    </span>
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>

      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={overlayVariants}
            initial="closed"
            animate="open"
            exit="closed"
            onClick={closeMenu}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          />
        )}
      </AnimatePresence>

      {/* Side Navigation Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed top-0 right-0 h-full w-80 bg-white/10 backdrop-blur-md border-l border-white/20 z-50"
          >
            <div className="flex flex-col h-full p-5 ">
              {/* Close button */}
              <div className="flex justify-end mb-8">
                <button
                  onClick={closeMenu}
                  className="text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
                  aria-label="Close navigation menu"
                >
                  <svg className="w-6 h-6 " fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="flex-1">
                <ul className="space-y-6">
                  {menuItems.map((item, index) => (
                    <motion.li
                      key={item.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {(() => {
                        const isActive = pathname === item.href;
                        return (
                          <Link
                            href={item.href}
                            onClick={closeMenu}
                            aria-current={isActive ? "page" : undefined}
                            className={`text-preset-8 flex items-center group ${
                              isActive
                                ? "text-white"
                                : "text-white/70 hover:text-white"
                            }`}
                          >
                            <span className="mr-4 text-preset-8-bold ">
                              {String(index).padStart(2, '0')}
                            </span>
                            {item.name}
                            {isActive && (
                              <span className="ml-4 inline-block w-1 h-4 rounded-full bg-white" />
                            )}
                          </Link>
                        );
                      })()}
                    </motion.li>
                  ))}
                </ul>
              </nav>

              {/* Footer */}
              <div className="mt-auto pt-8 border-t border-white/20">
                <p className="text-white/60 text-preset-8">
                  Space Tourism © 2024
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
