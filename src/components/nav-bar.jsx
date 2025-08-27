"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

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
        type: "tween",
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    open: {
      x: 0,
      transition: {
        type: "tween",
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const overlayVariants = {
    closed: {
      opacity: 0,
      transition: {
        duration: 0.2
      }
    },
    open: {
      opacity: 1,
      transition: {
        duration: 0.2
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
      {/* Top bar with logo and hamburger */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <div className="mx-5 my-5 flex items-center justify-between border border-white/20 rounded-lg bg-white/5 backdrop-blur-md px-4 py-3">
          {/* Logo */}
          <a href="/" aria-label="Home" className="shrink-0">
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
              <rect y="0.5" width="24" height="3" fill="#D0D6F9"/>
              <rect y="9.5" width="24" height="3" fill="#D0D6F9"/>
              <rect y="18.5" width="24" height="3" fill="#D0D6F9"/>
            </svg>
          </button>
        </div>
      </div>

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
            <div className="flex flex-col h-full p-8">
              {/* Close button */}
              <div className="flex justify-end mb-8">
                <button
                  onClick={closeMenu}
                  className="text-white hover:text-gray-300 transition-colors"
                  aria-label="Close navigation menu"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                      <a
                        href={item.href}
                        onClick={closeMenu}
                        className="text-white text-xl font-light hover:text-gray-300 transition-colors flex items-center group"
                      >
                        <span className="mr-4 text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        {item.name}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              {/* Footer */}
              <div className="mt-auto pt-8 border-t border-white/20">
                <p className="text-white/60 text-sm">
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
