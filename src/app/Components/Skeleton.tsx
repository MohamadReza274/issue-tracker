import React from 'react';

const classNames = (...classes: string[]) => {
    return classes.filter(Boolean).join(' ');
};

type Round = "none" | "sm" | "md" | "lg" | "xl";

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
    height?: string; // Allow custom height
    width?: string;
    rounded?: Round;
}

const radiusMap: Record<Round, { value: string, class: string }> = {
    sm: {value: "sm", class: "rounded"},
    md: {value: "md", class: "rounded-md"},
    lg: {value: "lg", class: "rounded-lg"},
    xl: {value: "xl", class: "rounded-xl"},
    none: {value: "none", class: "rounded-none"}
}


const Skeleton = ({rounded = "none", className = "", height = "h-8", width = "w-full", ...props}: SkeletonProps) => {
    return (
        <div className={classNames("animate-pulse flex items-center space-x-4", className)} {...props}>
            <div
                className={classNames(
                    "bg-gray-300 dark:bg-slate-700 w-full",
                    height, // Set height dynamically
                    width,
                    radiusMap[rounded]?.class
                )}
            ></div>
        </div>
    );
};

export default Skeleton;
