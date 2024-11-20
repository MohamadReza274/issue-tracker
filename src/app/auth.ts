import NextAuth, {NextAuthConfig} from "next-auth";
import Google from 'next-auth/providers/google'
import prisma from "@/lib/db";
import {PrismaAdapter} from '@auth/prisma-adapter'

export const BASE_URL = "http://localhost:3000";

export const authConfig = {
    adapter: PrismaAdapter(prisma),
    providers: [Google],
    pages:{
        signIn:"/login",
    },
    secret:process.env.AUTH_SECRET,
    callbacks:{
      authorized: async ({auth}) => {
          return !!auth;
      }
    },
    session: {
        strategy:"jwt"
    }
} satisfies NextAuthConfig;


export const {handlers, auth, signOut, signIn} = NextAuth(authConfig);