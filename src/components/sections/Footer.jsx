"use client";

import Link from "next/link";
import Image from "next/image";
import { FaLinkedin, FaXTwitter, FaYoutube, FaChevronDown } from "react-icons/fa6";
import { Heading, Text } from "@/components/ui/Typography";

export function Footer() {
    return (
        <footer className="w-full bg-white px-8 py-12 md:px-16 dark:bg-[#0a0a0a]">
            {/* Top Section - Grid Layout */}
            <div className="mx-auto flex w-full max-w-7xl flex-col justify-between gap-12 lg:flex-row">
                {/* Logo & Socials (Left Column) */}
                <div className="flex flex-col items-start gap-8 lg:w-1/4">
                    <Link href="/">
                        {/* Using the same logo as Hero, but styled for Footer sizing */}
                        <Image 
                            src="/acceptrec-white-logo.webp" 
                            alt="AcceptRec Logo" 
                            width={160} 
                            height={48} 
                            className="h-10 w-auto object-contain"
                        />
                    </Link>
                    <div className="flex gap-4 text-gray-800 dark:text-gray-300">
                        <Link href="#" className="transition-opacity hover:opacity-75">
                            <span className="sr-only">LinkedIn</span>
                            <FaLinkedin size={24} />
                        </Link>
                        <Link href="#" className="transition-opacity hover:opacity-75">
                            <span className="sr-only">X (Twitter)</span>
                            <FaXTwitter size={24} />
                        </Link>
                        <Link href="#" className="transition-opacity hover:opacity-75">
                            <span className="sr-only">YouTube</span>
                            <FaYoutube size={24} />
                        </Link>
                    </div>
                </div>

                {/* Navigation Links Columns */}
                <div className="grid w-full grid-cols-2 gap-8 sm:grid-cols-4 lg:w-3/4">
                    {/* FOR JOB SEEKERS */}
                    <div className="flex flex-col gap-4">
                        <h3 className="text-sm font-bold uppercase tracking-wider text-black dark:text-white">
                            For Job Seekers
                        </h3>
                        <div className="flex flex-col gap-3 text-[15px] font-medium text-gray-500 dark:text-gray-400">
                            <Link href="#" className="hover:text-black dark:hover:text-white transition-colors">Get work today</Link>
                            <Link href="#" className="hover:text-black dark:hover:text-white transition-colors">Download app</Link>
                            <Link href="#" className="hover:text-black dark:hover:text-white transition-colors">Support</Link>
                        </div>
                    </div>

                    {/* FOR COMPANIES */}
                    <div className="flex flex-col gap-4">
                        <h3 className="text-sm font-bold uppercase tracking-wider text-black dark:text-white">
                            For Companies
                        </h3>
                        <div className="flex flex-col gap-3 text-[15px] font-medium text-gray-500 dark:text-gray-400">
                            <Link href="#" className="hover:text-black dark:hover:text-white transition-colors">Find reliable workers</Link>
                            <Link href="#" className="hover:text-black dark:hover:text-white transition-colors">AcceptRec Business</Link>
                            <Link href="#" className="hover:text-black dark:hover:text-white transition-colors">Our locations</Link>
                            <Link href="#" className="hover:text-black dark:hover:text-white transition-colors">Customer stories</Link>
                            <Link href="#" className="hover:text-black dark:hover:text-white transition-colors">Book a demo</Link>
                            <Link href="#" className="hover:text-black dark:hover:text-white transition-colors">Blog</Link>
                        </div>
                    </div>

                    {/* ACCEPTREC */}
                    <div className="flex flex-col gap-4">
                        <h3 className="text-sm font-bold uppercase tracking-wider text-black dark:text-white">
                            AcceptRec
                        </h3>
                        <div className="flex flex-col gap-3 text-[15px] font-medium text-gray-500 dark:text-gray-400">
                            <Link href="#" className="hover:text-black dark:hover:text-white transition-colors">About us</Link>
                            <Link href="#" className="hover:text-black dark:hover:text-white transition-colors">Newsroom</Link>
                            <Link href="#" className="hover:text-black dark:hover:text-white transition-colors">Careers</Link>
                            <Link href="#" className="hover:text-black dark:hover:text-white transition-colors">Graduate Program</Link>
                        </div>
                    </div>

                    {/* LEGAL */}
                    <div className="flex flex-col gap-4">
                        <h3 className="text-sm font-bold uppercase tracking-wider text-black dark:text-white">
                            Legal
                        </h3>
                        <div className="flex flex-col gap-3 text-[15px] font-medium text-gray-500 dark:text-gray-400">
                            <Link href="#" className="hover:text-black dark:hover:text-white transition-colors">Terms of use</Link>
                            <Link href="#" className="hover:text-black dark:hover:text-white transition-colors">Privacy notice</Link>
                            <Link href="#" className="hover:text-black dark:hover:text-white transition-colors">Whistleblower channel</Link>
                            <Link href="#" className="hover:text-black dark:hover:text-white transition-colors">Policies and Disclosures</Link>
                            <Link href="#" className="hover:text-black dark:hover:text-white transition-colors">Security</Link>
                            <Link href="#" className="hover:text-black dark:hover:text-white transition-colors">Cookie Policy</Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Section - Language & Copyright */}
            <div className="mx-auto mt-16 flex w-full max-w-7xl flex-col items-center justify-between gap-6 border-t border-gray-200 dark:border-gray-800 pt-8 sm:flex-row">
                <button className="flex items-center gap-2 rounded-md bg-[#111] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-black dark:bg-[#222] dark:hover:bg-[#333]">
                    Language (US)
                    <FaChevronDown size={14} className="opacity-80" />
                </button>
                <Text className="text-sm text-gray-500 dark:text-gray-400">
                    &copy; {new Date().getFullYear()} Accept Recruitment. All rights reserved.
                </Text>
            </div>
        </footer>
    );
}
