"use client";

import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { FaLinkedin, FaFacebook, FaTiktok, FaInstagram } from "react-icons/fa6";

const footerLinks = {
  "For Candidates": [
    { label: "Find Jobs", href: "/jobs" },
    { label: "Register", href: "/registration" },
    { label: "AcceptRewards", href: "/technology/acceptrewards" },
    { label: "Success Stories", href: "/success-stories" },
    { label: "Candidate Info", href: "/candidates" },
    { label: "Driver Jobs", href: "/drivers" },
  ],
  "For Employers": [
    { label: "Employer Services", href: "/employers" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Industries", href: "/industries" },
    { label: "About Us", href: "/about" },
    { label: "Meet the Team", href: "/team" },
  ],
  "Important Links": [
    { label: "Blog", href: "/blog" },
    { label: "FAQ", href: "/faq" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "GDPR", href: "/gdpr" },
    { label: "Modern Slavery", href: "/modern-slavery-statement" },
    { label: "Pay Query", href: "/pay-query" },
    { label: "Work for Us", href: "/join-our-team" },
  ],
};

const offices = [
  { city: "Leicester", phone: "07495 995406", whatsapp: "447495995406", address: "Unit 4, Oswin Road, LE3 1HR", href: "/offices/leicester" },
  { city: "Coventry", phone: "07833 945679", whatsapp: "447833945679", address: "1 Harnall Row, CV1 5DW", href: "/offices/coventry" },
  { city: "Tamworth", phone: "07932 787550", whatsapp: "447932787550", address: "95 Lichfield St, B79 7QF", href: "/offices/tamworth" },
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
              <a
                href="https://www.linkedin.com/company/accept-recruitment"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="transition-colors hover:text-teal-5"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="https://www.facebook.com/AcceptRecruitment"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="transition-colors hover:text-teal-5"
              >
                <FaFacebook size={20} />
              </a>
              <a
                href="https://www.tiktok.com/@acceptrecruitment"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="transition-colors hover:text-teal-5"
              >
                <FaTiktok size={20} />
              </a>
              <a
                href="https://www.instagram.com/acceptrecruitment"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="transition-colors hover:text-teal-5"
              >
                <FaInstagram size={20} />
              </a>
            </div>

            {/* Offices */}
            <div className="flex flex-col gap-4">
              {offices.map((o) => (
                <div key={o.city} className="text-sm">
                  <Link href={o.href} className="font-semibold text-white/60 hover:text-white transition-colors">{o.city}</Link>
                  <div className="flex items-center gap-2 mt-1">
                    <a
                      href={`https://wa.me/${o.whatsapp}`}
                      className="text-white/40 transition-colors hover:text-teal-4"
                    >
                      {o.phone}
                    </a>
                  </div>
                  <div className="text-white/25 text-xs mt-0.5">{o.address}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Nav columns */}
          <div className="grid flex-1 grid-cols-2 gap-8 sm:grid-cols-3">
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
            <Link href="/complaints-policy" className="hover:text-white transition-colors">
              Complaints
            </Link>
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy
            </Link>
            <Link href="/gdpr" className="hover:text-white transition-colors">
              GDPR
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
