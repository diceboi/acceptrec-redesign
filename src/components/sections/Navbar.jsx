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
  IconShieldCheck,
} from "@tabler/icons-react";

// ─── Mega-menu data (Agreed Navigation Structure v2.1) ─────────────────
// 6 Top Level Options:
// 1. Recruitment Services
// 2. Industries
// 3. Workforce Intelligence
// 4. Technology
// 5. About Accept
// 6. Candidates

const menuData = {
  services: {
    id: "services",
    title: "Recruitment Services",
    width: "w-[620px]",
    sections: [
      {
        heading: "Staffing Services",
        items: [
          {
            icon: IconRefresh,
            label: "Temporary Staffing",
            desc: "Flexible volume workforce solutions",
            href: "/temporary-staffing",
          },
          {
            icon: IconBriefcase,
            label: "Permanent Recruitment",
            desc: "Direct hire search & placement",
            href: "/permanent-recruitment",
          },
          {
            icon: IconBuildingFactory2,
            label: "On-Site Management",
            desc: "Dedicated embedded recruitment teams",
            href: "/on-site-managed-services",
          },
          {
            icon: IconPackage,
            label: "Warehouse Staffing",
            desc: "Pick, pack, sort & dispatch teams",
            href: "/warehouse-staffing",
          },
          {
            icon: IconTool,
            label: "Industrial Staffing",
            desc: "Production line & assembly operatives",
            href: "/industrial-staffing",
          },
          {
            icon: IconTruck,
            label: "Driving Recruitment",
            desc: "HGV 1, 2 & commercial drivers",
            href: "/driving-recruitment",
          },
          {
            icon: IconUsers,
            label: "High Volume & Peak Staffing",
            desc: "Scalable peak labour with guaranteed fill rates",
            href: "/recruitment/high-volume",
          },
        ],
      },
      {
        heading: "Working With Accept",
        items: [
          {
            icon: IconCircleCheck,
            label: "Employer Overview",
            desc: "Why Midlands employers choose us",
            href: "/employers",
          },
          {
            icon: IconRefresh,
            label: "Changing Recruitment Supplier",
            desc: "Zero-downtime agency transfer protocol",
            href: "/employers/changing-recruitment-supplier",
          },
          {
            icon: IconShieldCheck,
            label: "Compliance",
            desc: "GLAA licensed, right-to-work verified",
            href: "/compliance",
          },
          {
            icon: IconHelp,
            label: "Employer FAQs",
            desc: "Transparent rates, charge formulas & SLA",
            href: "/employers/faq",
          },
          {
            icon: IconBook2,
            label: "Case Studies",
            desc: "InPost, Vistry, Poundstretcher results",
            href: "/case-studies",
          },
        ],
      },
    ],
  },

  industries: {
    id: "industries",
    title: "Industries",
    width: "w-[580px]",
    sections: [
      {
        heading: "Our Sectors",
        items: [
          {
            icon: IconTruckDelivery,
            label: "Logistics & Warehousing",
            desc: "Distribution hubs, 3PL & pick-and-pack",
            href: "/industries/logistics",
          },
          {
            icon: IconBuildingFactory,
            label: "Manufacturing",
            desc: "Automotive, engineering & production",
            href: "/industries/manufacturing",
          },
          {
            icon: IconShoppingCart,
            label: "E-commerce & Fulfilment",
            desc: "High-speed retail dispatch & returns",
            href: "/industries/ecommerce",
          },
          {
            icon: IconToolsKitchen2,
            label: "Food Production",
            desc: "GLAA compliant, hygiene-trained teams",
            href: "/industries/food-production",
          },
          {
            icon: IconTool,
            label: "Engineering & Technical",
            desc: "CNC machinists, technicians & engineers",
            href: "/industries/technical",
          },
        ],
      },
      {
        heading: "Related Information",
        items: [
          {
            icon: IconWorld,
            label: "All Industries",
            desc: "Comprehensive sector coverage overview",
            href: "/industries",
          },
          {
            icon: IconBook2,
            label: "Case Studies",
            desc: "Real operational results with clients",
            href: "/case-studies",
          },
          {
            icon: IconUsers,
            label: "High Volume & Peak Staffing",
            desc: "Midlands-wide seasonal surge staffing",
            href: "/recruitment/high-volume",
          },
          {
            icon: IconChartBar,
            label: "Workforce Cost Calculator",
            desc: "WI² margin & true cost comparison",
            href: "/workforce-cost-calculator",
          },
        ],
      },
    ],
  },

  "workforce-intelligence": {
    id: "workforce-intelligence",
    title: "Workforce Intelligence",
    width: "w-[620px]",
    featured: {
      title: "Workforce Intelligence Overview",
      desc: "Data, technology and retention models that reduce total labour cost →",
      href: "/workforce-intelligence",
    },
    sections: [
      {
        heading: "Attendance and Retention",
        items: [
          {
            icon: IconCircleCheck,
            label: "Attendance & Reliability",
            desc: "Fixing early-drop & day-one dropouts",
            href: "/workforce-intelligence/temporary-worker-attendance",
          },
          {
            icon: IconUsers,
            label: "Worker Retention",
            desc: "5 operational measures to keep reliable temps",
            href: "/workforce-intelligence/temporary-worker-retention",
          },
          {
            icon: IconStar,
            label: "Worker Feedback",
            desc: "Post-placement scoring & supervisor reviews",
            href: "/workforce-intelligence/temporary-worker-feedback",
          },
        ],
      },
      {
        heading: "Analytics and Costs",
        items: [
          {
            icon: IconChartBar,
            label: "Workforce Analytics",
            desc: "Single source of truth across all sites & shifts",
            href: "/workforce-intelligence/workforce-analytics",
          },
          {
            icon: IconBulb,
            label: "Reducing Agency Labour Costs",
            desc: "Total labour cost vs headline agency margin",
            href: "/workforce-intelligence/reducing-agency-labour-costs",
          },
          {
            icon: IconChartBar,
            label: "Workforce Cost Calculator",
            desc: "Interactive attendance & margin savings model",
            href: "/workforce-cost-calculator",
          },
        ],
      },
    ],
  },

  technology: {
    id: "technology",
    title: "Technology",
    width: "w-[620px]",
    featured: {
      title: "Technology Overview",
      desc: "Client tools and how Accept operates →",
      href: "/technology",
    },
    sections: [
      {
        heading: "Client Tools",
        items: [
          {
            icon: IconWorld,
            label: "Client Tools Overview",
            desc: "Live visibility & reporting ecosystem",
            href: "/clients/intelligence",
          },
          {
            icon: IconSearch,
            label: "Client Portal",
            desc: "Real-time rota, timesheets & worker tracking",
            href: "/technology/client-portal",
          },
          {
            icon: IconChartBar,
            label: "Workforce Cost Calculator",
            desc: "Cost model & savings calculation",
            href: "/workforce-cost-calculator",
          },
          {
            icon: IconBulb,
            label: "Rate Calculator",
            desc: "Transparent statutory & charge rates",
            href: "/technology/rate-calculator",
          },
          {
            icon: IconClipboard,
            label: "Quote Builder",
            desc: "Instant bespoke workforce quotes",
            href: "/technology/quote-builder",
          },
          {
            icon: IconStar,
            label: "Client Feedback",
            desc: "Monthly ratings & service reviews",
            href: "/technology/client-feedback",
          },
        ],
      },
      {
        heading: "How We Operate",
        items: [
          {
            icon: IconCircleCheck,
            label: "AcceptPulse",
            desc: "Live site attendance tracking",
            href: "/technology/acceptpulse",
          },
          {
            icon: IconRefresh,
            label: "AcceptConnect",
            desc: "Automated worker communications",
            href: "/technology/acceptconnect",
          },
          {
            icon: IconUsers,
            label: "AcceptMentor",
            desc: "Structured day-one worker induction",
            href: "/technology/acceptmentor",
          },
          {
            icon: IconTool,
            label: "Worker-Site Matching",
            desc: "Skill & route matching algorithms",
            href: "/technology/smart-matching",
          },
          {
            icon: IconStar,
            label: "Worker Ratings",
            desc: "Objective shift performance reviews",
            href: "/technology/worker-ratings",
          },
        ],
      },
    ],
    footer: {
      label: "Innovation Partners",
      badge: "Supporting",
      desc: "Early access to new tools and client pilot programs",
      href: "/innovation-partners",
    },
  },

  about: {
    id: "about",
    title: "About Accept",
    width: "w-[560px]",
    sections: [
      {
        heading: "About the Company",
        items: [
          {
            icon: IconBook2,
            label: "About Us",
            desc: "Our story, standards and mission",
            href: "/about",
          },
          {
            icon: IconCircleCheck,
            label: "Why Accept",
            desc: "What makes our agency model different",
            href: "/why-accept",
          },
          {
            icon: IconUsers,
            label: "Our Team",
            desc: "Meet our directors and recruiters",
            href: "/team",
          },
          {
            icon: IconPencil,
            label: "Blog",
            desc: "Recruitment insights & market news",
            href: "/blog",
          },
          {
            icon: IconBriefcase,
            label: "Work for Us",
            desc: "Careers at Accept Recruitment",
            href: "/join-our-team",
          },
        ],
      },
      {
        heading: "Locations and Contact",
        items: [
          {
            icon: IconMapPin,
            label: "Where We Cover",
            desc: "Midlands branches & national coverage",
            href: "/where-we-cover",
          },
          {
            icon: IconMapPin,
            label: "Leicester",
            desc: "0116 218 2133 · Head office",
            href: "/offices/leicester",
          },
          {
            icon: IconMapPin,
            label: "Coventry",
            desc: "024 7718 0356 · Branch office",
            href: "/offices/coventry",
          },
          {
            icon: IconMapPin,
            label: "Tamworth",
            desc: "01827 438 334 · Branch office",
            href: "/offices/tamworth",
          },
          {
            icon: IconMail,
            label: "Contact Us",
            desc: "Get in touch with any branch",
            href: "/contact",
          },
        ],
      },
    ],
  },

  candidates: {
    id: "candidates",
    title: "Candidates",
    width: "w-[520px]",
    sections: [
      {
        heading: "Find Work",
        items: [
          {
            icon: IconSearch,
            label: "Find Jobs",
            desc: "Browse live vacancies across the Midlands",
            href: "/jobs",
          },
          {
            icon: IconClipboard,
            label: "Register Now",
            desc: "Fast digital registration for shifts",
            href: "/registration",
          },
          {
            icon: IconTruck,
            label: "Driver Jobs",
            desc: "HGV Class 1, 2 and 7.5T assignments",
            href: "/drivers",
          },
          {
            icon: IconBulb,
            label: "Why Work With Us",
            desc: "Weekly pay, holiday pay and worker app",
            href: "/candidates",
          },
        ],
      },
      {
        heading: "Candidate Support",
        items: [
          {
            icon: IconHelp,
            label: "Candidate FAQs",
            desc: "Answers to common worker questions",
            href: "/faq",
          },
          {
            icon: IconStar,
            label: "Success Stories",
            desc: "Real worker journeys and reviews",
            href: "/success-stories",
          },
          {
            icon: IconHelp,
            label: "Pay Query",
            desc: "Direct support for payroll inquiries",
            href: "/pay-query",
          },
        ],
      },
    ],
  },
};

