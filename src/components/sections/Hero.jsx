"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Heading, Text } from "@/components/ui/Typography";
import { Button } from "@/components/ui/Button";

export function Hero() {
    const [hoverState, setHoverState] = useState(null);

    // Define blob colors based on hover state for dynamic response
    const blob1Color = hoverState === "left" ? "var(--color-green-4)" : hoverState === "right" ? "var(--color-purple-4)" : "var(--color-green-5)";
    const blob2Color = hoverState === "left" ? "var(--color-green-7)" : hoverState === "right" ? "var(--color-purple-7)" : "var(--color-purple-5)";
    const blob3Color = hoverState === "left" ? "var(--color-purple-3)" : hoverState === "right" ? "var(--color-green-3)" : "var(--color-green-3)";
    const blob4Color = hoverState === "left" ? "var(--color-green-5)" : hoverState === "right" ? "var(--color-purple-5)" : "var(--color-purple-3)";

    return (
        <div className="flex flex-col w-full">


            <section className="relative flex min-h-[calc(100vh)] w-full flex-col overflow-hidden bg-white md:flex-row dark:bg-[#0a0a0a]">
                {/* Animated Mesh Gradient Background */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                    {/* Blob 1 (Top Left) */}
                    <motion.div
                        className="absolute rounded-full"
                        style={{ height: "90%", width: "80%", left: "-20%", top: "-10%", mixBlendMode: "multiply", opacity: 0.8, filter: "blur(10px)" }}
                        animate={{
                            backgroundColor: blob1Color,
                            scale: [1, 1.3, 1],
                            x: [0, 150, 0],
                            y: [0, 80, 0],
                        }}
                        transition={{
                            backgroundColor: { duration: 0.35, ease: "easeOut" },
                            scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                            x: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                            y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                        }}
                    />
                    {/* Blob 2 (Top Right) */}
                    <motion.div
                        className="absolute rounded-full"
                        style={{ height: "80%", width: "70%", right: "-10%", top: "-12%", mixBlendMode: "multiply", opacity: 0.8, filter: "blur(20px)" }}
                        animate={{
                            backgroundColor: blob2Color,
                            scale: [1, 1.4, 1],
                            x: [0, -120, 0],
                            y: [0, 150, 0],
                        }}
                        transition={{
                            backgroundColor: { duration: 0.35, ease: "easeOut" },
                            scale: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 },
                            x: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 },
                            y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 },
                        }}
                    />
                    {/* Blob 3 (Bottom Right) */}
                    <motion.div
                        className="absolute rounded-full"
                        style={{ height: "65%", width: "80%", right: "-20%", bottom: "-15%", mixBlendMode: "multiply", opacity: 0.8, filter: "blur(80px)" }}
                        animate={{
                            backgroundColor: blob3Color,
                            scale: [1, 1.35, 1],
                            x: [0, -180, 0],
                            y: [0, -100, 0],
                        }}
                        transition={{
                            backgroundColor: { duration: 0.35, ease: "easeOut" },
                            scale: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
                            x: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
                            y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
                        }}
                    />
                    {/* Blob 4 (Bottom Left) */}
                    <motion.div
                        className="absolute rounded-full"
                        style={{ height: "70%", width: "75%", left: "-15%", bottom: "-10%", mixBlendMode: "multiply", opacity: 0.8, filter: "blur(10px)" }}
                        animate={{
                            backgroundColor: blob4Color,
                            scale: [1, 1.45, 1],
                            x: [0, 140, 0],
                            y: [0, -130, 0],
                        }}
                        transition={{
                            backgroundColor: { duration: 0.35, ease: "easeOut" },
                            scale: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 },
                            x: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 },
                            y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 },
                        }}
                    />

                    {/* The Glass Blur Overlay that ties the blobs together */}
                    <div className="absolute inset-0 z-10 backdrop-blur-[100px] bg-white/30 dark:bg-black/40" />
                </div>

                {/* Left Side: FIND STAFF */}
                <motion.div
                    className="relative z-20 flex flex-1 cursor-pointer flex-col items-center justify-center p-8 pb-20 text-center md:p-16 md:pb-24"
                    onMouseEnter={() => setHoverState("left")}
                    onMouseLeave={() => setHoverState(null)}
                    animate={{
                        flex: hoverState === "left" ? 1.1 : hoverState === "right" ? 0.9 : 1,
                        backdropFilter: hoverState === "left" ? "blur(10px)" : "blur(0px)",
                        backgroundColor: hoverState === "left" ? "rgba(255, 255, 255, 0.05)" : "rgba(255, 255, 255, 0)",
                    }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                >
                    <Text as="span" className="mb-4 font-bold tracking-widest text-green-7 dark:text-green-3 uppercase">
                        Clients
                    </Text>
                    <Heading as="h1" variant="h2" className="mb-6 max-w-sm leading-[1.1] text-black dark:text-white">
                        Trusted workers. Better results.
                    </Heading>
                    <Text className="mb-64 max-w-sm text-gray-800 dark:text-gray-200">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                        nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
                    </Text>
                    
                    {/* Worker Image */}
                    <motion.div
                        className="pointer-events-none absolute -bottom-24 left-1/2 -translate-x-1/2 w-96 h-96 md:w-130 md:h-130"
                        animate={{
                            opacity: hoverState === "left" ? 1 : 0.4
                        }}
                        transition={{ duration: 0.35 }}
                    >
                        <Image
                            src="/boss.webp"
                            alt="Worker"
                            fill
                            className="object-contain object-bottom"
                        />
                    </motion.div>

                    <Button colorScheme="black" textColor="text-white" hoverTextColor="hover:text-white" size="lg" className="absolute bottom-8 z-10 md:bottom-24">
                        Find clients
                    </Button>
                </motion.div>

                {/* Right Side: FIND WORK */}
                <motion.div
                    className="relative z-20 flex flex-1 cursor-pointer flex-col items-center justify-center p-8 pb-20 text-center md:p-16 md:pb-24"
                    onMouseEnter={() => setHoverState("right")}
                    onMouseLeave={() => setHoverState(null)}
                    animate={{
                        flex: hoverState === "right" ? 1.1 : hoverState === "left" ? 0.9 : 1,
                        backdropFilter: hoverState === "right" ? "blur(10px)" : "blur(0px)",
                        backgroundColor: hoverState === "right" ? "rgba(255, 255, 255, 0.05)" : "rgba(255, 255, 255, 0)",
                    }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                >
                    <Text as="span" className="mb-4 font-bold tracking-widest text-purple-7 dark:text-purple-3 uppercase">
                        Candidates
                    </Text>
                    <Heading as="h1" variant="h2" className="mb-6 max-w-sm leading-[1.1] text-black dark:text-white">
                        Find work<br></br>that fits.
                    </Heading>
                    <Text className="mb-64 max-w-sm text-gray-800 dark:text-gray-200">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                        nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
                    </Text>

                    {/* Boss Image */}
                    <motion.div
                        className="pointer-events-none absolute -bottom-24 left-1/2 -translate-x-1/2 w-96 h-96 md:w-130 md:h-130"
                        animate={{
                            opacity: hoverState === "right" ? 1 : 0.4
                        }}
                        transition={{ duration: 0.35 }}
                    >
                        <Image
                            src="/worker.webp"
                            alt="Boss"
                            fill
                            className="object-contain object-bottom"
                        />
                    </motion.div>

                    <Button colorScheme="black" textColor="text-white" hoverTextColor="hover:text-white" size="lg" className="absolute bottom-8 md:bottom-24 z-10">
                        Find work
                    </Button>
                </motion.div>

                {/* Large Background Text */}
                <div className="pointer-events-none absolute bottom-0 left-0 w-full flex justify-center -translate-y-[25%] z-10 select-none">
                    <h2 className="text-[18vw] md:text-[12vw] font-bold uppercase leading-none tracking-tighter text-transparent opacity-50 flex justify-center whitespace-nowrap invert-25 [-webkit-text-stroke:2px_rgba(0,0,0,0.75)] dark:[-webkit-text-stroke:2px_rgba(255,255,255,0.75)]">
                        We give a shift
                    </h2>
                </div>
            </section>
        </div>
    );
}
