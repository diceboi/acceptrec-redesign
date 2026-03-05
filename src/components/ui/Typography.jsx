import React from "react";
import { cn } from "@/lib/utils";

export function Heading({
    as: Component = "h1",
    className,
    children,
    ...props
}) {
    // Map standard tags to their corresponding text sizes defined in our clamp variables
    const sizeClassMap = {
        h1: "text-[length:var(--text-h1)]",
        h2: "text-[length:var(--text-h2)]",
        h3: "text-[length:var(--text-h3)]",
        h4: "text-[length:var(--text-h4)]",
        h5: "text-[length:var(--text-h5)]",
        h6: "text-[length:var(--text-h5)]", // Fallback for h6
    };

    const defaultSizeClass =
        sizeClassMap[Component] || sizeClassMap.h1;

    return (
        <Component
            className={cn(
                "font-sans font-regular leading-tight tracking-normal text-purple-5 dark:text-white",
                defaultSizeClass,
                className
            )}
            {...props}
        >
            {children}
        </Component>
    );
}

export function Text({
    as: Component = "p",
    className,
    children,
    ...props
}) {
    return (
        <Component
            className={cn(
                "font-sans text-[length:var(--text-base)] leading-relaxed text-purple-4 dark:text-purple-2",
                className
            )}
            {...props}
        >
            {children}
        </Component>
    );
}
