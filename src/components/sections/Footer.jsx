"use client";

import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { FaLinkedin, FaFacebook, FaTiktok, FaInstagram } from "react-icons/fa6";

const footerLinks = {
  "Industry Sectors": [
    { label: "Warehousing & Industrial", href: "/warehouse-staffing" },
    { label: "Manufacturing", href: "/industries/manufacturing" },
    { label: "Food Production", href: "/industries/food-production" },
    { label: "Driving & Logistics", href: "/driving-recruitment" },
    { label: "Technical", href: "/industries" },
    { label: "Commercial", href: "/industries" },
  ],
  Candidates: [
    { label: "Register Now", href: "https://accept.iqxanywhere.net/xregister" },
    { label: "Find Jobs", href: "/jobs" },
    { label: "Download App", href: "/technology/acceptrewards" },
    { label: "FAQ", href: "/faq" },
    { label: "Support", href: "/candidates" },
  ],
  Clients: [
    { label: "Find Workers", href: "/employers" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Our Locations", href: "/offices" },
    { label: "Managed Services", href: "/on-site-managed-services" },
    { label: "Book a Demo", href: "/get-started" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Meet the Team", href: "/team" },
    { label: "Blogs", href: "/blog" },
    { label: "Contact Us", href: "/get-started" },
    { label: "Work for Us", href: "/join-our-team" },
    { label: "Privacy Policy", href: "/privacy-policy" },
  ],
};

const offices = [
  { city: "Leicester", phone: "0116 218 2133" },
  { city: "Coventry", phone: "0247 718 0356" },
  { city: "Tamworth", phone: "0182 743 8334" },
];

export function Footer() {
  const { resolvedTheme } = useTheme();
  const isLight = resolvedTheme === "light";
  return (
    <footer
      className={`w-full border-t px-6 py-16 md:px-12 transition-colors duration-300 ${isLight ? "bg-gray-50 border-gray-200" : "bg-black border-white/8"}`}
    >
      <div className="mx-auto max-w-7xl">
        {/* Top: Logo + columns */}
        <div className="flex flex-col gap-12 lg:flex-row">
          {/* Left: Logo, tagline, social, offices */}
          <div className="flex flex-col gap-8 lg:w-72 lg:shrink-0">
            <Link href="/">
              <Image
                src={
                  isLight
                    ? "/Accept-Stacked-Logo-with-Strapline-RGB300.webp"
                    : "/acceptrec-white-logo.webp"
                }
                alt="Accept Recruitment Logo"
                width={160}
                height={48}
                className="h-10 w-auto object-contain"
              />
            </Link>
            <p className="text-sm leading-relaxed text-white/40">
              Dependable temporary and permanent staffing across the Midlands.
              4.8★ rated on Google.
            </p>

            {/* Social icons */}
            <div className="flex gap-4 text-white/50">
              <Link
                href="#"
                aria-label="LinkedIn"
                className="transition-colors hover:text-teal-5"
              >
                <FaLinkedin size={20} />
              </Link>
              <Link
                href="#"
                aria-label="Facebook"
                className="transition-colors hover:text-teal-5"
              >
                <FaFacebook size={20} />
              </Link>
              <Link
                href="#"
                aria-label="TikTok"
                className="transition-colors hover:text-teal-5"
              >
                <FaTiktok size={20} />
              </Link>
              <Link
                href="#"
                aria-label="Instagram"
                className="transition-colors hover:text-teal-5"
              >
                <FaInstagram size={20} />
              </Link>
            </div>

            {/* Offices */}
            <div className="flex flex-col gap-3">
              {offices.map((o) => (
                <div
                  key={o.city}
                  className="flex items-center justify-between text-sm"
                >
                  <span className="font-semibold text-white/60">{o.city}</span>
                  <a
                    href={`tel:${o.phone.replace(/\s/g, "")}`}
                    className="text-white/40 transition-colors hover:text-teal-4"
                  >
                    {o.phone}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Nav columns */}
          <div className="grid flex-1 grid-cols-2 gap-8 sm:grid-cols-4">
            {Object.entries(footerLinks).map(([section, links]) => (
              <div key={section} className="flex flex-col gap-4">
                <h3 className="text-xs font-bold uppercase tracking-wider text-white/60">
                  {section}
                </h3>
                <div className="flex flex-col gap-2.5">
                  {links.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="text-sm text-white/35 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/8 pt-8 text-sm text-white/30 sm:flex-row">
          <span>
            &copy; {new Date().getFullYear()} Accept Recruitment. All rights
            reserved.
          </span>
          <div className="flex gap-5">
            <Link href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              GDPR
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Modern Slavery Statement
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
