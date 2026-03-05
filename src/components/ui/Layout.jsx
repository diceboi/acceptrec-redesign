import { cn } from "@/lib/utils";

export function Container({ className, children, ...props }) {
    return (
        <div
            className={cn("mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8", className)}
            {...props}
        >
            {children}
        </div>
    );
}

export function Section({
    className,
    children,
    id,
    as: Component = "section",
    ...props
}) {
    return (
        <Component
            id={id}
            className={cn("py-12 md:py-16 lg:py-24", className)}
            {...props}
        >
            {children}
        </Component>
    );
}
