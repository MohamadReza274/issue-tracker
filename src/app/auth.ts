import NextAuth, {NextAuthConfig} from "next-auth";
import Google from 'next-auth/providers/google'
import prisma from "@/lib/db";
import {PrismaAdapter} from '@auth/prisma-adapter'


const config = {
    adapter: PrismaAdapter(prisma),
    providers: [Google],
    pages:{
        signIn:"/login",
    }
} satisfies NextAuthConfig;


export const {handlers, auth, signOut, signIn} = NextAuth(config);