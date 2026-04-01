"use client";

import { useState, useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import {
  IconRefresh,
  IconBriefcase,
  IconBuildingFactory2,
  IconPackage,
  IconTool,
  IconTruck,
  IconWorld,
  IconTruckDelivery,
  IconBuildingFactory,
  IconShoppingCart,
  IconToolsKitchen2,
  IconBook2,
  IconChartBar,
  IconCircleCheck,
  IconUsers,
  IconPencil,
  IconMapPin,
  IconMail,
  IconSearch,
  IconClipboard,
  IconBulb,
  IconStar,
  IconHelp,
} from "@tabler/icons-react";

// ─── Mega-menu data ──────────────────────────────────────────────────
// Each menu can have:
//   sections   – array of { heading, items: [{ icon, label, desc, href }] }
//   featured   – top header block { title, desc, href }
//   footer     – bottom CTA block { label, badge, desc, href }

const menuData = {
  services: {
    id: "services",
    title: "Services",
    width: "w-[560px]",
    sections: [
      {
        heading: "Staffing Solutions",
        items: [
          {
            icon: IconRefresh,
            label: "Temporary Staffing",
            desc: "Flexible workforce solutions",
            href: "/temporary-staffing",
          },
          {
            icon: IconBriefcase,
            label: "Permanent Recruitment",
            desc: "Find your next hire",
            href: "/permanent-recruitment",
          },
          {
            icon: IconBuildingFactory2,
            label: "On-Site Management",
            desc: "Embedded recruitment teams",
            href: "/on-site-managed-services",
          },
        ],
      },
      {
        heading: "By Sector",
        items: [
          {
            icon: IconPackage,
            label: "Warehouse Staffing",
            desc: "Pick, pack & dispatch teams",
            href: "/warehouse-staffing",
          },
          {
            icon: IconTool,
            label: "Industrial Staffing",
            desc: "Production line workers",
            href: "#",
          },
          {
            icon: IconTruck,
            label: "Driving Recruitment",
            desc: "HGV & van drivers",
            href: "#",
          },
        ],
      },
    ],
  },

  industries: {
    id: "industries",
    title: "Industries",
    width: "w-[480px]",
    sections: [
      {
        heading: "Sectors We Cover",
        items: [
          {
            icon: IconWorld,
            label: "All Industries",
            desc: "See our full coverage",
            href: "#",
          },
          {
            icon: IconTruckDelivery,
            label: "Logistics & Warehousing",
            desc: "Supply chain & fulfilment",
            href: "#",
          },
          {
            icon: IconBuildingFactory,
            label: "Manufacturing",
            desc: "Production & assembly",
            href: "#",
          },
          {
            icon: IconShoppingCart,
            label: "E-commerce & Fulfilment",
            desc: "Fast-moving retail ops",
            href: "#",
          },
        ],
      },
      {
        heading: "Resources",
        items: [
          {
            icon: IconToolsKitchen2,
            label: "Food Production",
            desc: "Hygiene-compliant staffing",
            href: "#",
          },
          {
            icon: IconBook2,
            label: "Case Studies",
            desc: "Real results, real clients",
            href: "#",
          },
          {
            icon: IconChartBar,
            label: "ROI Calculator",
            desc: "See your cost savings",
            href: "#",
          },
        ],
      },
    ],
  },

  technology: {
    id: "technology",
    title: "Technology",
    width: "w-[540px]",
    featured: {
      title: "How We Work Different",
      desc: "Technology that transforms temporary staffing →",
      href: "#",
    },
    sections: [
      {
        heading: "Client Tools",
        items: [
          { label: "AcceptPulse", href: "#" },
          { label: "Client Portal", href: "#" },
          { label: "Rate Calculator", href: "#" },
          { label: "Quote Builder", href: "#" },
          { label: "Daily Hours", href: "#" },
          { label: "Client Feedback", href: "#" },
        ],
      },
      {
        heading: "How We Operate",
        items: [
          { label: "AcceptConnect", href: "#" },
          { label: "AcceptMatch", href: "#" },
          { label: "Performance Coach", href: "#" },
          { label: "AcceptRate", href: "#" },
        ],
      },
    ],
    footer: {
      label: "Innovation Partners",
      badge: "New",
      desc: "Get early access to new features",
      href: "#",
    },
  },

  about: {
    id: "about",
    title: "About",
    width: "w-[480px]",
    sections: [
      {
        heading: "Company",
        items: [
          {
            icon: IconBook2,
            label: "Our Story",
            desc: "How Accept started",
            href: "#",
          },
          {
            icon: IconCircleCheck,
            label: "Why Accept",
            desc: "What makes us different",
            href: "#",
          },
          {
            icon: IconUsers,
            label: "Our Team",
            desc: "The people behind the brand",
            href: "#",
          },
          {
            icon: IconPencil,
            label: "Blog",
            desc: "Insights & industry news",
            href: "#",
          },
        ],
      },
      {
        heading: "Locations",
        items: [
          {
            icon: IconMapPin,
            label: "Leicester",
            desc: "0116 319 4493",
            href: "#",
          },
          {
            icon: IconMapPin,
            label: "Coventry",
            desc: "024 7610 0211",
            href: "#",
          },
          {
            icon: IconMapPin,
            label: "Tamworth",
            desc: "01827 700 300",
            href: "#",
          },
          {
            icon: IconMail,
            label: "Contact Us",
            desc: "Get in touch",
            href: "#",
          },
        ],
      },
    ],
  },

  candidates: {
    id: "candidates",
    title: "Candidates",
    width: "w-[480px]",
    sections: [
      {
        heading: "Find Work",
        items: [
          {
            icon: IconSearch,
            label: "Find Jobs",
            desc: "Browse open roles",
            href: "#",
          },
          {
            icon: IconClipboard,
            label: "Register Now",
            desc: "Join the Accept talent pool",
            href: "#",
          },
          {
            icon: IconTruck,
            label: "Driver Jobs",
            desc: "HGV, LGV & van driving",
            href: "#",
          },
        ],
      },
      {
        heading: "Support",
        items: [
          {
            icon: IconBulb,
            label: "Why Work With Us",
            desc: "Benefits of being with Accept",
            href: "#",
          },
          {
            icon: IconStar,
            label: "Success Stories",
            desc: "Real candidate experiences",
            href: "#",
          },
          {
            icon: IconHelp,
            label: "FAQ",
            desc: "Common questions answered",
            href: "#",
          },
        ],
      },
    ],
  },
};

// ─── Dropdown content renderers ───────────────────────────────────────

function StandardColumns({ menu, isSolid }) {
  const dark = !isSolid;
  return (
    <div className="p-5">
      <div
        className={`grid gap-x-8 gap-y-1`}
        style={{ gridTemplateColumns: `repeat(${menu.sections.length}, 1fr)` }}
      >
        {menu.sections.map((section) => (
          <div key={section.heading}>
            <p
              className={`mb-3 text-[11px] font-bold uppercase tracking-widest ${dark ? "text-teal-5" : "text-teal-6"}`}
            >
              {section.heading}
            </p>
            <div className="flex flex-col gap-0.5">
              {section.items.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`group flex items-start gap-3 rounded-lg px-2 py-2 transition-colors duration-150
                    ${dark ? "hover:bg-white/6" : "hover:bg-gray-50"}`}
                >
                  {item.icon &&
                    (() => {
                      const Icon = item.icon;
                      return (
                        <span
                          className={`mt-0.5 shrink-0 flex h-7 w-7 items-center justify-center rounded-md
                        ${dark ? "bg-white/8 text-teal-4" : "bg-gray-100 text-teal-6"}`}
                        >
                          <Icon size={16} strokeWidth={1.6} />
                        </span>
                      );
                    })()}
                  <span className="flex flex-col">
                    <span
                      className={`text-sm font-semibold leading-snug ${dark ? "text-white group-hover:text-teal-4" : "text-gray-900 group-hover:text-teal-6"}`}
                    >
                      {item.label}
                    </span>
                    {item.desc && (
                      <span
                        className={`mt-0.5 text-xs ${dark ? "text-white/45" : "text-gray-500"}`}
                      >
                        {item.desc}
                      </span>
                    )}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function TechnologyPanel({ menu, isSolid }) {
  const dark = !isSolid;
  return (
    <div>
      {/* Featured header */}
      {menu.featured && (
        <Link
          href={menu.featured.href}
          className={`block px-6 pt-5 pb-4 border-b ${dark ? "border-white/10 hover:bg-white/4" : "border-gray-100 hover:bg-gray-50"} transition-colors`}
        >
          <p
            className={`text-sm font-bold ${dark ? "text-white" : "text-gray-900"}`}
          >
            {menu.featured.title}
          </p>
          <p
            className={`mt-0.5 text-xs ${dark ? "text-white/50" : "text-gray-500"}`}
          >
            {menu.featured.desc}
          </p>
        </Link>
      )}
      {/* Two columns, plain links */}
      <div className="grid grid-cols-2 gap-x-6 px-6 py-4">
        {menu.sections.map((section) => (
          <div key={section.heading}>
            <p
              className={`mb-3 text-[10px] font-bold uppercase tracking-widest ${dark ? "text-teal-5" : "text-teal-6"}`}
            >
              {section.heading}
            </p>
            <div className="flex flex-col gap-0.5">
              {section.items.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`rounded-md px-1 py-1.5 text-sm transition-colors
                    ${dark ? "text-white/75 hover:text-white hover:bg-white/6" : "text-gray-700 hover:text-gray-900 hover:bg-gray-50"}`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
      {/* Footer CTA */}
      {menu.footer && (
        <Link
          href={menu.footer.href}
          className={`block border-t px-6 py-4 transition-colors
            ${dark ? "border-white/10 bg-teal-5/8 hover:bg-teal-5/14" : "border-gray-100 bg-teal-1/60 hover:bg-teal-1"}`}
        >
          <div className="flex items-center gap-2">
            <span
              className={`text-sm font-bold ${dark ? "text-white" : "text-gray-900"}`}
            >
              {menu.footer.label}
            </span>
            <span className="rounded-full bg-teal-5 px-2 py-0.5 text-[10px] font-bold text-white uppercase">
              {menu.footer.badge}
            </span>
          </div>
          <p
            className={`mt-0.5 text-xs ${dark ? "text-white/45" : "text-gray-500"}`}
          >
            {menu.footer.desc}
          </p>
        </Link>
      )}
    </div>
  );
}

// ─── Navbar banner height ─────────────────────────────────────────────
const BANNER_HEIGHT = 40;

// ─── Main Navbar component ────────────────────────────────────────────
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [navTop, setNavTop] = useState(BANNER_HEIGHT);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [prevDropdown, setPrevDropdown] = useState(null);
  const [navRect, setNavRect] = useState({ left: 0, width: 600 });
  const timeoutRef = useRef(null);
  const navRef = useRef(null);
  const contentRef = useRef(null);
  const [panelSize, setPanelSize] = useState({ width: "auto", height: "auto" });
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  // isLight is false until mounted (avoids SSR mismatch)
  const isLight = mounted && resolvedTheme === "light";

  useEffect(() => setMounted(true), []);

  // Observe the inner content to get its natural size
  useEffect(() => {
    if (!contentRef.current) return;
    const observer = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      setPanelSize({ width, height });
    });
    observer.observe(contentRef.current);
    return () => observer.disconnect();
  });

  // Measure nav element bounds so the dropdown can match its width/position
  useEffect(() => {
    const measure = () => {
      if (navRef.current) {
        const rect = navRef.current.getBoundingClientRect();
        setNavRect({ left: rect.left, width: rect.width });
      }
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY;
      setNavTop(Math.max(0, BANNER_HEIGHT - scroll));
      setScrolled(scroll > BANNER_HEIGHT);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    }, 180);
  };

  const handleDropdownEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  const keys = Object.keys(menuData);
  const getDirection = () => {
    if (!prevDropdown || !activeDropdown) return 0;
    return keys.indexOf(activeDropdown) > keys.indexOf(prevDropdown) ? 1 : -1;
  };
  const direction = getDirection();

  const slideVariants = {
    enter: (dir) => ({ x: dir > 0 ? 60 : -60, opacity: 0 }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "spring", stiffness: 320, damping: 32 },
        opacity: { duration: 0.18 },
      },
    },
    exit: (dir) => ({
      x: dir > 0 ? -60 : 60,
      opacity: 0,
      transition: {
        x: { type: "spring", stiffness: 320, damping: 32 },
        opacity: { duration: 0.15 },
      },
    }),
  };

  // Dropdown panel colours
  const panelBg = isSolid
    ? "bg-white border border-gray-100"
    : "bg-[#0F1320] border border-white/10";
  const shadowCls = isSolid
    ? "shadow-xl shadow-black/10"
    : "shadow-2xl shadow-black/40";

  return (
    <header
      style={{ top: navTop }}
      className={`fixed z-50 flex w-full items-center justify-between transition-[background,box-shadow,height] duration-300 px-4 xl:px-8
                ${isSolid ? "bg-white shadow-sm h-16" : "bg-transparent h-25"}`}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`w-full flex justify-between items-center h-25 ${isSolid ? "border-b-0" : "border-b border-white/20"}`}
      >
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <Image
              src={
                isLight || isSolid
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

        {/* Desktop Nav */}
        <nav
          ref={navRef}
          className="hidden xl:flex absolute left-1/2 -translate-x-1/2 items-center gap-1 h-full"
        >
          {Object.values(menuData).map((menu) => (
            <div
              key={menu.id}
              className="h-full flex items-center px-1"
              onMouseEnter={() => handleMouseEnter(menu.id)}
            >
              <Link
                href="#"
                className={`flex items-center gap-1 rounded-lg px-3 py-1.5 text-[14px] font-semibold transition-colors duration-150
                  ${
                    activeDropdown === menu.id
                      ? isSolid
                        ? "text-teal-6 bg-gray-50"
                        : "text-teal-4 bg-white/8"
                      : isSolid
                        ? "text-gray-800 hover:text-gray-900 hover:bg-gray-50"
                        : "text-white/90 hover:text-white hover:bg-white/8"
                  }`}
              >
                {menu.title}
                <svg
                  className={`h-3.5 w-3.5 transition-transform duration-200 ${activeDropdown === menu.id ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </Link>
            </div>
          ))}
        </nav>

        {/* Mega-Menu Panel – content-width, centered under nav */}
        <AnimatePresence>
          {activeDropdown && menuData[activeDropdown] && (
            <div
              className="absolute left-0 right-0 top-full flex justify-center pointer-events-none"
              onMouseEnter={handleDropdownEnter}
            >
              {/* Outer: animates opacity+y on mount/unmount */}
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 6, transition: { duration: 0.15 } }}
                transition={{ duration: 0.18 }}
                className="pointer-events-auto"
              >
                {/* Size clipper: animates width+height to match content */}
                <motion.div
                  animate={{
                    width:
                      panelSize.width !== "auto" ? panelSize.width : undefined,
                    height:
                      panelSize.height !== "auto"
                        ? panelSize.height
                        : undefined,
                  }}
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  style={{ overflow: "hidden" }}
                  className={`rounded-b-2xl border-t ${
                    isSolid
                      ? "bg-white border-gray-100 shadow-xl shadow-black/10"
                      : "bg-[#0F1320] border-white/10 shadow-2xl shadow-black/50"
                  }`}
                >
                  {/* Inner: natural size, measured by ResizeObserver */}
                  <div ref={contentRef} style={{ width: "max-content" }}>
                    <div className="p-5">
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
                        >
                          {menuData[activeDropdown].id === "technology" ? (
                            <TechnologyPanel
                              menu={menuData[activeDropdown]}
                              isSolid={isSolid}
                            />
                          ) : (
                            <StandardColumns
                              menu={menuData[activeDropdown]}
                              isSolid={isSolid}
                            />
                          )}
                        </motion.div>
                      </AnimatePresence>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* Action Buttons */}
        <div className="hidden xl:flex items-center gap-3">
          <ThemeToggle />
          <Button
            variant="secondary"
            size="md"
            className={
              isSolid
                ? "border-gray-300 bg-transparent text-gray-800 hover:bg-gray-100"
                : ""
            }
          >
            Find Work
          </Button>
          <Button
            variant="primary"
            size="md"
            className={isSolid ? "shadow-none" : ""}
          >
            Get Started
          </Button>
        </div>

        {/* Mobile hamburger */}
        <div className="flex items-center xl:hidden">
          <button
            className={`p-2 transition-colors focus:outline-none ${isSolid ? "text-gray-900" : "text-white"}`}
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
