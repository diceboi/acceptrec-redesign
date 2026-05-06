"use client";

import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { useTheme } from "next-themes";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { usePathname } from "next/navigation";
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
  IconMenu2,
  IconX,
  IconChevronDown,
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
            href: "/industrial-staffing",
          },
          {
            icon: IconTruck,
            label: "Driving Recruitment",
            desc: "HGV & van drivers",
            href: "/driving-recruitment",
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
            href: "/industries",
          },
          {
            icon: IconTruckDelivery,
            label: "Logistics & Warehousing",
            desc: "Supply chain & fulfilment",
            href: "/industries/logistics",
          },
          {
            icon: IconBuildingFactory,
            label: "Manufacturing",
            desc: "Production & assembly",
            href: "/industries/manufacturing",
          },
          {
            icon: IconShoppingCart,
            label: "E-commerce & Fulfilment",
            desc: "Fast-moving retail ops",
            href: "/industries/ecommerce",
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
            href: "/industries/food-production",
          },
          {
            icon: IconBook2,
            label: "Case Studies",
            desc: "Real results, real clients",
            href: "/case-studies",
          },
          {
            icon: IconChartBar,
            label: "ROI Calculator",
            desc: "See your cost savings",
            href: "/roi-calculator",
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
      href: "/technology",
    },
    sections: [
      {
        heading: "Client Tools",
        items: [
          { label: "AcceptPulse", href: "/technology/acceptpulse" },
          { label: "Client Portal", href: "/technology/client-portal" },
          { label: "Rate Calculator", href: "/technology/rate-calculator" },
          { label: "Quote Builder", href: "/technology/quote-builder" },
          { label: "Daily Hours", href: "/technology/daily-hours" },
          { label: "Client Feedback", href: "/technology/client-feedback" },
        ],
      },
      {
        heading: "How We Operate",
        items: [
          { label: "AcceptConnect", href: "/technology/acceptconnect" },
          { label: "AcceptMatch", href: "/technology/smart-matching" },
          { label: "AcceptMentor", href: "/technology/acceptmentor" },
          { label: "AcceptRate", href: "/technology/worker-ratings" },
          { label: "AcceptRewards", href: "/technology/acceptrewards" },
        ],
      },
    ],
    footer: {
      label: "Innovation Partners",
      badge: "New",
      desc: "Get early access to new features",
      href: "/innovation-partners",
    },
  },

  employers: {
    id: "employers",
    title: "Employers",
    width: "w-[320px]",
    featured: {
      title: "Why Accept",
      desc: "Better temps, not just more temps",
      href: "/employers",
    },
    sections: [
      {
        heading: "Solutions",
        items: [
          {
            label: "AcceptRewards",
            desc: "Why our workers perform better",
            href: "/employers/rewards",
          },
          { label: "On-Site Management", href: "/on-site-managed-services" },
          { label: "Case Studies", href: "/case-studies" },
          { label: "Client Tools", href: "/clients/intelligence" },
        ],
      },
    ],
    footer: {
      label: "Get Started →",
      desc: "Ready to transform your workforce?",
      href: "/get-started",
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
            label: "About Us",
            desc: "Our story and mission",
            href: "/about",
          },
          {
            icon: IconCircleCheck,
            label: "Why Accept",
            desc: "What makes us different",
            href: "/why-accept",
          },
          {
            icon: IconUsers,
            label: "Our Team",
            desc: "The people behind the brand",
            href: "/team",
          },
          {
            icon: IconPencil,
            label: "Blog",
            desc: "Insights & industry news",
            href: "/blog",
          },
        ],
      },
      {
        heading: "Locations",
        items: [
          {
            icon: IconMapPin,
            label: "Leicester",
            desc: "0116 218 2133",
            href: "/offices/leicester",
          },
          {
            icon: IconMapPin,
            label: "Coventry",
            desc: "024 7718 0356",
            href: "/offices/coventry",
          },
          {
            icon: IconMapPin,
            label: "Tamworth",
            desc: "01827 438 334",
            href: "/offices/tamworth",
          },
          {
            icon: IconMail,
            label: "Contact Us",
            desc: "Get in touch",
            href: "/contact",
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
            href: "/jobs",
          },
          {
            icon: IconClipboard,
            label: "Register Now",
            desc: "Join the Accept talent pool",
            href: "/registration",
          },
          {
            icon: IconTruck,
            label: "Driver Jobs",
            desc: "HGV, LGV & van driving",
            href: "/drivers",
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
            href: "/candidates",
          },
          {
            icon: IconStar,
            label: "Success Stories",
            desc: "Real candidate experiences",
            href: "/success-stories",
          },
          {
            icon: IconHelp,
            label: "FAQ",
            desc: "Common questions answered",
            href: "/faq",
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
const BANNER_HEIGHT = 0;

// ─── Main Navbar component ────────────────────────────────────────────
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [navTop, setNavTop] = useState(0);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [prevDropdown, setPrevDropdown] = useState(null);
  const [navRect, setNavRect] = useState({ left: 0, width: 600 });
  const timeoutRef = useRef(null);
  const navRef = useRef(null);
  const contentRef = useRef(null);
  const [panelSize, setPanelSize] = useState({ width: "auto", height: "auto" });
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // isLight is false until mounted (avoids SSR mismatch)
  const isLight = mounted && resolvedTheme === "light";

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const scrollY = window.scrollY;

    const frame = requestAnimationFrame(() => {
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.width = "100%";
    });

    return () => {
      cancelAnimationFrame(frame);

      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";

      window.scrollTo(0, scrollY);
    };
  }, [isMobileMenuOpen]);

  // Observe the inner content to get its natural size
  useEffect(() => {
    if (!contentRef.current) return;

    const observer = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      setPanelSize({ width, height });
    });

    observer.observe(contentRef.current);

    return () => observer.disconnect();
  }, [activeDropdown]);

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
      setNavTop(0);
      setScrolled(true);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isSolid = true;

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
      style={{
        top: 0,
        transform: "translateZ(0)",
        WebkitTransform: "translateZ(0)",
      }}
      className={`fixed z-[100] flex w-full items-center justify-between transition-all duration-300 px-4 xl:px-8
  bg-[#0d1522]/95 xl:backdrop-blur-md shadow-lg shadow-black/20 h-16 pointer-events-auto`}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`w-full flex justify-between items-center h-16 border-b-0`}
      >
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <Image
              src={
                isLight
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
              <button
                className={`flex items-center gap-1 rounded-lg px-3 py-1.5 text-[14px] font-semibold transition-colors duration-150 cursor-pointer
                  ${
                    activeDropdown === menu.id
                      ? "text-teal-4 bg-white/8"
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
              </button>
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
                  className={`rounded-b-2xl border-t bg-[#0F1320] border-white/10 shadow-2xl shadow-black/50`}
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
                          {activeDropdown === "technology" ||
                          activeDropdown === "employers" ? (
                            <TechnologyPanel
                              menu={menuData[activeDropdown]}
                              isSolid={false}
                            />
                          ) : (
                            <StandardColumns
                              menu={menuData[activeDropdown]}
                              isSolid={false}
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
          <Button variant="secondary" size="md" href="/jobs">
            Find Work
          </Button>
          <Button variant="primary" size="md" href="/get-started">
            Get Started
          </Button>
        </div>

        {/* Mobile hamburger */}
        <div className="flex items-center xl:hidden gap-3">
          <ThemeToggle />
          <button
            type="button"
            onTouchStart={() => {}}
            onClick={() => setIsMobileMenuOpen(true)}
            className="relative z-[60] p-2 min-w-[44px] min-h-[44px] flex items-center justify-center transition-colors focus:outline-none text-white hover:bg-white/10 rounded-lg cursor-pointer"
            style={{ touchAction: "manipulation" }}
            aria-label="Open menu"
          >
            <IconMenu2 size={28} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mounted &&
        createPortal(
          <div
            className={`xl:hidden fixed inset-0 z-[99999] ${
              isMobileMenuOpen ? "pointer-events-auto" : "pointer-events-none"
            }`}
            aria-hidden={!isMobileMenuOpen}
          >
            {/* Backdrop */}
            <motion.div
              initial={false}
              animate={{ opacity: isMobileMenuOpen ? 1 : 0 }}
              transition={{ duration: 0.18 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/80 will-change-opacity"
            />

            {/* Drawer */}
            <motion.div
              initial={false}
              animate={{ x: isMobileMenuOpen ? 0 : "100%" }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="fixed right-0 top-0 bottom-0 w-[85%] max-w-[400px] bg-white dark:bg-navy-900 border-l border-black/5 dark:border-white/10 flex flex-col shadow-2xl overflow-hidden transition-colors duration-300"
            >
              {/* Header */}
              <div className="h-16 flex items-center justify-between px-6 border-b border-black/5 dark:border-white/10 shrink-0">
                <span className="text-teal-6 dark:text-teal-5 font-bold tracking-tight">
                  Menu
                </span>

                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 -mr-2 text-gray-400 dark:text-white/70 hover:text-navy-900 dark:hover:text-white transition-colors cursor-pointer"
                  aria-label="Close menu"
                >
                  <IconX size={24} />
                </button>
              </div>

              {/* Content */}
              <div className="flex-grow overflow-y-auto py-6 px-6 space-y-8 scrollbar-hide">
                {Object.values(menuData).map((menu) => (
                  <div key={menu.id} className="space-y-4">
                    <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-teal-5/60 px-2">
                      {menu.title}
                    </h4>

                    <div className="grid grid-cols-1 gap-1">
                      {menu.sections.map((section) => (
                        <div key={section.heading} className="space-y-1">
                          {section.items.map((item) => {
                            const Icon = item.icon;

                            return (
                              <Link
                                key={item.label}
                                href={item.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="flex items-center gap-4 px-3 py-3 rounded-xl hover:bg-gray-100 dark:hover:bg-white/5 active:bg-gray-200 dark:active:bg-white/10 transition-colors group"
                              >
                                {Icon && (
                                  <span className="shrink-0 flex h-9 w-9 items-center justify-center rounded-lg bg-gray-100 dark:bg-white/5 text-teal-6 dark:text-teal-4 group-hover:bg-teal-5 group-hover:text-black transition-all">
                                    <Icon size={18} />
                                  </span>
                                )}

                                <div>
                                  <div className="text-[15px] font-semibold text-gray-900 dark:text-white group-hover:text-teal-6 dark:group-hover:text-teal-4 transition-colors">
                                    {item.label}
                                  </div>

                                  {item.desc && (
                                    <div className="text-[11px] text-gray-500 dark:text-white/40 font-medium line-clamp-1">
                                      {item.desc}
                                    </div>
                                  )}
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="p-6 border-t border-black/5 dark:border-white/10 bg-white dark:bg-black/40 space-y-3 shrink-0 transition-colors">
                <Button
                  variant="secondary"
                  size="lg"
                  href="/jobs"
                  className="w-full justify-center py-4 rounded-xl"
                >
                  Find Work
                </Button>

                <Button
                  variant="primary"
                  size="lg"
                  href="/get-started"
                  className="w-full justify-center py-4 rounded-xl"
                >
                  Get Started
                </Button>
              </div>
            </motion.div>
          </div>,
          document.body,
        )}
    </header>
  );
}
