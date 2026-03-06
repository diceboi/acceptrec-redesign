import React from "react";
import { cn } from "@/lib/utils";

export const Button = React.forwardRef(
    (
        {
            className,
            variant = "solid", // solid | outline | ghost
            colorScheme = "green", // green | purple | yellow
            size = "md", // sm | md | lg
            textColor = "", // allows overriding text color (e.g., "text-green-5")
            hoverTextColor = "", // allows overriding hover text color (e.g., "hover:text-white")
            asChild = false,
            ...props
        },
        ref
    ) => {
        const Component = asChild ? "span" : "button";

        const baseStyles =
            "cursor-pointer inline-flex items-center justify-center rounded-lg font-bold transition-all disabled:opacity-50 disabled:pointer-events-none";

        // Size variants
        const sizeStyles = {
            sm: "h-9 px-4 text-sm",
            md: "h-11 px-6 text-[length:var(--text-base)]",
            lg: "h-14 px-8 text-lg",
        };

        // Color and Variant styles mapping
        const variantStyles = {
            solid: {
                green:
                    "bg-green-5 text-white hover:bg-green-6",
                purple:
                    "bg-purple-5 text-white hover:bg-purple-6",
                yellow:
                    "bg-yellow-5 text-white hover:bg-yellow-6",
                black:
                    "bg-black text-white hover:bg-black/50 hover:text-black backdrop-blur-sm",
            },
            outline: {
                green:
                    "border-2 border-green-5 text-green-5 hover:bg-green-1",
                purple:
                    "border-2 border-purple-5 text-purple-5 hover:bg-purple-1",
                yellow:
                    "border-2 border-yellow-5 text-yellow-5 hover:bg-yellow-1",
                black:
                    "border-2 border-black text-black hover:bg-black/30 hover:text-black",
            },
            ghost: {
                green: "text-green-5 hover:bg-green-1",
                purple: "text-purple-5 hover:bg-purple-1",
                yellow: "text-yellow-5 hover:bg-yellow-1",
                black: "text-black hover:bg-black/50 hover:text-black backdrop-blur-sm",
            },
        };

        const colorClasses =
            variantStyles[variant]?.[colorScheme] ||
            variantStyles.solid.green;

        return (
            <Component
                ref={ref}
                className={cn(baseStyles, sizeStyles[size], colorClasses, textColor, hoverTextColor, className)}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";
