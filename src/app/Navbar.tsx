"use client"

import React from 'react';
import Link from "next/link";
import {BugIcon} from "@/lib/icons";
import {usePathname} from "next/navigation";


const navItems = [
    {id: 1, label: "Dashboard", href: "/"},
    {id: 2, label: "Issues", href: "/issues"},
]

const classNames = (...classes: string[]) => {
    return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
    const pathname = usePathname();
    return (
        <nav className="flex items-center justify-between px-8 h-16 shadow-md">
            <Link href="/">
                <BugIcon className={"w-6 h-6"}/>
            </Link>
            <ul className="flex items-center gap-x-4">
                {
                    navItems.map((item) => {
                        return <li key={item.id}
                                   className={classNames(pathname === item.href ? "border-b-2 border-blue-600" : " ", "hover:border-b-2 hover:border-blue-600")}>
                            <Link
                                href={item.href}>{item.label}</Link></li>
                    })
                }
            </ul>
        </nav>
    );
};

export default Navbar;