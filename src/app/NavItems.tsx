"use client"

import React from 'react';
import Link from "next/link";
import {usePathname} from "next/navigation";
import {classNames} from "@/lib/constants";
import {NavItemsType} from "@/app/Navbar";

interface Props {
    navItems: NavItemsType
}

const NavItems = ({navItems}: Props) => {
    const pathname = usePathname();
    return (
        <ul className="flex items-center gap-x-4 flex-grow">
            {
                navItems.map((item) => {
                    return <li key={item.id}
                               className={classNames(pathname === item.href ? "border-b-2 border-blue-600" : " ", "hover:border-b-2 hover:border-blue-600")}>
                        <Link
                            href={item.href}>{item.label}</Link></li>
                })
            }
        </ul>
    );
};

export default NavItems;