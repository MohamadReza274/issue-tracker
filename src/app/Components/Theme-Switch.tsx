"use client";

import {useState, useEffect} from "react";
import {useTheme} from "next-themes";
import {MoonIcon, SunIcon} from "@/lib/icons";

export default function ThemeSwitch() {
    const [mounted, setMounted] = useState(false);
    const {systemTheme, theme, setTheme} = useTheme();
    const currentTheme = theme === "system" ? systemTheme : theme;

    useEffect(() => setMounted(true), []);

    if (!mounted) return <>...</>;

    if (currentTheme === "dark") {
        return <SunIcon className="h-6 w-6 hover:cursor-pointer" onClick={() => setTheme("light")}/>;
    }

    if (currentTheme === "light") {
        return (
            <MoonIcon className="h-6 w-6 text-gray-900 hover:cursor-pointer" onClick={() => setTheme("dark")}/>
        );
    }
}