// ─── Dropdown content renderer ───────────────────────────────────────

function StandardColumns({ menu, isSolid }) {
  const dark = !isSolid;
  return (
    <div className="flex flex-col">
      {/* Featured Header */}
      {menu.featured && (
        <Link
          href={menu.featured.href}
          className={`block px-6 pt-4 pb-3.5 border-b ${
            dark ? "border-white/10 hover:bg-white/4" : "border-gray-100 hover:bg-gray-50"
          } transition-colors group`}
        >
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-5" />
            <p className={`text-[10px] font-bold uppercase tracking-wider ${dark ? "text-teal-4" : "text-teal-6"}`}>
              Overview
            </p>
          </div>
          <p className={`mt-0.5 text-sm font-bold ${dark ? "text-white group-hover:text-teal-4" : "text-gray-900 group-hover:text-teal-6"} transition-colors`}>
            {menu.featured.title}
          </p>
          <p className={`mt-0.5 text-xs ${dark ? "text-white/50" : "text-gray-500"}`}>
            {menu.featured.desc}
          </p>
        </Link>
      )}

      {/* Columns Grid */}
      <div className="p-5">
        <div
          className="grid gap-x-8 gap-y-1"
          style={{ gridTemplateColumns: `repeat(${menu.sections.length}, 1fr)` }}
        >
          {menu.sections.map((section) => (
            <div key={section.heading}>
              <p
                className={`mb-3 text-[11px] font-bold uppercase tracking-widest ${
                  dark ? "text-teal-5" : "text-teal-6"
                }`}
              >
                {section.heading}
              </p>
              <div className="flex flex-col gap-0.5">
                {section.items.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`group flex items-start gap-3 rounded-lg px-2.5 py-2 transition-colors duration-150
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
                        className={`text-sm font-semibold leading-snug ${
                          dark ? "text-white group-hover:text-teal-4" : "text-gray-900 group-hover:text-teal-6"
                        }`}
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

      {/* Footer CTA */}
      {menu.footer && (
        <Link
          href={menu.footer.href}
          className={`block border-t px-6 py-3.5 transition-colors
            ${
              dark
                ? "border-white/10 bg-teal-5/8 hover:bg-teal-5/14"
                : "border-gray-100 bg-teal-1/60 hover:bg-teal-1"
            }`}
        >
          <div className="flex items-center gap-2">
            <span
              className={`text-sm font-bold ${dark ? "text-white" : "text-gray-900"}`}
            >
              {menu.footer.label}
            </span>
            {menu.footer.badge && (
              <span className="rounded-full bg-teal-5 px-2 py-0.5 text-[10px] font-bold text-black uppercase">
                {menu.footer.badge}
              </span>
            )}
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

          {/* Crawler-accessible static links for LLMs and SEO */}
          <div className="sr-only">
            {Object.values(menuData).map((menu) => (
              <div key={`crawl-${menu.id}`}>
                <span>{menu.title}</span>
                {menu.featured && (
                  <Link href={menu.featured.href}>{menu.featured.title}</Link>
                )}
                {menu.sections.map((section) => (
                  <div key={section.heading}>
                    <span>{section.heading}</span>
                    <ul>
                      {section.items.map((item) => (
                        <li key={item.href}>
                          <Link href={item.href}>{item.label}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
                {menu.footer && (
                  <Link href={menu.footer.href}>{menu.footer.label}</Link>
                )}
              </div>
            ))}
          </div>
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
                        <StandardColumns
                          menu={menuData[activeDropdown]}
                          isSolid={false}
                        />
                      </motion.div>
                    </AnimatePresence>
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
            Find Staff
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

                    {menu.featured && (
                      <Link
                        href={menu.featured.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="flex items-center justify-between px-3 py-2.5 rounded-xl bg-teal-5/10 hover:bg-teal-5/20 text-teal-6 dark:text-teal-4 transition-colors group mx-1"
                      >
                        <span className="text-xs font-bold tracking-tight">
                          {menu.featured.title}
                        </span>
                        <span className="text-xs font-bold">→</span>
                      </Link>
                    )}

                    <div className="grid grid-cols-1 gap-1">
                      {menu.sections.map((section) => (
                        <div key={section.heading} className="space-y-1">
                          <p className="text-[9px] font-bold uppercase tracking-wider text-gray-400 dark:text-white/30 px-3 pt-2">
                            {section.heading}
                          </p>
                          {section.items.map((item) => {
                            const Icon = item.icon;

                            return (
                              <Link
                                key={item.label}
                                href={item.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="flex items-center gap-4 px-3 py-2.5 rounded-xl hover:bg-gray-100 dark:hover:bg-white/5 active:bg-gray-200 dark:active:bg-white/10 transition-colors group"
                              >
                                {Icon && (
                                  <span className="shrink-0 flex h-8 w-8 items-center justify-center rounded-lg bg-gray-100 dark:bg-white/5 text-teal-6 dark:text-teal-4 group-hover:bg-teal-5 group-hover:text-black transition-all">
                                    <Icon size={16} />
                                  </span>
                                )}

                                <div>
                                  <div className="text-[14px] font-semibold text-gray-900 dark:text-white group-hover:text-teal-6 dark:group-hover:text-teal-4 transition-colors">
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
                  Find Staff
                </Button>
              </div>
            </motion.div>
          </div>,
          document.body,
        )}
    </header>
  );
}
