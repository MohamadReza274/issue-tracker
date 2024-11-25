import NextAuth, {NextAuthConfig} from "next-auth";
import Google from "next-auth/providers/google";
import prisma from "@/lib/db";
import {PrismaAdapter} from "@auth/prisma-adapter";
import Credentials from "next-auth/providers/credentials";
import type {Provider} from "next-auth/providers";

export const BASE_URL = "http://localhost:3000";

const providers: Provider[] = [
    Google,
    Credentials({
        name: "Credentials",
        credentials: {
            email: {label: "Email", placeholder: "Enter your Email", type: "email"},
            password: {
                label: "Password",
                type: "password",
                placeholder: "Enter your password",
            },
        },
        async authorize(credentials) {
            const {email} = credentials as { email: string; password: string };
            const user = await prisma.user.findUnique({where: {email}});

            if (!user) {
                return null;
            }

            return user;
        },
    }),
];

export const providerMap = providers
    .map((provider) => {
        if (typeof provider === "function") {
            const providerData = provider();
            return {id: providerData.id, name: providerData.name};
        } else {
            return {id: provider.id, name: provider.name};
        }
    })
    .filter((provider) => provider.id !== "credentials");

export const authConfig = {
    adapter: PrismaAdapter(prisma),
    providers: [Google],
    pages: {
        signIn: "/login",
    },
    secret: process.env.AUTH_SECRET,
    callbacks: {
        authorized: async ({auth}) => {
            return !!auth;
        },
    },
    session: {
        strategy: "jwt",
    },
} satisfies NextAuthConfig;

export const {handlers, auth, signOut, signIn} = NextAuth(authConfig);
