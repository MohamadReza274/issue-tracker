import React from 'react';
import Link from "next/link";
import {BugIcon} from "@/lib/icons";
import ThemeSwitch from "@/app/Components/Theme-Switch";
import NavItems from "@/app/NavItems";
import {auth} from "@/app/auth";
import ProfileMenu from "@/app/Components/ProfileMenu";

export type NavItemsType = { id: number, label: string, href: string }[];

const navItems: NavItemsType = [
    {id: 1, label: "Dashboard", href: "/"},
    {id: 2, label: "Issues", href: "/issues"},
]

const Navbar = async () => {

    const session = await auth();

    return (
        <nav className="flex items-center px-8 h-16 shadow-md">
            <Link href="/" className="mr-4">
                <BugIcon className={"w-6 h-6"}/>
            </Link>
            <NavItems navItems={navItems}/>
            <ThemeSwitch/>

            {session && session.user ? <ProfileMenu user={session.user}/> :
                <Link href={"/login"} className="btn-primary">Log
                    In</Link>}

        </nav>
    );
};

export default Navbar;