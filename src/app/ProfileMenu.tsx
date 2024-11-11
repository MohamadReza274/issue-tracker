"use client"
import React from 'react';
import {Menu, MenuButton, MenuItem, MenuItems, Transition} from "@headlessui/react";
import {classNames} from "@/lib/constants";
import Image from "next/image";
import {User} from "next-auth";
import Link from "next/link";

interface Props {
    user: User;
}

const items = [
    {id: 1, label: "Your Profile", href: "/profile"},
    {id: 2, label: "Settings", href: "/settings"},
    {id: 3, label: "Sign Out", href: "/api/auth/signout", class: "text-red-600 dark:text-red-500"},
]

const ProfileMenu = ({user}: Props) => {
    return (
        <Menu as="div" className="relative ml-4 flex-shrink-0">
            <div>
                <MenuButton
                    className="relative flex rounded-full bg-white dark:bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                    <span className="absolute -inset-1.5"/>
                    <span className="sr-only">Open user menu</span>
                    {user.image && <Image width={32} height={32}
                                          className="h-8 w-8 rounded-full"
                                          src={user.image}
                                          alt=""
                    />}
                </MenuButton>
            </div>
            <Transition
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <MenuItems
                    className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white dark:bg-gray-800 py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    {
                        items.map(item => (<MenuItem key={item.id}>
                            {({focus}) => (
                                <Link
                                    href={item.href}
                                    className={classNames(
                                        focus ? "bg-gray-100" : "",
                                        item.class ? item?.class : "",
                                        "block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 dark:hover:bg-gray-700",
                                    )}
                                >
                                    {item.label}
                                </Link>
                            )}
                        </MenuItem>))
                    }
                </MenuItems>
            </Transition>
        </Menu>
    );
};

export default ProfileMenu;