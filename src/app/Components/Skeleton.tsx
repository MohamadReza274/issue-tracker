import React from 'react';

const classNames = (...classes: string[]) => {
    return classes.filter(Boolean).join(' ');
};

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
    height?: string; // Allow custom height
}

const Skeleton = ({className = "", height = "h-8", ...props}: SkeletonProps) => {
    return (
        <div className={classNames("animate-pulse flex space-x-4", className)} {...props}>
            <div
                className={classNames(
                    "bg-gray-300 dark:bg-slate-700 w-full rounded my-2",
                    height // Set height dynamically
                )}
            ></div>
        </div>
    );
};

export default Skeleton;
