"use server"
import {signOut} from "@/app/auth";

export const SignOut = async () => {
    await signOut()
}