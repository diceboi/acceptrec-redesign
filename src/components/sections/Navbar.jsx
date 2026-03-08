"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";

// Dummy data for dropdowns
const dropdownData = {
  jobSeekers: {
    id: "jobSeekers",
    title: "For Job Seekers",
    items: [
      { label: "Get work today", href: "#" },
      { label: "Download app", href: "#" },
      { label: "Support", href: "#" },
    ],
  },
  companies: {
    id: "companies",
    title: "For Companies",
    items: [
      { label: "Find reliable workers", href: "#" },
      { label: "AcceptRec Business", href: "#" },
      { label: "Our locations", href: "#" },
      { label: "Customer stories", href: "#" },
    ],
  },
  about: {
    id: "about",
    title: "About Us",
    items: [
      { label: "Our Mission", href: "#" },
      { label: "Leadership", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Newsroom", href: "#" },
    ],
  },
};

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [prevDropdown, setPrevDropdown] = useState(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    // Call unconditionally on mount to sync state
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Only solid when scrolled, hover doesn't trigger white background
  const isSolid = scrolled;

  const handleMouseEnter = (menuId) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setPrevDropdown(activeDropdown);
    setActiveDropdown(menuId);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
      setPrevDropdown(null);
    }, 200); // slight delay to prevent flickering when moving between items
  };

  const handleDropdownEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  // Determine slide direction
  // If we have a previous state, we compare index order. For simplicity, we just use a fixed direction pattern
  // or we can detect left/right based on array indexes if we had an array of keys.
  const keys = Object.keys(dropdownData);

  const getDirection = () => {
    if (!prevDropdown || !activeDropdown) return 0;
    const prevIdx = keys.indexOf(prevDropdown);
    const currIdx = keys.indexOf(activeDropdown);
    return currIdx > prevIdx ? 1 : -1;
  };

  const direction = getDirection();

  // Slide variants for the content INSIDE the dropdown panel
  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      },
    },
    exit: (dir) => ({
      x: dir > 0 ? -100 : 100, // moves out opposite to the entry side
      opacity: 0,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      },
    }),
  };

  return (
    <header
      className={`fixed top-0 z-50 flex w-full items-center justify-between transition-all duration-300 px-4 md:px-8
                ${isSolid ? "bg-white shadow-sm backdrop-filter-inverse(100%) backdrop-blur-sm h-16" : "bg-transparent h-25"}`}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`w-full flex justify-between items-center h-25 ${isSolid ? "border-b-0" : "border-b border-[#ffffff40]"}`}
      >
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <Image
              src={
                isSolid
                  ? "/Accept-Stacked-Logo-with-Strapline-RGB300.webp"
                  : "/acceptrec-white-logo.webp"
              }
              alt="AcceptRec Logo"
              width={200}
              height={60}
              className="h-10 w-auto object-contain md:h-12"
              priority
            />
          </Link>
        </div>

        {/* Desktop Navigation Links (Centered relative to the header) */}
        <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-8 h-full">
          {Object.values(dropdownData).map((menu) => (
            <div
              key={menu.id}
              className="h-full flex items-center"
              onMouseEnter={() => handleMouseEnter(menu.id)}
            >
              <Link
                href="#"
                className={`font-sans text-[15px] font-semibold transition-colors
                            ${
                              activeDropdown === menu.id
                                ? "text-green-6"
                                : isSolid
                                  ? "text-gray-900 hover:text-green-6"
                                  : "text-white hover:text-gray-200"
                            }`}
              >
                {menu.title}
              </Link>
            </div>
          ))}

          {/* Contact (No Dropdown) */}
          <div
            className="h-full flex items-center"
            onMouseEnter={() => {
              if (timeoutRef.current) clearTimeout(timeoutRef.current);
              setActiveDropdown(null);
            }}
          >
            <Link
              href="#"
              className={`font-sans text-[15px] font-semibold transition-colors
                        ${isSolid ? "text-gray-900 hover:text-green-6" : "text-white hover:text-gray-200"}`}
            >
              Contact
            </Link>
          </div>

          {/* Shared Animated Dropdown Panel */}
          <AnimatePresence>
            {activeDropdown && dropdownData[activeDropdown] && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{
                  opacity: 0,
                  y: 10,
                  transition: { duration: 0.2, delay: 0.1 },
                }}
                transition={{ duration: 0.2 }}
                className={`absolute left-1/2 top-full -translate-x-1/2 ${isSolid ? "pt-4" : "pt-0"}`}
                onMouseEnter={handleDropdownEnter}
              >
                <motion.div
                  className="relative w-100 overflow-hidden rounded-xl bg-white p-6 shadow-xl border border-gray-100"
                  animate={{ height: "auto" }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  <AnimatePresence
                    custom={direction}
                    mode="popLayout"
                    initial={false}
                  >
                    <motion.div
                      key={activeDropdown}
                      custom={direction}
                      variants={slideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      className="w-full h-full"
                    >
                      <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-gray-400">
                        {dropdownData[activeDropdown].title} Overview
                      </h3>
                      <div className="flex flex-col gap-3">
                        {dropdownData[activeDropdown].items.map((item, idx) => (
                          <Link
                            key={idx}
                            href={item.href}
                            className="group flex items-center justify-between rounded-lg p-2 transition-colors hover:bg-gray-50"
                          >
                            <span className="font-medium text-gray-900 group-hover:text-green-6">
                              {item.label}
                            </span>
                            <span className="text-gray-300 transition-transform group-hover:translate-x-1 group-hover:text-green-5">
                              →
                            </span>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Button
            variant="ghost"
            colorScheme="black"
            size="md"
            className={!isSolid ? "text-white hover:bg-white/10" : ""}
          >
            Log in
          </Button>
          <Button
            colorScheme="black"
            size="md"
            className={!isSolid ? "bg-white text-black hover:bg-white/90" : ""}
          >
            Sign up
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <button
            className={`p-2 transition-colors focus:outline-none hover:text-green-5
                    ${isSolid ? "text-gray-900" : "text-white"}`}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
