"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { IconLayoutDashboard, IconFiles, IconComponents } from "@tabler/icons-react";

const navItems = [
    {
        title: "Vezérlőpult",
        href: "/admin",
        icon: <IconLayoutDashboard size={20} />,
    },
    {
        title: "Oldalak",
        href: "/admin/oldalak",
        icon: <IconFiles size={20} />,
    },
    {
        title: "Komponensek",
        href: "/admin/komponensek",
        icon: <IconComponents size={20} />,
    },
];

export function AdminSidebar() {
    const pathname = usePathname();

    return (
        <div className="flex h-screen w-64 flex-col border-r border-gray-200 bg-white dark:border-gray-800 dark:bg-black">
            <div className="flex h-16 items-center border-b border-gray-200 px-6 dark:border-gray-800">
                <Link href="/" className="font-sans text-xl font-bold tracking-tight text-purple-5 dark:text-purple-2">
                    Acceptrec
                    <span className="text-green-5"> Admin</span>
                </Link>
            </div>

            <nav className="flex-1 space-y-1 p-4">
                {navItems.map((item) => {
                    const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);

                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                                isActive
                                    ? "bg-purple-1 text-purple-6 dark:bg-purple-9 dark:text-purple-2"
                                    : "text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"
                            )}
                        >
                            {item.icon}
                            {item.title}
                        </Link>
                    );
                })}
            </nav>

            <div className="p-4 border-t border-gray-200 dark:border-gray-800">
                <Link
                    href="/"
                    className="flex items-center gap-3 text-sm text-gray-500 hover:text-purple-5 dark:hover:text-purple-3 transition-colors"
                >
                    ← Vissza az oldalra
                </Link>
            </div>
        </div>
    );
}
