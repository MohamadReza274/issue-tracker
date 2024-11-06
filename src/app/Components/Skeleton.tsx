import React from 'react';

const classNames = (...classes: string[]) => {
    return classes.filter(Boolean).join(' ');
};

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
    height?: string; // Allow custom height
    width?: string;
}

const Skeleton = ({className = "", height = "h-8", width = "w-full", ...props}: SkeletonProps) => {
    return (
        <div className={classNames("animate-pulse flex items-center space-x-4", className)} {...props}>
            <div
                className={classNames(
                    "bg-gray-300 dark:bg-slate-700 rounded",
                    height, // Set height dynamically
                    width,
                )}
            ></div>
        </div>
    );
};

export default Skeleton;
