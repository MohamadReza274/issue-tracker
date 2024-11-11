"use client";

import {ThemeProvider} from "next-themes";
import React from "react";
import {SessionProvider} from "next-auth/react";

export function Providers({children}: { children: React.ReactNode }) {
    return (
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <SessionProvider>
                {children}
            </SessionProvider>
        </ThemeProvider>
    );
}
